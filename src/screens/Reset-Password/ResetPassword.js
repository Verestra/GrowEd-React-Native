import * as React from 'react';
import { Icon, Input, Button } from 'react-native-elements';
import { KeyboardAvoidingView, keyboardVerticalOffset,ScrollView,View, Text, Image } from 'react-native';
import styles from './style';

function ResetPassword({ navigation}) {
    return (
        
        <View>
          <Icon name='chevron-left' size={50} containerStyle={styles.backIcon} onPress={() => navigation.goBack()}/>
            <ScrollView style={styles.container}>
            <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={keyboardVerticalOffset}>
                <Text style={styles.resetText}>Reset Password</Text>
                <Image style={styles.forgotImage} source={require('../../assets/img/forgot-icon.png')} />
                <Text style={styles.emailText}>Enter your email address linked to this account.</Text>
                <Text style={styles.sendText}>We will send you the verification code to reset your password</Text>
                <Input inputContainerStyle={styles.inputContainerStyle}
                label={"Email"}
                labelStyle={styles.labelStyle}
                />
                <Button
                title="Send"
                buttonStyle={styles.buttonRegister}
                containerStyle={styles.buttonContent}
                onPress={() => navigation.push('ResetPasswordOtp')}
                />
            </KeyboardAvoidingView > 
            </ScrollView> 
        </View>
     );
     }

export default ResetPassword