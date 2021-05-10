import * as React from 'react';
import { ScrollView,View, Text, Image } from 'react-native';
import styles from './Style';
import ProgressCircle from 'react-native-progress-circle'
import { ListItem, Button, Avatar } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';

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

function MyClass({ navigation}) {
    const list = [
        {
          className: 'Front End Fundamentals',
          progress: 30,
          score: '86'
        },
        {
          className: 'HTML for Beginners',
          progress: 25,
          score: '71'
        },
        {
          className: 'History of Europe',
          progress: 69,
          score: '62'
        },
        {
          className: 'Trigonometry',
          progress: 89,
          score: '95'
        },
        {
            className: 'Algebra',
            progress: 100,
            score: '100'
          },
        {
          className: 'Molecular Biology',
          progress: 80,
          score: '42'
        },
        {
            className: 'Banking Finance',
            progress: 10,
            score: '21'
          },
        {
          className: 'Basic Excel',
          progress: 100,
          score: '98'
        },
        {
          className: 'Thermodynamics and Phase Equilibria',
          progress: 100,
          score: '86'
        },
        {
            className: 'Ancient Egypt and Its Civilization',
            progress: 100,
            score: '72'
          },
        ]

    return (
        <ScrollView>
            <ActivityHeader/>
            <View style={{padding: 20}}>
        
                <View style={{display: 'flex', flexDirection: 'row', marginTop : 15, justifyContent: 'space-evenly', marginBottom: 20}}>
                    <Text style={{fontFamily: 'Montserrat-SemiBold', fontSize: 16}}>Class Name</Text>
                    <Text style={{fontFamily: 'Montserrat-SemiBold', fontSize: 16}}>Progress</Text>
                    <Text style={{fontFamily: 'Montserrat-SemiBold', fontSize: 16}}>Score</Text>
                </View>
                <View>
                {
                    list.map((l, i) => (
                    <ListItem containerStyle={{borderRadius: 20, marginTop: 5}} key={i} bottomDivider>
                        <ListItem.Content style={{padding: 10, display:'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={{fontFamily: 'Montserrat-Medium', fontSize: 16, maxWidth: '33%'}}>{l.className}</Text>
                        <ProgressCircle
                            percent={l.progress}
                            radius={27}
                            borderWidth={4}
                            color="#3399FF"
                            shadowColor="#fff"
                            bgColor="#fff"
                            >
                            <Text style={{ fontSize: 18,  color: '#5784BA' }}>{l.progress}%</Text>
                        </ProgressCircle>
                        <Text style={{fontFamily: 'Montserrat-SemiBold', fontSize: 30, alignSelf:'center', color: '#51E72B'}}>{l.score}</Text>
                        </ListItem.Content>
                        <Image style={{height: 30, width: 7, alignSelf: 'center'}} source={require('../../../assets/img/list.png')}/>
                    </ListItem>
                    ))
                }
                </View>
            </View>
        </ScrollView>
     );
     }

export default MyClass