import { View, Image, Text, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';//this will navigate the app from screen to screen
import styles from './style';//styles for this screen.
import { MaterialCommunityIcons } from '@expo/vector-icons';

const TaskComponent   = ({title, complete, description}) => {
    const navigation = useNavigation();

    const goViewTask = () => {navigation.navigate('TaskScreen', {
        title: title,
        description: description,
        complete: complete
    })}
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description} numberOfLines={2}>{description}</Text>
            <MaterialCommunityIcons onPress={goViewTask} style={styles.icon} name="arrow-top-right-bold-box-outline" size={24} color="black" />
        </View>
    )
}
export default TaskComponent
