import * as React from 'react';
import {useState} from 'react'
import { useNavigation } from '@react-navigation/native';
import {  Pressable, ScrollView, View, Text, Image } from 'react-native';
import styles from './Style';
import { SearchBar } from 'react-native-elements';
import { ListItem, Avatar, CheckBox } from 'react-native-elements'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

function ChatHeader() {
    const navigation = useNavigation();
    return (
        <View style={styles.headerContainer}>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between', marginBottom: 20}}>
            
            <Text style={styles.headerCreate}> <Icon onPress={() => navigation.goBack()} name="chevron-left" size={30}/>Choose Friends</Text>
                <Text onPress={() => navigation.navigate('Chat')} style={styles.headerCreate}> Create</Text>
            </View>
            <SearchBar
                placeholder="Search by name"
                placeholderTextColor={"#000000"}
                lightTheme
                round
                inputContainerStyle={{backgroundColor: '#E5E6EB'}}
                containerStyle={{backgroundColor: '#5784BA', borderTopWidth: 0, borderBottomWidth: 0, marginTop: 10}}
            />
        </View>
    )
 }

 function ChooseFriends({ navigation}) {
    const [checked, setChecked] = useState(false);
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
        <View>
            <ChatHeader/>
            <ScrollView style={{backgroundColor: '#F9F9F9'}}>
            <Text style={{fontFamily: 'Roboto-Medium', marginLeft: 20, margin: 10 }}>Friends 11</Text>
            {
                list.map((l, i) => (
                <ListItem key={i} bottomDivider>
                    <Avatar size="large" rounded source={{uri: l.avatar_url}} />
                    <ListItem.Content style={{padding: 10}}>
                    <ListItem.Title style={styles.senderName}>{l.name}</ListItem.Title>
                    </ListItem.Content>
                    <CheckBox 
                    checked={checked}
                    onPress={() => setChecked(!checked)}
                    />
                </ListItem>
                ))
            }
            </ScrollView>
        </View>
     );
     }

export default ChooseFriends