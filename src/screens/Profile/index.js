import React, {useState} from 'react'
import { Image, ScrollView, View, Text, } from 'react-native'
import { Button, ListItem, Avatar } from 'react-native-elements';
import styles from './style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {connect} from 'react-redux';
import {logoutHandler} from '../../redux/actions/auth';
import { ImagePicker,launchCamera, launchImageLibrary} from 'react-native-image-picker';
import axios from 'axios'


function Profile (props, {navigation}) {
    const token = props.authReducers.user.token
    const [image, setImage] = useState();
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
          console.log("image can not be empty");
          return;
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
            console.log(res)
            const msg = res.data.message;
            setImage(null);
          })
          .catch(err => {
            console.log(err.response.data);
            const msg = errorFormatter(err);
            setImage(null);
          });
      };
    console.log(image)
    const onLogoutHandler = () => {
        props.onLogoutHandler();
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
            <Avatar
            size={56}
            rounded
            source={{
                uri:
                `http://192.168.1.127:8000/images/${props.authReducers.user.picture}`,
            }}
            />
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
                    <ListItem.Title onPress={onLogoutHandler} style={styles.logoutTitle}>Logout</ListItem.Title>
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