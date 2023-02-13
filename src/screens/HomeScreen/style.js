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
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        marginTop: 24,
        marginBottom: 30
    },
    button: {
        //backgroundColor: '#4e46e5',
        backgroundColor: '#3d28de',
        flexDirection: 'row',
        width: '80%',
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 6,
        color: 'white',
        textAlign: 'center',
        marginTop: 16
    },
    buttonText: {
        color: 'white',
    }
})
export default styles
