import * as React from 'react';
import { Input, Button } from 'react-native-elements';
import { KeyboardAvoidingView, keyboardVerticalOffset, ScrollView,View, Text, Image } from 'react-native';
import styles from './style';



function Register({ navigation}) {
    return (
      <View style={styles.container}>
        <Text style={styles.register}>Register</Text>
        <ScrollView style={styles.inputContent}>
        <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={keyboardVerticalOffset}>
            <Input inputContainerStyle={styles.inputContainerStyle}
            label={"Username"}
            labelStyle={styles.labelStyle}/>
            <Input inputContainerStyle={styles.inputContainerStyle}
            label={"Email"}
            labelStyle={styles.labelStyle}/>
            <Input
            inputContainerStyle={styles.inputContainerStyle}
            label={"Password"}
            labelStyle={styles.labelStyle}
                rightIcon={{ type: 'font-awesome', name: 'eye' }}
                rightIconContainerStyle={styles.rightIconStyle}
                secureTextEntry={true}
            /><Input
            inputContainerStyle={styles.inputContainerStyle}
            label={"Confirm Password"}
            labelStyle={styles.labelStyle}
                rightIcon={{ type: 'font-awesome', name: 'eye' }}
                rightIconContainerStyle={styles.rightIconStyle}
                secureTextEntry={true}
            />
            <Button
            title="Register"
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
        </ScrollView>
        <View style={styles.footerText}>
            <Text style={styles.footerText1}>Already Have Account? </Text>
            <Text onPress={() => navigation.navigate('Login')} style={styles.footerText2}>Login</Text> 
        </View>
      </View>
    );
  }
export default Register