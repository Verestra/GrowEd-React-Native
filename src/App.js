import { Component } from 'react';  
import * as React from 'react'
 import { Platform, StyleSheet, View,  
 Image,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './screens/Login'


const Stack = createStackNavigator();

 export default class App extends Component 
{  
   constructor(){  
     super();  
     this.state={  
     isVisible : true,  
    }  
  }  
   Hide_Splash_Screen=()=>{  
    this.setState({   
      isVisible : false   
    });  
  }  
   
  componentDidMount(){  
    var that = this;  
    setTimeout(function(){  
      that.Hide_Splash_Screen();  
    }, 5000);  
   }  
   
    render()  
    {  
        let Splash_Screen = (  
             <View style={styles.SplashScreen_RootView}>  
                 <View style={styles.SplashScreen_ChildView}>  
                 <Image source={require('./assets/img/logo-GrowEd.png')} />  
                </View>  
             </View> )  
         return(   
               <NavigationContainer style={styles.NavigationContainer}>
                  <Stack.Navigator initialRouteName="Login" headerMode={'none'}>
                    <Stack.Screen  name="Login" component={Login} />
                  </Stack.Navigator>
                  {  
                  (this.state.isVisible === true) ? Splash_Screen : null  
                }
                </NavigationContainer>   
              );  
    }  
}  
 const styles = StyleSheet.create(  
{   
    NavigationContainer: {
      backgroundColor: '#F9F9F9',
    },
    SplashScreen_RootView:  
    {  
        justifyContent: 'center',  
        flex:1,   
        position: 'absolute',  
        width: '100%',  
        height: '100%',
      },  
   
    SplashScreen_ChildView:  
    {  
        justifyContent: 'center',  
        alignItems: 'center',  
        backgroundColor: '#CBDAF3',  
        flex:1,  
    },  
});  