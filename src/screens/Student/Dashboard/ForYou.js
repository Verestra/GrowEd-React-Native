import * as React from 'react';
import {useState, useEffect, useCallback, useRef} from 'react';
import { ImageBackground,ScrollView, View, Text, Image } from 'react-native';
import styles from './Style';
import { SearchBar } from 'react-native-elements';
import {FlatListSlider} from 'react-native-flatlist-slider';
import ProgressCircle from 'react-native-progress-circle'
import { Button,ListItem, Avatar } from 'react-native-elements'
import {connect} from 'react-redux';
import axios from 'axios'
import Swiper from 'react-native-swiper'


function DashboardHeader({ navigation}) {
    return (
        <View style={styles.headerContainer}>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between'}}>
            <Text style={styles.headerText}>Welcome back,</Text>
            <Image source={require('../../../assets/img/notif-icon.png')}/>
            </View>
            <Text style={styles.headerName}>Emir</Text>
            <SearchBar
                placeholder="Looking for Something?"
                lightTheme
                round
                inputContainerStyle={{backgroundColor: '#E5E6EB'}}
                containerStyle={{backgroundColor: '#5784BA', borderTopWidth: 0, borderBottomWidth: 0, marginTop: 10}}
            />
        </View>
    )
 }
function ForYou(props, { navigation}) {
    let [studentClass, setStudentClass] = useState([]);
    let [fasilitatorClass, setFasilitatorClass] = useState([]);

    const role = props.authReducers.user.role_id
      
    useEffect(() => {
        const token = props.authReducers.user.token;
        axios
          .get(
            "http://192.168.1.127:8000/courses/api/studentscore/",
            {
              headers: {'x-access-token': `Bearer ${token}`},
            },
          )
          .then(res => setStudentClass(res.data.data))
          .catch(err => console.log(err));
      }, []);
      useEffect(() => {
        const token = props.authReducers.user.token;
        axios
          .get(
            "http://192.168.1.127:8000/courses/api/myClassFasilitator/?page=1&limit=10",
            {
              headers: {'x-access-token': `Bearer ${token}`},
            },
          )
          .then(res => setFasilitatorClass(res.data.result))
          .catch(err => console.log(err));
      }, []);
      console.log(fasilitatorClass)

       const microsoftImage = { uri: "https://images.unsplash.com/photo-1583146191066-dd148554b72b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80" };
       const vaccineImage = { uri : "https://images.unsplash.com/photo-1579165466991-467135ad3110?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"}
        return (
            <ScrollView style={{backgroundColor: '#E6EDF6'}}>
            <DashboardHeader />
            <Swiper height={350} containerStyle={{padding: 5}} autoplay={true} style={styles.wrapper}>     
                <ImageBackground source={microsoftImage} style={{flex: 1, resizeMode: "cover", justifyContent: "center", padding: 50}} imageStyle={{borderRadius:20, margin: 20}}>
                    <Text style={styles.text}>Microsoft try to implement work from home forever</Text>
                </ImageBackground>
                <ImageBackground source={vaccineImage} style={{flex: 1, resizeMode: "cover", justifyContent: "center", padding: 50}} imageStyle={{borderRadius:20, margin: 20}}>
                    <Text style={styles.text}>New vaccine found for COVID-19</Text>
                </ImageBackground>
            </Swiper>
            {role === 1 ? (
                <View style={styles.dashboardContainer}>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between'}}>
                    <Text style={styles.headerText2}>My Class</Text>
                    <Image source={require('../../../assets/img/calendar-icon.png')}/>
                </View>
            <Text style={{fontFamily: 'Roboto-Regular', color: '#4D505B'}}>Today, October 10</Text>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent:'center', margin: 15}}>
                    <Text  onPress={() => navigation.navigate('Dashboard')} style={{fontFamily: 'Roboto-Medium', color: '#ADA9BB', marginRight: 20}}>All Schedule</Text>
                    <Text style={{fontFamily: 'Roboto-Medium', color: '#5785BA',}}>For You</Text>
                </View>
            <View>
            {studentClass?.length === 0 && (
                <>
                <ListItem>
                    <ListItem.Content style={styles.itemContent}>
                        <Text style={styles.textItem1}>No Schedule For You</Text>
                    </ListItem.Content>
                </ListItem>
               </>
            )}
            {
                     studentClass.map((l, i) => ( 
                        <ListItem key={i} bottomDivider>
                        <ListItem.Content style={styles.itemContent}>
                        <Text style={styles.textItem}>{l.start_time.substr(0, 5)} - {l.finish_time.substr(0, 5)}</Text>
                        <Text style={styles.textItem1}>{l.class_name}</Text>
                        <ProgressCircle
                            percent={Number(l.progress)}
                            radius={27}
                            borderWidth={4}
                            color="#3399FF"
                            shadowColor="#fff"
                            bgColor="#fff"
                        >
                            <Text style={{ fontSize: 18, color: '#5784BA'}}>{Number(l.progress)}%</Text>
                        </ProgressCircle>
                        </ListItem.Content>
                    </ListItem>
                    )) }
            </View>
            </View>

                ) : (
                    <View style={styles.dashboardContainer}>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between'}}>
                    <Text style={styles.headerText2}>My Class</Text>
                    <Image source={require('../../../assets/img/calendar-icon.png')}/>
                </View>
            <Text style={{fontFamily: 'Roboto-Bold', color: '#4D505B', textAlign: 'center', fontSize: 20}}>May 2021</Text>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent:'space-around', marginTop: 20, marginBottom :  20}}>
                        <View style={styles.dateStyle}>
                            <Text style={styles.textDate}>Mo</Text>
                            <Text style={styles.textDate}>24</Text>
                        </View>
                        <View style={styles.dateStyle}>
                            <Text style={styles.textDate}>Tu</Text>
                            <Text style={styles.textDate}>25</Text>
                        </View>
                        <View style={styles.dateStyle}>
                            <Text style={styles.textDate}>We</Text>
                            <Text style={styles.textDate}>26</Text>
                        </View>
                        <View style={styles.activeDate}>
                            <Text style={styles.textDateWhite}>Th</Text>
                            <Text style={styles.textDateWhite}>27</Text>
                        </View>
                        <View style={styles.dateStyle}>
                            <Text style={styles.textDate}>Fr</Text>
                            <Text style={styles.textDate}>28</Text>
                        </View>
                        <View style={styles.dateStyle}>
                            <Text style={styles.textDate}>Sa</Text>
                            <Text style={styles.textDate}>29</Text>
                        </View>
                        <View style={styles.dateStyle}>
                            <Text style={styles.textDate}>Su</Text>
                            <Text style={styles.textDate}>30</Text>
                        </View>
                </View>
            <View>
            {fasilitatorClass?.length === 0 && (
                <>
                <ListItem>
                    <ListItem.Content style={styles.itemContent}>
                        <Text style={styles.textItem1}>You Don't Have Class</Text>
                    </ListItem.Content>
                </ListItem>
               </>
            )}
            {
                     fasilitatorClass.map((l, i) => ( 
                        <ListItem key={i} bottomDivider>
                        <ListItem.Content style={styles.itemContent}>
                        <Text style={styles.textItem}>{l.start_time.substr(0, 5)} - {l.finish_time.substr(0, 5)}</Text>
                        <Text style={styles.textItem1}>{l.class_name}</Text>
                        <Text style={{fontFamily: 'Montserrat-SemiBold',textAlign: 'center', color: '#000000', fontSize: 16}}>{l.student_count} <Image source={require("../../../assets/img/student-icon.png")} /></Text>
                        </ListItem.Content>
                    </ListItem>
                    )) }
            <Button
                icon={
                    <Image style={{marginRight: 5}} source={require("../../../assets/img/plus-icon.png")}/>
                }
                title="New Task"
                containerStyle={{width: 150, alignSelf:'center', marginTop: 20, marginBottom: 20}}
                buttonStyle={{borderRadius: 20, fontFamily: 'Kanit-Regular'}}
                />
            </View>
            </View>
                )}
        </ScrollView>
          )};
    

     const mapStateToProps = state => {
        return {
          authReducers: state.authReducers,
        };
      };
      const ConnectedDashboard = connect(mapStateToProps)(ForYou);
  
      export default ConnectedDashboard;