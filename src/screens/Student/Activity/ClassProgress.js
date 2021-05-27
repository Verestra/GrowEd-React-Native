import * as React from 'react';
import {useState} from 'react'
import { ImageBackground,ScrollView,View, Text, Image } from 'react-native';
import styles from './Style';
import ProgressCircle from 'react-native-progress-circle'
import { ListItem, Button, Avatar, LinearProgress, CheckBox } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';
import Unorderedlist from 'react-native-unordered-list';
import {connect} from 'react-redux';

function ActivityHeader() {
    const navigation = useNavigation()
    return (
        <View style={styles.headerContainer}>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between'}}>
            <Text style={styles.headerText}><Icon onPress={() => navigation.goBack()} name="chevron-left" size={35}/>Front-end Fundamentals</Text>
            </View>
        </View>
    )
 }

function ClassProgress({ navigation}) {
    const [checked, setChecked] = useState(false);
    const list = [
        {
          className: 'HTML Essential Training',
          score: '100'
        },
        {
          className: 'CSS Essential Training',
          score: '42'
        },
        {
          className: 'Javascript Essential Training',
          score: '21'
        },
        {
          className: 'Responsive Layout',
          score: '21'
        },
     
        {
          className: 'Mid-term Exam',
          score: '21'
        },
     
        {
          className: 'Bootstrap4 Essential Training',
          score: '21'
        },
       
     
        ]
    return (
        <ScrollView>
            <ActivityHeader/>
            <View>
                <ImageBackground  style={{width:"100%", height: 221}} source={require('../../../assets/img/bg-class-transparent.png')}>
                <View style={{display: 'flex', flexDirection:'row'}}>
                    <Image style={{marginLeft: 20, marginTop: '42%'}} source={require('../../../assets/img/software-icon.png')} />
                    <View style={{display: 'flex', flexDirection: 'column', marginTop: '42%', marginLeft: 20}}>
                        <Text style={styles.h2Text}>Front-end Fundamentals</Text>
                        <Text style={styles.h3Text}>Level : Beginner</Text>
                        <Text style={styles.h3Text}>Category : Software</Text>
                        <Text style={styles.h3Text}>Price : Free</Text>
                        <LinearProgress color="primary" />
                    </View>
                </View>
                </ImageBackground>
            </View>
            <View style={styles.containerDetail}>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text onPress={()=> navigation.navigate('ClassDetail')} style={styles.h3Text}>Information</Text>
                    <Text style={styles.activeText}>Class Progress</Text>
                    <Text style={styles.h3Text}>Class Discussion</Text>
                </View>
                <View
                    style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                    }}
                />
                <View>
                {
                    list.map((l, i) => (
                    <ListItem containerStyle={{borderRadius: 20, marginTop: 20}} key={i} bottomDivider>
                        <ListItem.Content style={{padding: 5, display:'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <CheckBox 
                        checked={checked}
                        onPress={() => setChecked(!checked)}
                        />
                        <Text style={{fontFamily: 'Montserrat-Bold', fontSize: 16, flex:1}}>{l.className}</Text>
                        <Text style={{fontFamily: 'Montserrat-SemiBold', fontSize: 30, alignSelf:'center', color: '#51E72B'}}>{l.score}</Text>
                        </ListItem.Content>
                    </ListItem>
                    ))
                }
                </View>
            </View>
        </ScrollView>
     );
     }

     const mapStateToProps = state => {
        return {
          authReducers: state.authReducers,
        };
      };
      const ConnectedClassProgress = connect(mapStateToProps)(ClassProgress);
  
      export default ConnectedClassProgress;