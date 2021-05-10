import { Component } from 'react';  
import * as React from 'react'
 import { Platform, StyleSheet, View,  
 Image,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './screens/Login';
import Register from './screens/Register';
import ResetPassword from './screens/Reset-Password/ResetPassword';
import ResetPasswordOtp from './screens/Reset-Password/ResetPasswordOtp';
import ResetPasswordNew from './screens/Reset-Password/ResetPasswordNew';
import ResetPasswordSuccess from './screens/Reset-Password/ResetPasswordSucces';
import Profile from './screens/Profile';
import FooterTab from './components/Footer';
import Dashboard from './screens/Student/Dashboard/Dashboard';
import ForYou from './screens/Student/Dashboard/Dashboard';
import Chat from './screens/Chats/Chat'
import Activity from './screens/Student/Activity/Activity'

 export default class App extends Component 
{  
   constructor(){  
     super();  
     this.state={  
     isVisible : true,
     jwt: '',
     loading: true  
    }
    this.newJWT = this.newJWT.bind(this);
  }

  newJWT(jwt){
    this.setState({
      jwt: jwt
    });
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
      const {Navigator, Screen} = createStackNavigator();
        let Splash_Screen = (  
             <View style={styles.SplashScreen_RootView}>  
                 <View style={styles.SplashScreen_ChildView}>  
                 <Image source={require('./assets/img/logo-GrowEd.png')} />  
                </View>  
             </View> )  
         return(   
               <NavigationContainer style={styles.NavigationContainer}>
                  <Navigator headerMode={'none'} initialRouteName="Login">
                    <Screen  name="Login" component={Login} />
                    <Screen  name="Register" component={Register} />
                    <Screen  name="ResetPassword" component={ResetPassword} />
                    <Screen  name="ResetPasswordOtp" component={ResetPasswordOtp} />
                    <Screen  name="ResetPasswordNew" component={ResetPasswordNew} />
                    <Screen  name="ResetPasswordSuccess" component={ResetPasswordSuccess} />
                    <Screen  name="Profile" component={Profile} />
                    <Screen  name="FooterTab" component={FooterTab} />
                    <Screen  name="Dashboard" component={Dashboard} />
                    <Screen  name="ForYou" component={ForYou} />
                    <Screen  name="Chat" component={Chat} />
                    <Screen  name="Activity" component={Activity} />
                  </Navigator>
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