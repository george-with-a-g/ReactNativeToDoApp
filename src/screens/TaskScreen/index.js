import { View, Image, Text, TouchableOpacity, Button, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';//this will navigate the app from screen to screen
import styles from './style';//styles for this screen.

const TaskScreen  = ({route}) => {
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Text style={styles.title}>{route.params.title}</Text>
        </View>
    )
}
export default TaskScreen
