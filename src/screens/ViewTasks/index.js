import { View, Image, Text, TouchableOpacity, Button, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';//this will navigate the app from screen to screen
import TaskComponent from '../../components/SingleTaskComponent';//importing the component for the tasks component
import { useState } from 'react';
import styles from './style';//styles for this screen.

const data = [
    { key: '1', title: 'First task', description: 'The first one', complete: true},
    { key: '2', title: 'Second task', description: 'The second one', complete: false},
    { key: '3', title: 'Third task', description: 'The third one that has a quite lengthy description.', complete: false},
]
const ViewTaskScreen  = () => {
    const navigation = useNavigation();

    const [ tasks, setTasks ] = useState(data);
    const [ showCompleteToggle, setShowCompleteToggle ] = useState('All');

    const goCreateTasks = () => {navigation.navigate('CreateTaskScreen')}
    const showAllTasks = () => {
        setTasks(data);
        setShowCompleteToggle('All');
    }
    const filterCompleteTasks = () => {
        const filteredList = data.filter((item) => item.complete );
        setTasks(filteredList);
        setShowCompleteToggle('Complete');
    }
    const filterInCompleteTasks = () => {
       const filteredListTwo = data.filter((item) => item.complete === false );
        setTasks(filteredListTwo);
        setShowCompleteToggle('Incomplete');
    }
    return(
        <View style={styles.container}>
            <Text style={styles.title}>All tasks</Text>
            <View style={styles.titleContainer}>
                <Text style={styles.subtitle}>Or</Text>
                <Text onPress={goCreateTasks} style={styles.subtitleHighlight}> create a new task.</Text>
            </View>
            <View style={styles.buttonWrapper}>
                { showCompleteToggle === 'All' ? (
                    <Text style={[styles.button, styles.button1]} onPress={showAllTasks}> All </Text>
                ) : ( 
                    <Text style={[styles.buttonFaded, styles.button1]} onPress={showAllTasks}> All </Text>
                )}

                { showCompleteToggle === 'Complete' ? (
                    <Text style={[styles.button, styles.button1]} onPress={filterCompleteTasks}> Complete </Text>
                ) : ( 
                    <Text style={[styles.buttonFaded, styles.button1]} onPress={filterCompleteTasks}> Complete </Text>
                )}

                { showCompleteToggle === 'Incomplete' ? (
                    <Text style={[styles.button, styles.button1]} onPress={filterInCompleteTasks}> Incomplete </Text>
                ) : ( 
                    <Text style={[styles.buttonFaded, styles.button1]} onPress={filterInCompleteTasks}> Incomplete </Text>
                )}
            </View>
            <FlatList 
                data={tasks}
                style={{ width: '95%' }}
                renderItem={ ({ item }) => <TaskComponent title={item.title} description={item.description} complete={item.complete} /> }
            />
        </View>
    )
}
export default ViewTaskScreen
