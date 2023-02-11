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
    buttonContainer: {
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 30
    },
    button: {
        textAlign: 'center',
        padding: 8,
        paddingHorizontal: 10,
        marginBottom: 10,
        borderWidth: 1
    }
})
export default styles
