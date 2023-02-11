import { StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: { 
        backgroundColor: 'white',
        alignItems: 'center',
        width: '100%',
        flex: 1,
        marginTop: Constants.statusBarHeight//makes sure the top of the screen has the proper padding in regards to the status bar.
    },
    title: {
        marginTop: 24,
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 2,
    },
    description: {
        fontWeight: 'bold',
        textDecoration: 'underline',
        fontSize: 16,
        marginBottom: 24
    },
    taskContainer: {
        width: '100%',
        paddingHorizontal: '5%'
    },
    checkBoxContainer: {
        marginTop: 24,
        width: '100%',
        borderTopWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: '3%',
    }
})
export default styles
