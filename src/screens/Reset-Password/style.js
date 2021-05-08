import {StyleSheet} from 'react-native';
const styles = StyleSheet.create ({
    container: {
        padding: 10,
    },
    resetText: {
        textAlign: 'center',
        fontFamily: 'Kanit-Medium',
        lineHeight: 48,
        color: '#010620',
        fontSize: 32
    },
    forgotImage: {
        alignSelf: 'center',
        marginTop: 30
    },
    emailText: {
        fontFamily: 'Kanit-Medium',
        textAlign: 'center',
        lineHeight: 30,
        fontSize: 23,
        color: '#010620',
        padding: 20
    },
    sendText: {
        fontFamily: 'Kanit-Medium',
        textAlign: 'center',
        lineHeight: 21,
        fontSize: 17,
        color: '#837F8F',
        paddingBottom: 30
    },
    inputContainerStyle: {
        borderWidth: 1,
        borderTopWidth: 0.5,
        borderRadius: 10,
    },  
    backIcon: {
        marginTop: 15, 
        alignItems: 'flex-start'
    },
    OTPInput: {
        alignSelf: 'center',
        width: '80%',
        height: 125,
        color: '#010620',
        borderColor: '#010620'
    },
    borderStyleBase: {
        width: 30,
        height: 45,
        color: '#010620',
        borderColor: '#010620'
      },
     
      borderStyleHighLighted: {
        borderColor: '#010620',
        color: '#010620'
      },
     
      underlineStyleBase: {
        width: 30,
        height: 45,
        borderWidth: 0,
        borderBottomWidth: 1,
        color: '#010620',
        borderColor: '#010620'
      },
     
      underlineStyleHighLighted: {
        borderColor: "#010620",
        color: '#010620',
        borderColor: '#010620'
      },
      footerText: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 40
    },
    footerText1: {
        fontFamily: 'Roboto-Light',
        fontSize: 16,
        color: '#ADA9BB',
    },
    footerText2: {
        color: '#5784BA',
        fontSize: 16,
        position:'relative'
    },
})
export default styles