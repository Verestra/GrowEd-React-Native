import * as React from 'react';
import { ScrollView,View, Text, Image } from 'react-native';
import styles from './Style';
import ProgressCircle from 'react-native-progress-circle'
import { ListItem, Button, Avatar } from 'react-native-elements'
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

function ActivityHeader({ navigation}) {
    return (
        <View style={styles.headerContainer}>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between'}}>
            <Text style={styles.headerName}>Activity</Text>
            </View>
        </View>
    )
 }

function Activity({ navigation}) {
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
     
        ]

        const newClass = [
            {
              className: 'Know more Javascript',
              level: 'Beginner',
              pricing: 'Free'
            },
            {
              className: 'HTML and CSS to code',
              level: 'Intermediate',
              pricing: '$10'
            },
            {
              className: 'Indonesian war history',
              level: 'Advance',
              pricing: '$50'
            },
            {
                className: 'Buddhism and Modern Psychology',
                level: 'Beginner',
                pricing: 'Free'
              },
         
            ]

    return (
        <ScrollView>
            <ActivityHeader/>
            <View style={{padding: 20}}>
                <Text style={{fontFamily: 'Montserrat-Bold', fontSize: 18}}>My Class</Text>
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
                <View style={{display: 'flex', flexDirection: 'row', marginTop : 15, justifyContent: 'flex-start', marginBottom: 20}}>
                    <Text style={{fontFamily: 'Montserrat-SemiBold', maxWidth: 50, marginLeft: 25, marginRight: 10, fontSize: 16}}>Class Name</Text>
                    <Text style={{fontFamily: 'Montserrat-SemiBold', marginRight: 30, fontSize: 16}}>Level</Text>
                    <Text style={{fontFamily: 'Montserrat-SemiBold', fontSize: 16}}>Pricing</Text>
                </View>
                <View>
                {
                    newClass.map((l, i) => (
                    <ListItem containerStyle={{borderRadius: 20, marginTop: 5}} key={i} bottomDivider>
                        <ListItem.Content style={{padding: 10, display:'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text onPress={()=> navigation.navigate('ClassDetail')} style={{fontFamily: 'Montserrat-Medium', fontSize: 16, maxWidth: '33%'}}>{l.className}</Text>
                        <Text style={{fontFamily: 'Montserrat-Medium', fontSize: 16, maxWidth: '33%'}}>{l.level}</Text>
                        <Text style={{fontFamily: 'Montserrat-Medium', fontSize: 16}}>{l.pricing}</Text>
                        </ListItem.Content>
                        <Button
                        title="Register"
                        containerStyle={{borderRadius: 20,}}
                        buttonStyle={{ backgroundColor: '#57BA61'}}
                        />
                    </ListItem>
                    ))
                }
                </View>
                </View>
            </View>
        </ScrollView>
     );
     }

export default Activity