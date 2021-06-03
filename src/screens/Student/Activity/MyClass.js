import * as React from 'react';
import {useState, useEffect} from 'react'
import { ScrollView,View, Text, Image } from 'react-native';
import styles from './Style';
import ProgressCircle from 'react-native-progress-circle'
import { ListItem, Button, Avatar } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';
import {connect} from 'react-redux';
import axios from 'axios'

function ActivityHeader() {
    const navigation = useNavigation()
    return (
        <View style={styles.headerContainer}>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between'}}>
            <Text style={styles.headerName}><Icon onPress={() => navigation.goBack()} name="chevron-left" size={35}/>My Class</Text>
            </View>
        </View>
    )
 }

function MyClass(props) {
  const navigation = useNavigation()
  let [studentClass, setStudentClass] = useState([]);
    let [fasilitatorClass, setFasilitatorClass] = useState([]);

    const role = props.authReducers.user.role_id
      
    useEffect(() => {
        const token = props.authReducers.user.token;
        axios
          .get(
            "http://192.168.1.100:8000/courses/api/studentscore/",
            {
              headers: {'x-access-token': `Bearer ${token}`},
            },
          )
          .then(res => setStudentClass(res.data.data))
          .catch(err => console.log(err));
      }, []);
      console.log(studentClass)
      useEffect(() => {
        const token = props.authReducers.user.token;
        axios
          .get(
            "http://192.168.1.100:8000/courses/api/myClassFasilitator/?page=1&limit=20",
            {
              headers: {'x-access-token': `Bearer ${token}`},
            },
          )
          .then(res => setFasilitatorClass(res.data.result))
          .catch(err => console.log(err));
      }, []);
      console.log(fasilitatorClass)
    return (
        <ScrollView>
            <ActivityHeader/>
            {role === 1 ? (
              <View style={{padding: 20}}>
              <View style={{display: 'flex', flexDirection: 'row', marginTop : 15, justifyContent: 'space-between', marginBottom: 20, margin: 10, marginRight: 30}}>
                  <Text style={{fontFamily: 'Montserrat-SemiBold', fontSize: 16}}>Class Name</Text>
                  <Text style={{fontFamily: 'Montserrat-SemiBold', fontSize: 16}}>Score</Text>
                  <Text style={{fontFamily: 'Montserrat-SemiBold', fontSize: 16}}>Progress</Text>
              </View>
              <View>
              {studentClass?.length === 0 && (
              <>
              <ListItem>
                  <ListItem.Content style={styles.itemContent}>
                      <Text style={styles.textItem1}>You Got No Class</Text>
                  </ListItem.Content>
              </ListItem>
             </>
          )}
              {
                  studentClass.map((l, i) => (
                  <ListItem containerStyle={{borderRadius: 20, marginTop: 5}} key={i} bottomDivider>
                      <ListItem.Content style={{padding: 10, display:'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                      <Text style={{fontFamily: 'Montserrat-Medium', fontSize: 16, flex: 1}}>{l.class_name}</Text>
                      <Text style={{fontFamily: 'Montserrat-SemiBold', fontSize: 30, alignSelf:'center', color: '#51E72B', flex: 1, marginLeft: '10%'}}>{l.score}</Text>
                      <ProgressCircle
                          percent={Number(l.progress)}
                          radius={27}
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
          </View>

            ) : (
              <View style={{padding: 20}}>
                <View style={{display: 'flex', flexDirection: 'row', marginTop : 15, justifyContent: 'space-between', marginBottom: 20, margin: 10, marginRight: 30}}>
                    <Text style={{fontFamily: 'Montserrat-SemiBold', fontSize: 16}}>Class Name</Text>
                    <Text style={{fontFamily: 'Montserrat-SemiBold', fontSize: 16}}>Student Count</Text>
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
                      <ListItem containerStyle={{borderRadius: 20, marginTop: 5}} key={i} bottomDivider>
                      <ListItem.Content style={{padding: 10, display:'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                      <Text onPress={() => navigation.navigate('ClassDetail')} style={styles.textItem1}>{l.class_name}</Text>
                        <Text style={{fontFamily: 'Montserrat-SemiBold',textAlign: 'center', color: '#000000', fontSize: 16}}>{l.student_count} <Image source={require("../../../assets/img/student-icon.png")} /></Text>
                      </ListItem.Content>
                      </ListItem>
                    )) }
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
    const ConnectedMyClass = connect(mapStateToProps)(MyClass);

    export default ConnectedMyClass;