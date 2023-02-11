import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {Foundation, FontAwesome5, MaterialIcons} from '@expo/vector-icons'
import CreateTaskScreen from '../screens/CreateTaskScreen';
import HomeScreen from '../screens/HomeScreen';
import ViewTaskScreen from '../screens/ViewTasks';

const Stack = createNativeStackNavigator();
const RootNavigation = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
            <Stack.Screen name="CreateTaskScreen" component={CreateTaskScreen} options={{headerShown:false}}/>
            <Stack.Screen name="ViewTasks" component={ViewTaskScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
    )
};
export default RootNavigation;
