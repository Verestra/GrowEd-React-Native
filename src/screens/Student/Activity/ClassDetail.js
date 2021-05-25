import * as React from 'react';
import { ImageBackground,ScrollView,View, Text, Image } from 'react-native';
import styles from './Style';
import ProgressCircle from 'react-native-progress-circle'
import { ListItem, Button, Avatar } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';
import Unorderedlist from 'react-native-unordered-list';

function ActivityHeader() {
    const navigation = useNavigation()
    return (
        <View style={styles.headerContainer}>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between'}}>
            <Text style={styles.headerText}><Icon onPress={() => navigation.goBack()} name="chevron-left" size={35}/>Know More Javascript</Text>
            </View>
        </View>
    )
 }

function ClassDetail({ navigation}) {
    return (
        <ScrollView>
            <ActivityHeader/>
            <View>
                <ImageBackground  style={{width:"100%", height: 221}} source={require('../../../assets/img/bg-class-transparent.png')}>
                <View style={{display: 'flex', flexDirection:'row'}}>
                    <Image style={{marginLeft: 5, marginTop: '42%'}} source={require('../../../assets/img/software-icon.png')} />
                    <View style={{display: 'flex', flexDirection: 'column', marginTop: '42%', marginLeft: 20}}>
                        <Text style={styles.h2Text}>Know More Javascript</Text>
                        <Text style={styles.h3Text}>Level : Beginner</Text>
                        <Text style={styles.h3Text}>Category : Software</Text>
                        <Text style={styles.h3Text}>Price : Free</Text>
                        <Button
                        title="Register"
                        containerStyle={{borderRadius: 20, width: '50%',alignSelf:'flex-end'}}
                        buttonStyle={{ backgroundColor: '#57BA61'}}
                        />
                    </View>
                </View>
                </ImageBackground>
            </View>
            <View style={styles.containerDetail}>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.activeText}>Information</Text>
                    <Text onPress={()=> navigation.navigate('ClassProgress')} style={styles.h3Text}>Class Progress</Text>
                    <Text style={styles.h3Text}>Class Discussion</Text>
                </View>
                <View
                    style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                    }}
                />
                <View>
                    <Text style={styles.descHeader}>Description</Text>
                    <Text style={styles.descText}>Javascript from the basic for beginner. 
                        JavaScript is a programming language that adds 
                        interactivity to your website. This happens in games,
                         in the behavior of responses when buttons are pressed 
                         or with data entry on forms; with dynamic styling; with
                          animation, etc. This class helps you get started with 
                          JavaScript and furthers your understanding of what is 
                          possible.</Text>
                </View>
                <View>
                    <Text style={styles.descHeader}>What will i learn?</Text>
                    <Unorderedlist style={{fontSize: 30}}>
                        <Text style={styles.descText}>Become an advanced, confident, and modern JavaScript developer from scratch</Text>
                    </Unorderedlist>
                    <Unorderedlist style={{fontSize: 30}}>
                        <Text style={styles.descText}>Modern OOP: Classes, constructors, prototypal inheritance, encapsulation, etc.</Text>
                    </Unorderedlist>
                    <Unorderedlist style={{fontSize: 30}}>
                        <Text style={styles.descText}>JavaScript fundamentals: variables, if/else, operators, boolean logic, functions, arrays, objects, loops, strings, etc</Text>
                    </Unorderedlist>
                </View>
            </View>
        </ScrollView>
     );
     }

export default ClassDetail