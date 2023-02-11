import { View, TextInput, Image, Text, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';//this will navigate the app from screen to screen
import { useState } from 'react';//manage state for TextInputs
import { Checkbox } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './style';//styles for this screen.

const CreateTaskScreen = () => {
    const navigation = useNavigation();
    const [ value, setValue ] = useState('');//this will be used for getting the state of the task name
    const [checked, setChecked] = useState(false);//checkbox to track location.

    const goViewTasks = () => {navigation.navigate('ViewTasks')}
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Create a task</Text>
            <View style={styles.titleContainer}>
                <Text style={styles.subtitle}>Or</Text>
                <Text onPress={goViewTasks} style={styles.subtitleHighlight}> view your existing tasks.</Text>
            </View>
            
            <View style={styles.formContainer}>
                <TextInput style={styles.formInput} placeholder="Task title" value={value} onChangeText={text => setValue(text)} />
                <TextInput style={styles.formBottomInput} placeholder="Task description" value={value} onChangeText={text => setValue(text)} />
            </View>

            <View style={styles.checkBoxContainer}>
                <Checkbox
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => setChecked(!checked)}
                />
                <Text style={styles.subtitle}>Track location</Text>
            </View>

            <TouchableOpacity style={styles.button}>
                <MaterialIcons name="note-add" size={16} color="white" />
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}
export default CreateTaskScreen
