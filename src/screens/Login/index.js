import * as React from 'react';
import {Component} from 'react';
import { Input, Button } from 'react-native-elements';
import { KeyboardAvoidingView, keyboardVerticalOffset, View, Text, Image } from 'react-native';
import styles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios'
import Spinner from 'react-native-loading-spinner-overlay';
import deviceStorage from '../../services/deviceStorage'


const initialState = {
    userNameOrEmail: '',
    password: '',
    errors: {},
    isAuthorized: false,
    isLoading: false,
  };

class Login extends Component{
    state = initialState
    componentWillUnmount() {}

    onUsernameChange = userNameOrEmail => {
        this.setState({userNameOrEmail});
      };
    
    onPasswordChange = password => {
        this.setState({password});
      };

      onPressLogin() {
        const {userNameOrEmail, password} = this.state;
        const payload = {userNameOrEmail, password};
        console.log(payload);
    
        const onSuccess = ({data}) => {
          console.log(data.success)
          if (data.success) {
            this.props.navigation.navigate('FooterTab')
          }
        };
    
        const onFailure = error => {
          console.log(error && error.response);
          this.setState({errors: error.response.data, isLoading: false});
        };
    
        // Show spinner when call is made
        this.setState({isLoading: true});
    
        Axios.post("http://54.160.80.46:8000/users/api/auth/login", payload)
          .then(onSuccess)
          .catch(onFailure);
      }

    render() {
    const {isLoading} = this.state;
    return (
      <View style={styles.container}>
        <Spinner visible={isLoading} />
        <Text style={styles.login}>Login</Text>
        {!this.state.isAuthorized ? 
        <View style={styles.inputContent}>
        <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={keyboardVerticalOffset}>
            <Input inputContainerStyle={styles.inputContainerStyle}
            value={this.state.userNameOrEmail}
            onSubmitEditing={event =>
                this.passwordInput.wrappedInstance.focus()
              }
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
            onPress={() => this.props.navigation.push('Profile')}
            />
            </KeyboardAvoidingView>
        </View> : this.props.navigation.push('Profile') }
        <View style={styles.footerText}>
            <Text style={styles.footerText1}>New User? </Text>
            <Text onPress={() => this.props.navigation.navigate('Register')} style={styles.footerText2}>Register</Text> 
        </View>
      </View>
    );
    }
  }
export default Login