/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    NativeModule,
    Alert,
    AppState
} from 'react-native';
import { createCalendarEvent } from './modules'


const onPress = () => {
    console.log("Pressed")
    createCalendarEvent('testName', 'testLocation');
};

// const handleAppStateChange = (val) => {
//     console.log(val?.test)
// }
 
// useEffect(() => {
//     AppState.addEventListener('EventReminder', (event) => { handleAppStateChange(event) });
//     return (() => {
//         AppState.removeEventListener('EventReminder');
//     })
// }, []);

const Home = () => {
    return (
        <View style={styles.baseText}>
            <Button
                title="Press me"
                onPress={() => onPress()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    baseText: {
        fontFamily: "Cochin"
    },
    blue: {
        color: 'blue'
    }
});

export default Home;
