import { View, Image, Text, TouchableOpacity, Button, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';//this will navigate the app from screen to screen
import TaskComponent from '../../components/SingleTaskComponent';//importing the component for the tasks component
import styles from './style';//styles for this screen.

const data = [
    { key: '1', title: 'First task', description: 'The first one'},
    { key: '2', title: 'Second task', description: 'The second one'},
    { key: '3', title: 'Third task', description: 'The third one that has a quite lengthy description.The third one that has a quite lengthy description.The third one that has a quite lengthy description.'},
]
const ViewTaskScreen  = () => {
    const navigation = useNavigation();

    const goCreateTasks = () => {navigation.navigate('CreateTaskScreen')}
    return(
        <View style={styles.container}>
            <Text style={styles.title}>All tasks</Text>
            <View style={styles.titleContainer}>
                <Text style={styles.subtitle}>Or</Text>
                <Text onPress={goCreateTasks} style={styles.subtitleHighlight}> create a new task.</Text>
            </View>
            <View style={styles.buttonWrapper}>
                <Text style={[styles.button, styles.button1]}> Completed tasks </Text>
                <Text style={[styles.button, styles.button2]}> Incomepleted tasks </Text>
            </View>
            <FlatList 
                data={data}
                style={{ width: '95%' }}
                renderItem={ ({ item }) => <TaskComponent title={item.title} description={item.description}/> }
            />
        </View>
    )
}
export default ViewTaskScreen
