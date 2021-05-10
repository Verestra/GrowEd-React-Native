import * as React from 'react';
import { ScrollView, View, Text, Image } from 'react-native';
import styles from './Style';
import { SearchBar } from 'react-native-elements';
import { ListItem, Avatar } from 'react-native-elements'

function ChatHeader({ navigation}) {
    return (
        <View style={styles.headerContainer}>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between', marginBottom: 20}}>
            <Text style={styles.headerName}>Chats</Text>
            <Image source={require('../../assets/img/add-icon.png')}/>
            </View>
            <SearchBar
                placeholder="Search"
                lightTheme
                round
                inputContainerStyle={{backgroundColor: '#E5E6EB'}}
                containerStyle={{backgroundColor: '#5784BA', borderTopWidth: 0, borderBottomWidth: 0, marginTop: 10}}
            />
        </View>
    )
 }


function Chat({ navigation}) {
    const list = [
        {
          name: 'Nissa Sabyan',
          avatar_url: 'https://i.ibb.co/kgfYPg0/ava-nisa.png',
          message: 'How about number 3',
          time: '10.15 pm'
        },
        {
          name: 'Rio Dewanto',
          avatar_url: 'https://i.ibb.co/nfXkGtQ/ava-rio.png',
          message: "I'm Hungry",
          time: '9.12 pm'
        },
        {
            name: 'Discussion Group 21 (5)',
            avatar_url: 'https://i.ibb.co/gM0WWx9/ava-group21.png',
            message: "Nissa : Let’s finish the task for tomorrow",
            time: '1.23 pm'
          },
          {
            name: 'Isyana Sarasvati',
            avatar_url: 'https://i.ibb.co/Bn7BKVX/ava-isyana.png',
            message: "Thanks",
            time: 'Yesterday'
          },
          {
            name: 'Tompi',
            avatar_url: 'https://i.ibb.co/PxPr87w/ava-tompi.png',
            message: "See you later!",
            time: 'Yesterday'
          },
          {
            name: 'You, Tompi, ',
            avatar_url: 'https://i.ibb.co/gPcLqXH/ava-group.png',
            message: "Haha. Yes, I heard it before",
            time: '8/10'
          },
          {
            name: 'Peppy',
            avatar_url: 'https://i.ibb.co/HB2VF5J/ava-pepi.png',
            message: "Haha. Me Too",
            time: '7/10'
          },  
      ]
      
    return (
        <View>
            <ChatHeader/>
            <ScrollView>
            {
                list.map((l, i) => (
                <ListItem key={i} bottomDivider>
                    <Avatar size="large" rounded source={{uri: l.avatar_url}} />
                    <ListItem.Content style={{padding: 10}}>
                    <ListItem.Title style={styles.senderName}>{l.name}</ListItem.Title>
                    <ListItem.Subtitle style={styles.senderMessage}>{l.message}</ListItem.Subtitle>
                    </ListItem.Content>
                    <Text style={styles.senderMessage}>{l.time}</Text>
                </ListItem>
                ))
            }
            </ScrollView>
        </View>
     );
     }

export default Chat