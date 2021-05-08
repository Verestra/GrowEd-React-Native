import * as React from 'react';
import { Icon, Input, Button } from 'react-native-elements';
import { KeyboardAvoidingView, keyboardVerticalOffset,ScrollView,View, Text, Image } from 'react-native';
import styles from './style';

function ResetPasswordSuccess({ navigation}) {
    return (
        <View style={{paddingTop: 40}}>
            <Text style={styles.resetText}>Password Changed!</Text>
                <Image style={styles.forgotImage} source={require('../../assets/img/success-icon.png')} />
                <Text onPress={() => navigation.push('Login')} style={styles.emailText}>Login to your account</Text>
        </View>
     );
     }

export default ResetPasswordSuccess