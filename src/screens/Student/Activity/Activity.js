import * as React from 'react';
import {useState, useEffect, useRef} from 'react';
import {TouchableOpacity, FlatList, ActivityIndicator,ScrollView,View, Text, Image, LogBox } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from './Style';
import ProgressCircle from 'react-native-progress-circle'
import { ListItem, Button, Avatar } from 'react-native-elements'
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {connect} from 'react-redux';
import axios from 'axios';
import { FAB } from 'react-native-elements';
import Notifservice from '../../../../NotifService'

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

function Activity(props, { navigation}) {
    const [myClass, setMyClass] = useState([]);
    const [selectedLanguage, setSelectedLanguage] = useState();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [pageCurrent, setPageCurrent] = useState(1);
    const notification = new Notifservice();

    useEffect(() => {
        const token = props.authReducers.user.token;
        axios
          .get(
            "http://192.168.1.127:8000/courses/api/scoremyclass/",
            {
              headers: {'x-access-token': `Bearer ${token}`},
            },
          )
          .then(res => setMyClass(res.data.data))
          .catch(err => console.log(err));
      }, []);
      const registerHandler = (courses) => {
        const id_user = props.authReducers.user.id_user;
        axios
          .post(
            "http://192.168.1.127:8000/courses/api/registerClass",
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
        const apiURL = "http://192.168.1.127:8000/courses/api/all?search&limit=5&sort=&page=" + pageCurrent
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
        <ScrollView ref={(c) => {this.scroll = c}}>
            <ActivityHeader/>
            <View style={styles.container}>
            <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
            }>
            <Picker.Item label="Java" value="java" />
            <Picker.Item label="JavaScript" value="js" />
            </Picker>
            </View>
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