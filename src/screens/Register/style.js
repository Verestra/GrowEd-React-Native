import {StyleSheet} from 'react-native';
const styles = StyleSheet.create ({  
    container: {  
        display: 'flex',
        flexGrow: 1,
        width: '100%',
        padding: 20,
        paddingTop: 40,
        backgroundColor: '#F9F9F9'
    },
    inputContent: {
        flex: 1,
        marginTop: 40
        
    },
    register: {
        textAlign: 'center',
        fontFamily: 'Kanit-Medium',
        fontSize: 32,
    },
    forgotPass: {
        textAlign: 'right',
        marginRight: 20,
        fontFamily: 'Roboto-Medium'
    },
    rightIconStyle: {
        marginRight: 10
    },
    inputContainerStyle: {
        borderWidth: 1,
        borderTopWidth: 0.5,
        borderRadius: 10,
    },
    titleStyle: {
        color: '#010620'
    },
    buttonContent: {
        borderRadius: 10,
        marginTop: 20,    
    },
    buttonLogin: {
        height: 60,
    },
    buttonStyle: {
        height: 50,
        backgroundColor: 'rgba(0, 13, 79, 0.08)',
    },
    buttonRegister: {
        height: 50,
    },
    footerText: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
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

export default styles;