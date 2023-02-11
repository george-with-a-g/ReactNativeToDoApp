import { View, Image, Text, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';//this will navigate the app from screen to screen
import styles from './style';//styles for this screen.

const HomeScreen = () => {
    const navigation = useNavigation();
    //function takes to the create task screen
    const goCreateTask = () => {navigation.navigate('CreateTaskScreen')}
    //function takes to the view task screen
    const goViewTasks = () => {navigation.navigate('ViewTasks')}
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Task Manager</Text>
            <View style={styles.buttonContainer}>
                <Text style={styles.button} onPress={goCreateTask}>Create a new Task</Text>
                <Text style={styles.button} onPress={goViewTasks}>View Tasks</Text>
            </View>
        </View>
    )
}
export default HomeScreen
