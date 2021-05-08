import * as React from 'react';
import { Icon, Input, Button } from 'react-native-elements';
import { KeyboardAvoidingView, keyboardVerticalOffset,ScrollView,View, Text, Image } from 'react-native';
import styles from './style';
import OTPInputView from '@twotalltotems/react-native-otp-input'

function ResetPasswordOtp({ navigation}) {
    return (
        <View style={{paddingTop: 50}}>
            <ScrollView style={styles.container}>
            <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={keyboardVerticalOffset}>
                <Text style={styles.resetText}>Account Verification</Text>
                <Image style={styles.forgotImage} source={require('../../assets/img/forgot-otp-icon.png')} />
                <Text style={styles.emailText}>Enter verification code we just sent to your email address</Text>
                <OTPInputView
                style={styles.OTPInput}
                selectionColor={'#010620'}
                placeholderTextColor={'red'}
                pinCount={4}
                // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                // onCodeChanged = {code => { this.setState({code})}}
                autoFocusOnLoad
                codeInputFieldStyle={styles.underlineStyleBase}
                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                onCodeFilled = {(code => {
                    console.log(`Code is ${code}, you are good to go!`)
                })}
                /> 
                <View style={styles.footerText}>
                    <Text style={styles.footerText1}>Didn't receive code?</Text>
                    <Text onPress={() => navigation.goBack()} style={styles.footerText2}>Resend</Text> 
                </View>       
                <Button
                title="Verify"
                buttonStyle={styles.buttonRegister}
                containerStyle={styles.buttonContent}
                onPress={() => navigation.push('ResetPasswordNew')}
                />
            </KeyboardAvoidingView > 
            </ScrollView> 
        </View>
     );
     }

export default ResetPasswordOtp