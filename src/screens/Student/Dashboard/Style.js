import {StyleSheet} from 'react-native';
const styles = StyleSheet.create ({
    headerContainer: {  
        padding: 25,
        backgroundColor: '#5784BA',
        borderBottomStartRadius: 20,
        borderBottomEndRadius: 20,
        paddingBottom: 35
    },
    headerText: {
        fontFamily: 'Kanit-Medium',
        color: '#F9F9F9',
        fontSize: 20,
    },
    headerName: {
        fontFamily: 'Kanit-SemiBold',
        color: '#F9F9F9',
        fontSize: 31
    },
    dashboardContainer: {
        padding: 20,
        backgroundColor: '#F9F9F9',
        height: '100%'  
    },
    headerText2: {
        fontFamily: 'Kanit-Medium',
        fontSize: 20,
        color: '#010620'
    },
    itemContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
    },
    itemContent: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        padding: 10,
    },
    textItem: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
        flex: 1,
        marginRight: 10,
        lineHeight: 30,
        letterSpacing: 0.5,
        color: '#010620',
    },
    textItem1: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 15,
        flex: 2,
        marginRight: 15,
        lineHeight: 30,
        letterSpacing: 0.5,
        color: '#010620',
    }
    })

export default styles