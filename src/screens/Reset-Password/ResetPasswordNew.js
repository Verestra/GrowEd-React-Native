import * as React from 'react';
import { Icon, Input, Button } from 'react-native-elements';
import { KeyboardAvoidingView, keyboardVerticalOffset,ScrollView,View, Text, Image } from 'react-native';
import styles from './style';

function ResetPasswordNew({ navigation}) {
    return (
        <View style={{padding: 20, marginTop:40}}>
            
            <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={keyboardVerticalOffset}>
                <Text style={styles.resetText}>Create New Password</Text>
                <Text style={styles.emailText}>Your new password must be different from previous used password!</Text>
                <Input
                inputContainerStyle={styles.inputContainerStyle}
                label={"Password"}
                labelStyle={styles.labelStyle}
                    rightIcon={{ type: 'font-awesome', name: 'eye' }}
                    rightIconContainerStyle={styles.rightIconStyle}
                    secureTextEntry={true}
                />
                <Input
                inputContainerStyle={styles.inputContainerStyle}
                label={"Confirm Password"}
                labelStyle={styles.labelStyle}
                    rightIcon={{ type: 'font-awesome', name: 'eye' }}
                    rightIconContainerStyle={styles.rightIconStyle}
                    secureTextEntry={true}
                />
                <Button
                title="Create"
                buttonStyle={styles.buttonRegister}
                containerStyle={styles.buttonContent}
                onPress={() => navigation.push('ResetPasswordSuccess')}
                />
            </KeyboardAvoidingView > 
           
        </View>
     );
     }

export default ResetPasswordNew