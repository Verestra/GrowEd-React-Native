import * as React from 'react';
import {useState, useEffect, useRef} from 'react';
import { ToastAndroid,TouchableOpacity, FlatList, KeyboardAvoidingView, keyboardVerticalOffset, ActivityIndicator,ScrollView,View, Text, Image, LogBox } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from './Style';
import ProgressCircle from 'react-native-progress-circle'
import { ListItem, Button, Avatar, Input } from 'react-native-elements'
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {connect} from 'react-redux';
import axios from 'axios';
import { FAB } from 'react-native-elements';
import Notifservice from '../../../../NotifService'
import { ImagePicker,launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';

import DatePicker from 'react-native-date-picker'

LogBox.ignoreLogs([
	'VirtualizedLists should never be nested', // TODO: Remove when fixed
])
function ActivityHeader({ navigation}) {
    return (
        <View style={styles.headerContainer}>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between'}}>
            <Text style={styles.headerName}>Activity</Text>
            </View>
        </View>
    )
 }

function Activity(props) {
    const [myClass, setMyClass] = useState([]);
    const [fasilitatorClass, setFasilitatorClass] = useState([]);
    const [selectedLanguage, setSelectedLanguage] = useState();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [pageCurrent, setPageCurrent] = useState(1);
    const notification = new Notifservice();

    const navigation = useNavigation(); 

    
    const [className, setClassName] = useState();
    const [categoryId, setCategoryId] = useState();
    const [description, setDescription] = useState();
    const [levelId, setLevelId] = useState();
    const [classPrice, setClassPrice] = useState();
    const [schedule, setSchedule] = useState(new Date());
    const [startTime, setStartTime] = useState(new Date());
    const [finishTime, setFinishTime] = useState(new Date());
    const [image, setImage] = useState();

  
   

    const role = props.authReducers.user.role_id

    const token = props.authReducers.user.token
    const [addClass, setAddClass] = useState();
    const addNewClass = (formData) => {
        return axios.post("http://192.168.1.100:8000/courses/api/addClass", formData, {
          headers: {
            'x-access-token': `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        });
      };
      const submitClassHandler = () => {
        if (!className  || !description || !classPrice) {
            return ToastAndroid.showWithGravityAndOffset(
              "Field Can't be Empty",
              ToastAndroid.LONG,
              ToastAndroid.TOP,
              25,
              350
            );
          }
        if (!image) {
            return ToastAndroid.showWithGravityAndOffset(
                "Image Is Empty",
                ToastAndroid.LONG,
                ToastAndroid.TOP,
                25,
                350
              );
        }
        if (className.length < 5) {
            return ToastAndroid.showWithGravityAndOffset(
              "Class Name Minimum length 5",
              ToastAndroid.LONG,
              ToastAndroid.TOP,
              25,
              350
            );
          }
          if (description.length < 10) {
            return ToastAndroid.showWithGravityAndOffset(
              "Description Minimum Length 10",
              ToastAndroid.LONG,
              ToastAndroid.TOP,
              25,
              350
            );
          }
        const formData = new FormData();
        formData.append('className', className);
        formData.append('categoryId', categoryId);
        formData.append('description', description);
        formData.append('level_id', levelId);
        formData.append('class_price', classPrice);
        formData.append('schedule', schedule.toString().substr(4, 12));
        formData.append('start_time', startTime.toTimeString());
        formData.append('finish_time', finishTime.toTimeString());
        formData.append('image', {
          uri:
            Platform.OS === 'android'
              ? image?.uri
              : image.uri.replace('file://', ''),
          name: image.fileName,
          type: 'image/*',
        });
        console.log(formData)
        addNewClass(formData)
          .then(res => {
            if (res.status === 200) {
                notification.localNotif(
                  'New Class Has Been Created',
                  `Hi ${props.authReducers.user.username} \nThank You For Creating Class`,
                );
              }
            const msg = res.data.message;
            setClassName('')
            setDescription('')
            setClassPrice('')
            setImage(null);
          })
          .catch(err => {
            console.log(err)
            setImage(null);
          });
      };
    useEffect(() => {
        axios
          .get(
            "http://192.168.1.100:8000/courses/api/scoremyclass/",
            {
              headers: {'x-access-token': `Bearer ${token}`},
            },
          )
          .then(res => setMyClass(res.data.data))
          .catch(err => console.log(err));
      }, []);
      useEffect(() => {
        axios
          .get(
            "http://192.168.1.100:8000/courses/api/myClassFasilitator/?page=1&limit=3",
            {
              headers: {'x-access-token': `Bearer ${token}`},
            },
          )
          .then(res => setFasilitatorClass(res.data.result))
          .catch(err => console.log(err));
      }, []);
      const registerHandler = (courses) => {
        const id_user = props.authReducers.user.id_user;
        axios
          .post(
            "http://192.168.1.100:8000/courses/api/registerClass",
            {studentId : id_user, courseId: courses.id_courses},
          )
          .then(res => {
            if (res.status === 200) {
                notification.localNotif(
                  'Register Class Succesfully',
                  `Registered to Class ${courses.class_name} \nYour class is started on \n${courses.start_time} until ${courses.finish_time}`,
                );
              }
          })
          .catch(err => console.log(err));
      };
    goToTop = () => {
        this.scroll.scrollTo({x: 0, y: 0, animated: true});
     }
    getData = async () => {
        const apiURL = "http://192.168.1.100:8000/courses/api/all?search&limit=5&sort=&page=" + pageCurrent
        setTimeout( () => {
            fetch(apiURL).then((res) => res.json ())
            .then((resJson) => {
                setData(data.concat(resJson.result))
                setIsLoading(false)
            }) 
        }, 4000)
    }
    useEffect(() => {
        setIsLoading(true)
        this.getData()
        return () => {

        }
    }, [pageCurrent])
    
    renderItem = ({item, index}) => {
        return (
            <ListItem containerStyle={{borderRadius: 20, marginTop: 5, flexDirection:'column'}} bottomDivider>
                        <ListItem.Content style={{padding: 5, display:'flex', flexDirection: 'row'}}>
                        <Text onPress={()=> navigation.navigate('ClassDetail')} style={{fontFamily: 'Montserrat-Medium', fontSize: 16, flex:1, marginRight: 15}}>{item.class_name}</Text>
                        <Text style={{fontFamily: 'Montserrat-Medium', fontSize: 16, flex:1, marginRight: 25}}>{item.level_name}</Text>
                        <Text style={{fontFamily: 'Montserrat-Medium', fontSize: 16}}>${item.class_price}</Text>
                        </ListItem.Content>
                        <Button 
                        key={item.id_courses}
                        title="Register"
                        buttonStyle={{ backgroundColor: '#57BA61', borderRadius: 15, marginTop: 20}}
                        onPress={ () => { registerHandler(item) }}
                        />
            </ListItem>
        )
    }

    renderFooter = () => {
        return (
            isLoading ?
            <View> 
                <ActivityIndicator size="large"  color="#999999" />
            </View> : null
        )
    }

    handleLoadMore = () => {
        setPageCurrent(pageCurrent + 1)
        setIsLoading(true)
    }

    return (
        <ScrollView >
            <ActivityHeader/>
            {role === 1 ? (
            <View style={{padding: 20}}>
            <Text style={{fontFamily: 'Montserrat-Bold', fontSize: 18}}>My Class</Text>
            <View style={{display: 'flex', flexDirection: 'row', marginTop : 15, justifyContent: 'space-between', marginBottom: 20, margin:10, marginRight: 30}}>
                <Text style={{fontFamily: 'Montserrat-SemiBold', fontSize: 16}}>Class Name</Text>
                <Text style={{fontFamily: 'Montserrat-SemiBold', fontSize: 16}}>Score</Text>
                <Text style={{fontFamily: 'Montserrat-SemiBold', fontSize: 16}}>Progress</Text>
            </View>
            <View>
            {myClass?.length === 0 && (
            <>
            <ListItem>
                <ListItem.Content style={styles.itemContent}>
                    <Text style={styles.textItem1}>You Have No class</Text>
                </ListItem.Content>
            </ListItem>
           </>
        )}
            {
                myClass.map((l, i) => (
                <ListItem containerStyle={{borderRadius: 20, marginTop: 5}} key={i} bottomDivider>
                    <ListItem.Content style={{padding: 10, display:'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{fontFamily: 'Montserrat-Medium', fontSize: 16, flex: 1}}>{l.class_name}</Text>
                    <Text style={{fontFamily: 'Montserrat-SemiBold', fontSize: 30, justifyContent:'center', marginLeft: '10%', color: '#51E72B', flex:1}}>{l.score}</Text>
                    <ProgressCircle
                        percent={Number(l.progress)}
                        radius={25}
                        borderWidth={4}
                        color="#3399FF"
                        shadowColor="#fff"
                        bgColor="#fff"
                        >
                        <Text style={{ fontSize: 18,  color: '#5784BA' }}>{l.progress}%</Text>
                    </ProgressCircle>
                    </ListItem.Content>
                    <Image style={{height: 30, width: 7, alignSelf: 'center'}} source={require('../../../assets/img/list.png')}/>
                </ListItem>
                ))
            }
            </View>
            <Text onPress={() => navigation.navigate('MyClass')} style={{alignSelf: 'center', fontFamily: 'Montserrat-SemiBold', fontSize: 12, margin: 10}}>View All <Icon name="chevron-right" size={18}/></Text>
            <View style={{backgroundColor: '#F9F9F9', padding: 20, borderRadius: 20}}>
                <Text style={{fontFamily: 'Montserrat-Bold', fontSize: 18}}>New Class</Text>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between'}}>
                <SearchBar
                    placeholder="Quick Search"
                    lightTheme
                    round
                    inputContainerStyle={{backgroundColor: '#F9F9F9',borderBottomWidth: 1, borderWidth: 1, marginBottom: 1}}
                    containerStyle={{backgroundColor: '#F9F9F9', borderTopWidth: 0, borderBottomWidth: 0, marginTop: 10, minWidth: '80%'}}
                />
                <Button
                title="Search"
                containerStyle={{marginTop: 20, borderRadius: 10}}
                />
                </View>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent:'space-around', backgroundColor: '#EEEEEE', padding: 10, borderRadius: 20,}}>
                    <Text>Categories <Icon name="chevron-down" size={20}/> </Text>
                    <Text>Level <Icon name="chevron-down" size={20}/></Text>
                    <Text>Pricing <Icon name="chevron-down" size={20}/></Text>
                </View>
            <View style={{display: 'flex', flexDirection: 'row', marginTop : 15, justifyContent: 'space-between', marginBottom: 20}}>
                <Text style={{fontFamily: 'Montserrat-SemiBold', maxWidth: 50, marginLeft: 25, marginRight: 10, fontSize: 16}}>Class Name</Text>
                <Text style={{fontFamily: 'Montserrat-SemiBold', marginRight: 30, fontSize: 16}}>Level</Text>
                <Text style={{fontFamily: 'Montserrat-SemiBold', fontSize: 16, marginRight: 15}}>Pricing</Text>
            </View>
            <FlatList
                style={styles.listNewClass}
                data={data}
                renderItem={this.renderItem}
                keyExtractor={(item, index) => index.toString()}
                ListFooterComponent={this.renderFooter}
                onEndReached={this.handleLoadMore}
                onEndReachedThreshold={0}
            />
            </View>
            <TouchableOpacity onPress={this.goToTop} style={styles.fab}>
                <Text style={styles.fabIcon}>↑</Text>
            </TouchableOpacity>
            </View>

            ) : (
                <View style={{padding: 20}}>
                <Text style={{fontFamily: 'Montserrat-Bold', fontSize: 18}}>My Class</Text>
                <View style={{display: 'flex', flexDirection: 'row', marginTop : 15, justifyContent: 'space-between', marginBottom: 20, margin:10, marginRight: 30}}>
                    <Text style={{fontFamily: 'Montserrat-SemiBold', fontSize: 16}}>Class Name</Text>
                    <Text style={{fontFamily: 'Montserrat-SemiBold', fontSize: 16, marginRight: 25}}>Student</Text>
                </View>
                <View>
                {fasilitatorClass?.length === 0 && (
                <>
                <ListItem>
                    <ListItem.Content style={styles.itemContent}>
                        <Text style={styles.textItem1}>You Have No class</Text>
                    </ListItem.Content>
                </ListItem>
               </>
            )}
                {
                    fasilitatorClass.map((l, i) => (
                    <ListItem containerStyle={{borderRadius: 20, marginTop: 5}} key={i} bottomDivider>
                        <ListItem.Content style={{padding: 10, display:'flex', flexDirection: 'row'}}>
                        <Text onPress={() => navigation.navigate('ClassDetail')} style={{fontFamily: 'Montserrat-Medium', fontSize: 16, flex: 1}}>{l.class_name}</Text>
                        <Text style={{fontFamily: 'Montserrat-SemiBold',textAlign: 'center', color: '#000000', fontSize: 16}}>{l.student_count} <Image source={require("../../../assets/img/student-icon.png")} /></Text>
                        </ListItem.Content>
                        <Icon name={'chevron-right'} size={32}/>
                    </ListItem>
                    ))
                }
                </View>
                <Text onPress={() => navigation.navigate('MyClass')} style={{alignSelf: 'center', fontFamily: 'Montserrat-SemiBold', fontSize: 12, margin: 10}}>View All <Icon name="chevron-right" size={18}/></Text>
                <View style={{backgroundColor: '#F9F9F9', padding: 20, borderRadius: 20}}>
                    <Text style={{fontFamily: 'Montserrat-Bold', fontSize: 18}}>Create New Class</Text>
                    <KeyboardAvoidingView >
                    <Text style={styles.textInput}>Class Name : </Text>
                    <Input value ={className} onChangeText={text => setClassName(text)} />
                    <View>
                    <Text style={styles.textInput}>Class Category : </Text>
                        <Picker
                        dropdownIconColor="#000000"
                        style={{color: '#000000'}}
                        selectedValue={categoryId}
                        onValueChange={(itemValue, itemIndex) =>
                            setCategoryId(itemValue)
                        }>
                        <Picker.Item color={"#F9F9F9"} label="Software" value="1" />
                        <Picker.Item color={"#F9F9F9"} label="History" value="2" />
                        <Picker.Item color={"#F9F9F9"} label="Psychology" value="3" />
                        <Picker.Item color={"#F9F9F9"} label="Finance" value="4" />
                        <Picker.Item color={"#F9F9F9"} label="Math" value="5" />
                        <Picker.Item color={"#F9F9F9"} label="Science" value="6" />
                        </Picker>
                    </View>
                    <View>
                        <Text style={styles.textInput}>Class Levels : </Text>
                        <Picker
                        dropdownIconColor="#000000"
                        style={{color: '#000000'}}
                        selectedValue={levelId}
                        onValueChange={(itemValue, itemIndex) =>
                            setLevelId(itemValue)
                        }>
                        <Picker.Item color={"#F9F9F9"} label="Beginner" value="1" />
                        <Picker.Item color={"#F9F9F9"} label="Intermediate" value="2" />
                        <Picker.Item color={"#F9F9F9"} label="Advance" value="3" />
                        </Picker>
                    </View>
                    <Text style={styles.textInput}>Price : </Text>
                    <Input 
                    keyboardType='numeric'
                    maxLength={5}
                    value ={classPrice} onChangeText={num => setClassPrice(num)} 
                    />
                    <Text style={styles.textInput}>Description : </Text>
                    <Input 
                    multiline={true}
                    numberOfLines={5}
                    containerStyle={{backgroundColor: '#EBEBEB', borderRadius: 25, padding: 20, marginTop: 20}}
                    value = {description} onChangeText={text => setDescription(text)} 
                    />
                    <Text style={styles.textInput}>Select Class Date : </Text>
                    <DatePicker
                    mode="date"
                    date={schedule}
                    onDateChange={setSchedule}
                    minimumDate={new Date("2021-05-27")}
                    maximumDate={new Date("2021-12-31")}
                    />
                    <Text style={styles.textInput}>Select Class Start Time : </Text>
                    <DatePicker
                    mode="time"
                    minuteInterval={15}
                    date={startTime}
                    onDateChange={setStartTime}
                    />
                    <Text style={styles.textInput}>Select Class Finish Time : </Text>
                    <DatePicker
                    mode="time"
                    minuteInterval={15}
                    date={finishTime}
                    onDateChange={setFinishTime}
                    />
                    <Text style={{textAlign: 'center', color: '#000000', fontFamily: 'Montserrat-SemiBold', fontSize: 15, marginTop: 20}}>Add Image </Text>
                    <View style={{display:'flex', flexDirection: 'row'}}>
                        
                        <Text style={styles.textInput}>Select From Gallery : </Text>
                        <Icon onPress={() => {
                            launchImageLibrary(
                            {
                                mediaType: 'photo',
                                includeBase64: false,
                                maxHeight: 200,
                                maxWidth: 200,
                            },
                            img => {
                                setImage(img);
                            },
                            );
                        }} name={'image'} size={40} color={'#0000ff'}
                        style={{marginLeft: "auto"}} />
                        
                    </View>
                    <Button title="Create New Course" onPress={submitClassHandler} containerStyle={{marginTop: 45, marginBottom: 30}} buttonStyle={{borderRadius: 20, backgroundColor: "#57BA61"}} />
                    {image && (
                            <Image
                            style={{width: '100%', height: 100}}
                            resizeMode="contain"
                            source={{uri: image.uri}}
                            />
                        )}
                    </KeyboardAvoidingView>
                </View>
                </View>
            )}
        </ScrollView>
     );
     }

     const mapStateToProps = state => {
        return {
          authReducers: state.authReducers,
        };
      };
      const ConnectedActivity = connect(mapStateToProps)(Activity);
  
      export default ConnectedActivity;