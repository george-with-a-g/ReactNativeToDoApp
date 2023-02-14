# TO DO APPLICATION
---
The Project Structure has 5 screens namely:
* Create Task Screen. - for creating tasks,
* Home Screen. - The home page.
* Map Screen. - For viewing the location a task was made at or ended at.
* Task Screen. - For viewing and editing individual tasks.
* View Task Screen. - To list out all possible tasks.
---
A reusable component used is the SingleTaskComponent that's used in the View Task Screen.
---
The libraries used in the project are:
* Navigation libraries.
```
npm install @react-navigation/native
expo install react-native-screens react-native-safe-area-context
npm install @react-navigation/native-stack
npm install @react-navigation/material-bottom-tabs react-native-paper react-native-vector-icons
npm install @react-navigation/bottom-tabs
```
* Libraries for GEOLOCATION and mapping.
```
npx expo install react-native-maps
npx expo install expo-location
```
* Libraries for storage.
```
npm i @react-native-async-storage/async-storage
```
* And a styling library
```
expo install expo-constants
```
---
The project also makes use of Contexts for the tasks and location states.
This helps in allowing those states to be passed through to all screens.


