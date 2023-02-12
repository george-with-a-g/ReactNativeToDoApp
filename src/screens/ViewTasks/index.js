import { View, Image, Text, TouchableOpacity, Button, FlatList } from 'react-native';
import TaskComponent from '../../components/SingleTaskComponent';//importing the component for the tasks component
import { useNavigation } from '@react-navigation/native';//this will navigate the app from screen to screen
import { useAuthContext } from '../../contexts'; 
import { useState, useEffect } from 'react';
import styles from './style';//styles for this screen.

const data = [
    { key: '1', title: 'First task', description: 'The first one', complete: true, locationInfo: null, locationInfoClose: null},
    { key: '2', title: 'Second task', description: 'The second one', complete: false, locationInfo: null, locationInfoClose: null},
    { key: '3', title: 'Third task', description: 'The third one that has a quite lengthy description.', complete: false, locationInfo: null, locationInfoClose: null},
]
const ViewTaskScreen  = () => {
    const navigation = useNavigation();
    const { setUserLocation, allTasks, setAllTasks, retrieveTaskData, saveTaskData } = useAuthContext();

    const [ tasks, setTasks ] = useState(allTasks);
    const [ showCompleteToggle, setShowCompleteToggle ] = useState('All');//state to show if user wants to see all tasks or filter to complete/incomplete.

    const goCreateTasks = () => {navigation.navigate('CreateTaskScreen')}
    //the function below will filter the list to show all tasks.
    const showAllTasks = () => {
        setTasks(allTasks);
        setShowCompleteToggle('All');
    }
    //the function below will filter the list to show only tasks that are complete.
    const filterCompleteTasks = () => {
        if (allTasks){
            const filteredList = allTasks.filter((item) => item.complete );
            setTasks(filteredList);
            setShowCompleteToggle('Complete');
        }else{
            setShowCompleteToggle('Complete');
        }
    }
    //the function below will filter the list to show only tasks that are incomplete.
    const filterInCompleteTasks = () => {
        if (allTasks){
            const filteredListTwo = allTasks.filter((item) => item.complete === false );
            setTasks(filteredListTwo);
            setShowCompleteToggle('Incomplete');
        }else{
            setShowCompleteToggle('Incomplete');
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            saveTaskData(allTasks, setAllTasks);
            const freshTaskList =[...allTasks];
            setTasks(freshTaskList);
        }, 1000);
        return () => clearInterval(interval);

    }, []);

    return(
        <View style={styles.container}>
            <Text style={styles.title}>All {allTasks.length} tasks</Text>
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
                renderItem={ ({ item }) => <TaskComponent id={item.key} title={item.title} description={item.description} complete={item.complete} locationInfo={item.locationInfo} locationInfoClose={item.locationInfoClose} /> }
            />
        </View>
    )
}
export default ViewTaskScreen
