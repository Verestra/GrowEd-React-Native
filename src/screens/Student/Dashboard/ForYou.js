import * as React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import styles from './Style';
import { SearchBar } from 'react-native-elements';
import {FlatListSlider} from 'react-native-flatlist-slider';
import ProgressCircle from 'react-native-progress-circle'

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
function ForYou({ navigation}) {
    const images = [
        {
         image:'https://i.ibb.co/2cVY8Qy/microsoft-banner.png',
         desc: 'Silent Waters in the mountains in midst of Himilayas',
        },
       {
         image:'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
         desc:
           'Red fort in India New Delhi is a magnificient masterpeiece of humans',
       },
       ]
    return (
        <ScrollView style={{backgroundColor: '#E6EDF6'}}>
            <DashboardHeader />
            <View style={{padding: 10}}>
            <FlatListSlider
                data={images}
                width={350}
                height={200}
                onPress={item => alert(JSON.stringify(item))}
                contentContainerStyle={{paddingHorizontal: 16,}}
                indicatorContainerStyle={{position:'absolute', bottom: 20}}
                indicatorActiveColor={'#5784BA'}
                indicatorActiveWidth={15}
                indicatorInActiveColor={'#ADA9BB'}
            />
            </View>
            <View style={styles.dashboardContainer}>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between'}}>
                    <Text style={styles.headerText2}>My Class</Text>
                    <Image source={require('../../../assets/img/calendar-icon.png')}/>
                </View>
            <Text style={{fontFamily: 'Roboto-Regular', color: '#4D505B'}}>Today, October 10</Text>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent:'center', margin: 15}}>
                    <Text style={{fontFamily: 'Roboto-Medium', color: '#ADA9BB', marginRight: 20}}>All Schedule</Text>
                    <Text style={{fontFamily: 'Roboto-Medium', color: '#5785BA',}}>For You</Text>
                </View>
            <View>
                <View style={styles.itemContainer}>
                    <View style={styles.itemContent}>
                        <Text style={styles.textItem}>08.00 - 09.40</Text>
                        <Text style={styles.textItem}>Introduction to Banking Finance</Text>
                        <ProgressCircle
                            percent={30}
                            radius={25}
                            borderWidth={4}
                            color="#3399FF"
                            shadowColor="#fff"
                            bgColor="#fff"
                        >
                            <Text style={{ fontSize: 18, color: '#5784BA'}}>{'30%'}</Text>
                        </ProgressCircle>
                    </View>
                    <View style={styles.itemContent}>
                        <Text style={styles.textItem}>08.00 - 09.40</Text>
                        <Text style={styles.textItem}>Introduction to Banking Finance</Text>
                        <ProgressCircle
                            percent={30}
                            radius={25}
                            borderWidth={4}
                            color="#3399FF"
                            shadowColor="#fff"
                            bgColor="#fff"
                        >
                            <Text style={{ fontSize: 18,  color: '#5784BA' }}>{'30%'}</Text>
                        </ProgressCircle>
                    </View>
                    <View style={styles.itemContent}>
                        <Text style={styles.textItem}>08.00 - 09.40</Text>
                        <Text style={styles.textItem}>Introduction to Banking Finance</Text>
                        <ProgressCircle
                            percent={30}
                            radius={25}
                            borderWidth={4}
                            color="#3399FF"
                            shadowColor="#fff"
                            bgColor="#fff"
                        >
                            <Text style={{ fontSize: 18,  color: '#5784BA' }}>{'30%'}</Text>
                        </ProgressCircle>
                    </View>
                </View>
            </View>
            </View>
        </ScrollView>
     );
     }

export default ForYou