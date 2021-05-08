import * as React from 'react';
import { Input, Button } from 'react-native-elements';
import { KeyboardAvoidingView, keyboardVerticalOffset, View, Text, Image } from 'react-native';
import styles from './style';
import FooterTab from '../../components/Footer'



function Login({ navigation}) {
    return (
      <View style={styles.container}>
        <Text style={styles.login}>Login</Text>
        <View style={styles.inputContent}>
        <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={keyboardVerticalOffset}>
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
            <Text onPress={() => navigation.navigate('ResetPassword')} style={styles.forgotPass}>Forgot password?</Text>
            <Button
            title="Login"
            buttonStyle={styles.buttonLogin}
            containerStyle={styles.buttonContent}
            onPress={() => navigation.push('FooterTab')}
            />
            <Button
            icon={
                <Image source={require('../../assets/img/icon-google.png')} />
              }
            containerStyle={styles.buttonContent}
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.titleStyle}
            title="Login With Google"
            onPress={() => navigation.push('Profile')}
            />
            </KeyboardAvoidingView>
        </View>
        <View style={styles.footerText}>
            <Text style={styles.footerText1}>New User? </Text>
            <Text onPress={() => navigation.navigate('Register')} style={styles.footerText2}>Register</Text> 
        </View>
      </View>
    );
  }
export default Login