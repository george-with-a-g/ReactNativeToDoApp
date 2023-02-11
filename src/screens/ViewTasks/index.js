import { View, Image, Text, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';//this will navigate the app from screen to screen
import styles from './style';//styles for this screen.

const ViewTaskScreen  = () => {
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <Text style={styles.title}>View Task Screen</Text>
        </View>
    )
}
export default ViewTaskScreen
