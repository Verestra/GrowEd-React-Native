import React, {useState, useRef, useE} from 'react'
import { ToastAndroid,Image, ScrollView, View, Text, } from 'react-native'
import { Button, ListItem, Avatar } from 'react-native-elements';
import styles from './style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {connect} from 'react-redux';
import {logoutHandler} from '../../redux/actions/auth';
import { ImagePicker,launchCamera, launchImageLibrary} from 'react-native-image-picker';
import axios from 'axios'
import Modal from 'react-native-modal';

function Profile (props, {navigation}) {

    const token = props.authReducers.user.token
    const [isModalVisible, setModalVisible] = useState(false);
    const [image, setImage] = useState();

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
      };
    const updateAvatar = (formData) => {
        return axios.patch("http://192.168.1.127:8000/users/api/uploadProfile", formData, {
          headers: {
            'x-access-token': `Bearer ${token}`,
            'Content-Type': 'multipart/form-data',
          },
        });
      };

      const saveHandler = () => {
        if (!image) {
            return ToastAndroid.showWithGravityAndOffset(
                "Image Can't be empty",
                ToastAndroid.LONG,
                ToastAndroid.TOP,
                25,
                350)
        }
    
        const formData = new FormData();
        formData.append('image', {
          uri:
            Platform.OS === 'android'
              ? image?.uri
              : image.uri.replace('file://', ''),
          name: image.fileName,
          type: 'image/*',
        });
        updateAvatar(formData)
          .then(res => {
            setImage(null);
            return ToastAndroid.showWithGravityAndOffset(
                "Profile Succesfully Updated",
                ToastAndroid.LONG,
                ToastAndroid.TOP,
                25,
                350)
          })
          .catch(err => {
            console.log(err.response.data);
            setImage(null);
          });
      };
    console.log(image)
    const onLogoutHandler = () => {
        props.onLogoutHandler();
        setModalVisible(!isModalVisible);
      };
    const account = [
        {
          title: 'Phone Numbers',
          icon: 'phone'
        },
        {
          title: 'Change Password',
          icon: 'dots-horizontal'
        },
      ]
      const settings = [
        {
          title: 'Chat Settings',
          icon: 'chat-processing'
        },
        {
          title: 'Privacy and Security',
          icon: 'lock'
        },
        {
            title: 'Data and Storage',
            icon: 'server'
          },
      ]
    return (
        <ScrollView>
            <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Profile</Text>
            <View style={{display: 'flex', flexDirection:'row'}}>
            {props.authReducers.user.picture !== null || image ? (
                <Avatar
                size={56}
                rounded
                source={{
                    uri:
                     `http://192.168.1.127:8000/images/${props.authReducers.user.picture}` ,
                }}
                />
            ) : (
                <Avatar overlayContainerStyle={{backgroundColor: 'red'}} activeOpacity={0.7} size={56} rounded title={props.authReducers.user.username.slice(0, 1)} />
            )}
                <View style={styles.contentHeader}>
                    <Text style={styles.nameText}>{props.authReducers.user.username}</Text>
                    <Text style={styles.status}>Online</Text>
                </View>
            </View>
        </View>
            <View>
            <Text style={{
                fontFamily: 'Kanit-Medium',
                padding: 10
            }}>Account</Text>
            <ListItem bottomDivider>
                    <Icon onPress={() => { 
                launchCamera(
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
              }} name={'camera-plus'} size={30} />
                    <ListItem.Content>
                    <ListItem.Title style={styles.listTitle}>Change Avatars</ListItem.Title>
                    </ListItem.Content>
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
              }} name={'image'} size={40} color={'#0000ff'}/>
              <Icon
              onPress={saveHandler} 
              name={'check-circle'} size={35} color={'#69a550'} />
            </ListItem>
            {   
                account.map((item, i) => (
                <ListItem key={i} bottomDivider>
                    <Icon name={item.icon} size={30} />
                    <ListItem.Content>
                    <ListItem.Title style={styles.listTitle}>{item.title}</ListItem.Title>
                    </ListItem.Content>
                    <Icon name={'chevron-right'} size={40}/>
                </ListItem>
                ))
            }
            </View>
            <View>
            <Text style={{
                fontFamily: 'Kanit-Medium',
                padding: 10
            }}>Settings</Text>
            {   
                settings.map((item, i) => (
                <ListItem key={i} bottomDivider>
                    <Icon name={item.icon} size={30} />
                    <ListItem.Content>
                    <ListItem.Title style={styles.listTitle}>{item.title}</ListItem.Title>
                    </ListItem.Content>
                    <Icon name={'chevron-right'} size={40}/>
                </ListItem>
                ))
            }
            </View>
            <View>
            <Text style={{
                fontFamily: 'Kanit-Medium',
                padding: 10
            }}>Help</Text>
                <ListItem bottomDivider>
                    <Icon name={'help-circle'} size={30} />
                    <ListItem.Content>
                    <ListItem.Title style={styles.listTitle}>F.A.Q</ListItem.Title>
                    </ListItem.Content>
                    <Icon name={'chevron-right'} size={40}/>
                </ListItem>
                <ListItem bottomDivider style={{marginBottom: 50}}>
                    <Image source={require('../../assets/img/logout-icon.png')}/>
                    <ListItem.Content>
                    <ListItem.Title onPress={toggleModal}  style={styles.logoutTitle}>Logout</ListItem.Title>
                    <Modal isVisible={isModalVisible}>
                        <View style={{flex: 1, justifyContent: "center"}}>
                            <View style={{backgroundColor: "#f9f9f9f9", height: 150, display:'flex', justifyContent:'center'}}>
                            <Text style={{ fontFamily: 'Kanit-Medium', fontSize: 16,textAlign: 'center', margin: 20}}>Are You Sure want To Logout?</Text>
                            <View style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
                                <Button title="No" buttonStyle={{backgroundColor: "#57BA61", width: 100, borderRadius: 20}} onPress={toggleModal} />
                                <Button title="Yes" buttonStyle={{backgroundColor: "red", width: 100, borderRadius: 20}} onPress={onLogoutHandler} />
                            </View>
                            </View>
                        </View>
                    </Modal>
                    </ListItem.Content>
                </ListItem>
            </View>
        </ScrollView>
    );
 }
 const mapStateToProps = state => {
    return {
      authReducers: state.authReducers,
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      onLogoutHandler: () =>
        dispatch(logoutHandler()),
    };
  };
  
  const ConnectedProfile = connect(mapStateToProps, mapDispatchToProps)(Profile);
  
  export default ConnectedProfile;