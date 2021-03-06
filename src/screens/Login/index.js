import * as React from 'react';
import {Component} from 'react';
import { Input, Button } from 'react-native-elements';
import { ToastAndroid ,KeyboardAvoidingView, keyboardVerticalOffset, ScrollView,View, Text, Image } from 'react-native';
import styles from './style';
import Axios from 'axios'
import Spinner from 'react-native-loading-spinner-overlay';


import {connect} from 'react-redux';
import {loginHandler} from '../../redux/actions/auth';
import { API_KEY } from '@env';


const initialState = {
    userNameOrEmail: '',
    password: '',
    errors: {},
    isAuthorized: false,
    isLoading: false,
    showPassword: false,
    setShowPassword: false,
  };

class Login extends Component{
    state = initialState
    

    onUsernameChange = userNameOrEmail => {
        this.setState({userNameOrEmail});
      };
    
    onPasswordChange = password => {
        this.setState({password});
      };

      onPressLogin() {
        const {userNameOrEmail, password} = this.state;
        if (!userNameOrEmail || !password) {
          return ToastAndroid.showWithGravityAndOffset(
            "Field Can't be Empty",
            ToastAndroid.LONG,
            ToastAndroid.TOP,
            25,
            350
          );
        }
        if (userNameOrEmail.length < 3) {
          return ToastAndroid.showWithGravityAndOffset(
            "Username Or Email Minimum length 3",
            ToastAndroid.LONG,
            ToastAndroid.TOP,
            25,
            350
          );
        }
        if (password.length <= 5) {
          return ToastAndroid.showWithGravityAndOffset(
            "Password Minimum length 6",
            ToastAndroid.LONG,
            ToastAndroid.TOP,
            25,
            350
          );
        }
        const data = {userNameOrEmail, password};
        console.log(data);
        this.setState({isLoading : true})
        this.props.onLoginHandler(data);
        setTimeout(() => {
          this.setState({isLoading : false})
        }, 2000)
      }
      componentWillUnmount() {
        // fix Warning: Can't perform a React state update on an unmounted component
        this.setState = (state,callback)=>{
            return;
        };
    }
    render() {
    const {isLoading} = this.state;
    return (
      <ScrollView style={styles.container}>
        <Spinner visible={isLoading} />
        <Text style={styles.login}>Login</Text>
        {!this.state.isAuthorized ? 
        <View style={styles.inputContent}>
        <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={keyboardVerticalOffset}>
            <Input inputContainerStyle={styles.inputContainerStyle}
            value={this.state.userNameOrEmail}
            
            onChangeText={this.onUsernameChange}
            label={"Username or Email"}
            labelStyle={styles.labelStyle}/>
            <Input
            ref={node => {
                this.passwordInput = node;
              }}
            inputContainerStyle={styles.inputContainerStyle}
            value={this.state.password}
            onChangeText={this.onPasswordChange}
            onSubmitEditing={this.onPressLogin.bind(this)}
            label={"Password"}
            labelStyle={styles.labelStyle}
                rightIcon={{ type: 'font-awesome', name: 'eye' }}
                rightIconContainerStyle={styles.rightIconStyle}
                secureTextEntry={true}
            />
            <Text onPress={() => this.props.navigation.navigate('ResetPassword')} style={styles.forgotPass}>Forgot password?</Text>
            <Button
            title="Login"
            buttonStyle={styles.buttonLogin}
            containerStyle={styles.buttonContent}
            onPress={this.onPressLogin.bind(this)}
            />
            <Button
            icon={
                <Image source={require('../../assets/img/icon-google.png')} />
              }
            containerStyle={styles.buttonContent}
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.titleStyle}
            title="Login With Google"
            onPress={() => this.props.navigation.replace('FooterTab')}
            />
            </KeyboardAvoidingView>
        </View> : this.props.navigation.push('Profile') }
        <View style={styles.footerText}>
            <Text style={styles.footerText1}>New User? </Text>
            <Text onPress={() => this.props.navigation.navigate('Register')} style={styles.footerText2}>Register</Text> 
        </View>
      </ScrollView>
    );
    }
  }

  const mapStateToProps = state => {
    return {
      authReducers: state.authReducers,
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      onLoginHandler: (data) =>
        dispatch(loginHandler(data)),
    };
  };
  
  const ConnectedLogin = connect(mapStateToProps, mapDispatchToProps)(Login);
  
  export default ConnectedLogin;
  