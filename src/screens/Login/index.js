import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import { View, Text, Image } from 'react-native';
import styles from './style'
import { BorderlessButton } from 'react-native-gesture-handler';



function Login() {
    return (
      <View style={styles.container}>
        <Text style={styles.login}>Login</Text>
        <View style={styles.inputContent}>
            <Input inputContainerStyle={styles.inputContainerStyle}
            label={"Username or Email"}
            labelStyle={styles.labelStyle}/>
            <Input
            inputContainerStyle={styles.inputContainerStyle}
            label={"Password"}
            labelStyle={styles.labelStyle}
                rightIcon={{ type: 'font-awesome', name: 'eye' }}
                rightIconContainerStyle={styles.rightIconStyle}
                secureTextEntry={true}
            />
            <Text style={styles.forgotPass}>Forgot password?</Text>
            <Button
            title="Login"
            buttonStyle={styles.buttonLogin}
            containerStyle={styles.buttonContent}
            />
            <Button
            icon={
                <Image source={require('../../assets/img/icon-google.png')} />
              }
            containerStyle={styles.buttonContent}
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.titleStyle}
            title="Login With Google"
            />
            
            
        </View>
        <View style={styles.footerText}>
            <Text style={styles.footerText1}>New User? </Text>
            <Text style={styles.footerText2}>Register</Text> 
        </View>
      </View>
    );
  }
export default Login