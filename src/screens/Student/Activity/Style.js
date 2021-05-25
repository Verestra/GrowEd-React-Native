import {StyleSheet} from 'react-native';
const styles = StyleSheet.create ({
    headerContainer: {  
        padding: 25,
        backgroundColor: '#5784BA',
        borderBottomStartRadius: 20,
        borderBottomEndRadius: 20,
        paddingBottom: 35
    },
    headerName: {
        fontFamily: 'Kanit-Medium',
        color: '#F9F9F9',
        fontSize: 33,
    },
    headerText: {
        fontFamily: 'Kanit-Medium',
        color: '#F9F9F9',
        fontSize: 22
    },
    h2Text: {
        fontFamily: 'Montserrat-Medium',
        color: '#000000',
        fontSize: 20,
        maxWidth: 250
    },
    h3Text: {
        fontFamily: 'Montserrat-Medium',
        color: '#000000',
        fontSize: 15,
        marginRight: 5
    },
    containerDetail: {
        marginTop: '22%',
        padding: 20
    },
    activeText: {
        fontFamily: 'Montserrat-Medium',
        color: '#5784BA',
        fontSize: 15,
        marginRight: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#5784BA'
    },
    descHeader: {
        fontFamily: 'Montserrat-SemiBold',
        color: '#000000',
        fontSize: 20,
        marginTop: 15,
        marginBottom: 10
    },
    descText: {
        fontFamily: 'Roboto-Regular',
        color: '#000000',
        fontSize: 15
    },
    fab: {
        position: 'absolute', 
        width: 56, 
        height: 56, 
        alignItems: 'center', 
        justifyContent: 'center', 
        right: 20, 
        bottom: 20, 
        backgroundColor: 'blue', 
        borderRadius: 30, 
        elevation: 8 
    },
    fabIcon: { 
        fontSize: 40, 
        color: 'white' 
      }
    })

export default styles