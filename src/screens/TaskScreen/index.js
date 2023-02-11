import { View, Image, Text, TouchableOpacity, Button, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';//this will navigate the app from screen to screen
import { Checkbox } from 'react-native-paper';
import { useState } from 'react';
import styles from './style';//styles for this screen.

const TaskScreen  = ({route}) => {
    const navigation = useNavigation();
    const [checked, setChecked] = useState(route.params.complete);
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{route.params.title}</Text>
            <View style={styles.taskContainer}>
                <Text style={styles.description}>Description</Text>
                <Text>{route.params.description}</Text>
            </View>
            <View style={styles.checkBoxContainer}>
                <Checkbox
                    status={ checked ? 'checked' : 'unchecked' }
                    onPress={() => setChecked(!checked)}
                />
                { checked ? (
                    <Text>The task is complete</Text>
                ) : ( 
                    <Text>The task is incomplete</Text>
                )}
            </View>
        </View>
    )
}
export default TaskScreen
