import {StyleSheet} from 'react-native';
const styles = StyleSheet.create ({  
    headerContainer: {  
        padding: 25,
        backgroundColor: '#5784BA',
        borderBottomStartRadius: 20,
        borderBottomEndRadius: 20,
        paddingBottom: 35
    },
    contentHeader: {
        display: 'flex', 
        flexDirection:'column',
        marginLeft: 30,
    },
    headerText: {
        fontFamily: 'Kanit-Medium',
        color: '#F9F9F9',
        fontSize: 31,
        width: 150,
        height: 47,
        marginBottom: 20
    },
    nameText: {
        fontFamily: 'Kanit-Medium',
        color: '#F9F9F9',
        fontSize: 24
    },
    status: {
        fontFamily: 'Kanit-Light',
        color: '#F9F9F9',
        fontSize: 16
    },
    accountContainer: {
        padding: 30
    },
    listTitle: {
        fontFamily: 'Kanit-Medium',
        fontSize: 16
    },
    logoutTitle: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 16,
        color: '#FF1313',
        marginLeft: 5
    }
})
export default styles