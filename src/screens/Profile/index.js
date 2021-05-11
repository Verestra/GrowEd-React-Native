import React from 'react'
import { Image, ScrollView, View, Text, } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements';
import styles from './style'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

function ProfileHeader({ navigation}) {
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Profile</Text>
            <View style={{display: 'flex', flexDirection:'row'}}>
            <Avatar
            size={56}
            rounded
            source={{
                uri:
                'https://i.ibb.co/6vqjwC5/Profile-Picture.png',
            }}
            />
                <View style={styles.contentHeader}>
                    <Text style={styles.nameText}>Emir Kharisma</Text>
                    <Text style={styles.status}>Online</Text>
                </View>
            </View>
        </View>
    )
 }
function Profile({ navigation}) {
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
            <ProfileHeader />
            <View>
            <Text style={{
                fontFamily: 'Kanit-Medium',
                padding: 10
            }}>Account</Text>
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
                    <ListItem.Title onPress={() => navigation.replace('Login')} style={styles.logoutTitle}>Logout</ListItem.Title>
                    </ListItem.Content>
                </ListItem>
            </View>
        </ScrollView>
    );
 }
export default Profile