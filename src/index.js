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
    NativeModules
} from 'react-native';
import { sendEventToNative, eventEmitter } from './modules'
// import { createCalendarEvent, eventEmitter } from './modules'

const eventFromNative = eventEmitter();

const onPress = () => {
    console.log("Pressed")
    sendEventToNative("hello")
    //createCalendarEvent('testName', 'testLocation');
};

const handleAppStateChange = (val) => {
    console.log(val)
}

const Home = () => {
    useEffect(() => {
        eventFromNative.addListener('EventCheckConnection', (event) => { handleAppStateChange(event) });

        // cleanup this component
        return () => {
            eventFromNative.removeListener('EventCheckConnection', (event) => { handleAppStateChange(event) });
        };
    }, []);


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
