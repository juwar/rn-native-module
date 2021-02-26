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
} from 'react-native';
import { createCalendarEvent, eventEmitter } from './modules'

const eventFromNative = eventEmitter();

const onPress = () => {
    console.log("Pressed")
    createCalendarEvent('testName', 'testLocation');
};

const handleAppStateChange = (val) => {
    const obj = JSON.parse(val)
    console.log(obj.name)
}


const Home = () => {

    useEffect(() => {
        eventFromNative.addListener('Test', (event) => { handleAppStateChange(event) });

        // cleanup this component
        return () => {
            eventFromNative.removeListener('Test', (event) => { handleAppStateChange(event) });
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
