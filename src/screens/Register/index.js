import * as React from 'react';
import {Component} from 'react'
import { Input, Button } from 'react-native-elements';
import { KeyboardAvoidingView, keyboardVerticalOffset, ScrollView,View, Text, Image } from 'react-native';
import styles from './style';
import Axios from 'axios'
import Spinner from 'react-native-loading-spinner-overlay';
import deviceStorage from '../../services/deviceStorage'


const initialState = {
    username: '',
    email: '',
    password: '',
    passwordMatch: '',
    errors: {},
    isAuthorized: false,
    isLoading: false,
  };


class Register extends Component {
  state = initialState
    componentWillUnmount() {}

    onUsernameChange = username => {
        this.setState({username});
      };

    onEmailChange = email => {
        this.setState({email});
      };
    
    onPasswordChange = password => {
        this.setState({password});
      };
    onPasswordMatchChange = passwordMatch => {
        this.setState({passwordMatch});
      };

      onPressLogin() {
        const {username, email, password, passwordMatch} = this.state;
        const payload = {username,email, password, passwordMatch};
        console.log(payload);
    
        const onSuccess = ({data}) => {
          console.log(data.success)
          if (data.success) {
            this.props.navigation.navigate('Login')
          }
        };
    
        const onFailure = error => {
          console.log(error && error.response);
          this.setState({errors: error.response.data, isLoading: false});
        };
    
        // Show spinner when call is made
        this.setState({isLoading: true});
    
        Axios.post("http://54.90.54.163:8000/users/api/auth/register", payload)
          .then(onSuccess)
          .catch(onFailure);
      }

  render () {
    const {isLoading} = this.state;
    return (
      <View style={styles.container}>
        <Spinner visible={isLoading} />
        <Text style={styles.register}>Register</Text>
        {!this.state.isAuthorized ? 
        <ScrollView style={styles.inputContent}>
        <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={keyboardVerticalOffset}>
            <Input inputContainerStyle={styles.inputContainerStyle}
            label={"Username"}
            value={this.state.username}
            onSubmitEditing={event =>
                this.passwordInput.wrappedInstance.focus()
              }
            onChangeText={this.onUsernameChange}
            labelStyle={styles.labelStyle}/>
            <Input inputContainerStyle={styles.inputContainerStyle}
            label={"Email"}
            value={this.state.email}
            onSubmitEditing={event =>
                this.passwordInput.wrappedInstance.focus()
              }
            onChangeText={this.onEmailChange}
            labelStyle={styles.labelStyle}/>
            <Input
            ref={node => {
              this.passwordInput = node;
            }}
            inputContainerStyle={styles.inputContainerStyle}
            label={"Password"}
            onChangeText={this.onPasswordChange}
            onSubmitEditing={this.onPressLogin.bind(this)}
            labelStyle={styles.labelStyle}
                rightIcon={{ type: 'font-awesome', name: 'eye' }}
                rightIconContainerStyle={styles.rightIconStyle}
                secureTextEntry={true}
            /><Input
            inputContainerStyle={styles.inputContainerStyle}
            label={"Confirm Password"}
            onChangeText={this.onPasswordMatchChange}
            onSubmitEditing={this.onPressLogin.bind(this)}
            labelStyle={styles.labelStyle}
                rightIcon={{ type: 'font-awesome', name: 'eye' }}
                rightIconContainerStyle={styles.rightIconStyle}
                secureTextEntry={true}
            />
            <Button
            title="Register"
            onPress={this.onPressLogin.bind(this)}
            buttonStyle={styles.buttonRegister}
            containerStyle={styles.buttonContent}
            />
            <Button
            icon={
                <Image source={require('../../assets/img/icon-google.png')} />
              }
            containerStyle={styles.buttonContent}
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.titleStyle}
            title="Register With Google"
            />
          </KeyboardAvoidingView>
        </ScrollView>  : this.props.navigation.push('Login') }
        <View style={styles.footerText}>
            <Text style={styles.footerText1}>Already Have Account? </Text>
            <Text onPress={() => this.props.navigation.navigate('Login')} style={styles.footerText2}>Login</Text> 
        </View>
      </View>
    );
  }
  }
export default Register