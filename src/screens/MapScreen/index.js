import { View, Image, Text, TouchableOpacity, Button, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';//this will navigate the app from screen to screen
import MapView, {Marker} from 'react-native-maps';
import styles from './style';//styles for this screen.

const MapScreen  = () => {
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 13.406,
                    longitude: 123.3753,
                    latitudeDelta: 0.005,

                }}
            >
                <Marker coordinate={{ latitude: 13.406, longitude: 123.3753}}></Marker>
            </MapView>
        </View>
    )
}
export default MapScreen
