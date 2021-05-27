import * as React from 'react';
import {useState} from 'react';
import { ImageBackground,ScrollView,View, Text, Image } from 'react-native';
import styles from './Style';
import ProgressCircle from 'react-native-progress-circle'
import { ListItem, Button, Avatar } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';
import Unorderedlist from 'react-native-unordered-list';
import {connect} from 'react-redux';
import Modal from 'react-native-modal';


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

function Member(props) {
    const navigation = useNavigation()
    const [isModalVisible, setModalVisible] = useState(false);
    const role = props.authReducers.user.role_id
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
      };
    const list = [
        {
          name: 'Nissa Sabyan',
          avatar_url: 'https://i.ibb.co/kgfYPg0/ava-nisa.png',
          
        },
        {
          name: 'Rio Dewanto',
          avatar_url: 'https://i.ibb.co/nfXkGtQ/ava-rio.png',

        },
        {
            name: 'Discussion Group 21 (5)',
            avatar_url: 'https://i.ibb.co/gM0WWx9/ava-group21.png',
            
          },
          {
            name: 'Isyana Sarasvati',
            avatar_url: 'https://i.ibb.co/Bn7BKVX/ava-isyana.png',
           
          },
          {
            name: 'Tompi',
            avatar_url: 'https://i.ibb.co/PxPr87w/ava-tompi.png',
            
          },
          {
            name: 'You, Tompi, ',
            avatar_url: 'https://i.ibb.co/gPcLqXH/ava-group.png',
            
          },
          {
            name: 'Peppy',
            avatar_url: 'https://i.ibb.co/HB2VF5J/ava-pepi.png',
            
          },  
      ]
    return (
        <ScrollView>
            <ActivityHeader/>
            <View>
                <View>
                    <ImageBackground  style={{width:"100%", height: 221}} source={require('../../../assets/img/bg-class-transparent.png')}>
                    <View style={{display: 'flex', flexDirection:'row'}}>
                        <Image style={{marginLeft: 5, marginTop: '42%'}} source={require('../../../assets/img/software-icon.png')} />
                        <View style={{display: 'flex', flexDirection: 'column', marginTop: '42%', marginLeft: 20}}>
                            <Text style={styles.h2Text}>Know More Javascript</Text>
                            <Text style={styles.h3Text}>Level : Beginner</Text>
                            <Text style={styles.h3Text}>Category : Software</Text>
                            <Text style={styles.h3Text}>Price : Free</Text>
                        </View>
                    </View>
                    </ImageBackground>
                </View>
                <View style={styles.containerDetail}>
                    <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text onPress={()=> navigation.navigate('ClassDetail')} style={styles.h3Text}>Information</Text>
                        <Text onPress={()=> navigation.navigate('ClassProgress')} style={styles.h3Text} >Class Progress</Text>
                        <Text style={styles.activeText}>Member</Text>
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
                    <ListItem containerStyle={{backgroundColor: '#F9F9F9'}} key={i} bottomDivider>
                        <Avatar size="large" rounded source={{uri: l.avatar_url}} />
                        <ListItem.Content style={{padding: 10}}>
                        <ListItem.Title onPress={toggleModal} style={styles.senderName}>{l.name}</ListItem.Title>
                        </ListItem.Content>
                        <Icon  name={'dots-vertical'} size={30} color={'#000000'}/>
                    </ListItem>
                    ))
                }
                 <Modal isVisible={isModalVisible}  onBackdropPress={() => setModalVisible(false)}>
                        <View style={{flex: 1,justifyContent: "center"}}>
                            <View style={{borderTopEndRadius: 20,borderTopStartRadius: 20, backgroundColor: "#f9f9f9", display:'flex', padding: 30, flexDirection: 'row'}}>
                                <Avatar size="large" rounded source={require("../../../assets/img/avatar/ava-rio.png")} />
                                <Text style={{fontFamily: 'Kanit-Regular', fontSize: 18, margin: 25}}>Deddy Corbuzier</Text>
                            </View>
                            <View style={{backgroundColor: "#f9f9f9", display: 'flex', flexDirection:'row', justifyContent: 'space-between'}}>
                                <Text style={{fontFamily: 'Kanit-Medium', color: '#000000', fontSize: 18, margin: 25}}>Topic</Text>
                                <Text style={{fontFamily: 'Kanit-Medium', fontSize: 18, margin: 25}}>Score</Text>
                            </View>
                            <View style={{backgroundColor: "#f9f9f9",}}>
                            <View
                                style={{
                                borderBottomColor: 'black',
                                borderBottomWidth: 1,
                                marginLeft: 25,
                                marginRight: 25
                                }}
                            />
                            </View>
                            <View style={{backgroundColor: "#f9f9f9", display: 'flex', flexDirection:'row', justifyContent: 'space-between'}}>
                                <Text style={{fontFamily: 'Kanit-Regular', color: '#000000', fontSize: 16, margin: 25}}>HTML Essential Training</Text>
                                <Text style={{fontFamily: 'Kanit-Regular', color: '#51E72B', fontSize: 24, margin: 25}}>92</Text>
                            </View>
                            <View style={{backgroundColor: "#f9f9f9", display: 'flex', flexDirection:'row', justifyContent: 'space-between'}}>
                                <Text style={{fontFamily: 'Kanit-Regular', color: '#000000', fontSize: 16, margin: 25}}>CSS Essential Training</Text>
                                <Text style={{fontFamily: 'Kanit-Regular', color: '#51E72B', fontSize: 24, margin: 25}}>81</Text>
                            </View>
                            <View style={{backgroundColor: "#f9f9f9", display: 'flex', flexDirection:'row', justifyContent: 'space-between'}}>
                                <Text style={{fontFamily: 'Kanit-Regular', color: '#000000', fontSize: 16, margin: 25}}>Javascript Essential Training</Text>
                                <Text style={{fontFamily: 'Kanit-Regular', color: '#51E72B', fontSize: 24, margin: 25}}>76</Text>
                            </View>
                            <View style={{backgroundColor: "#f9f9f9", display: 'flex', flexDirection:'row', justifyContent: 'space-between'}}>
                                <Text style={{fontFamily: 'Kanit-Regular', color: '#000000', fontSize: 16, margin: 25}}>Responsive Layout</Text>
                                <Text style={{fontFamily: 'Kanit-Regular', color: '#51E72B', fontSize: 24, margin: 25}}>86</Text>
                            </View>
                        </View>
                    </Modal>
                </View>
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
      const ConnectedMember = connect(mapStateToProps)(Member);
  
      export default ConnectedMember;