import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {
    const myName = "YOUR NAME";

    return(
        <View>
            <Text style={styles.textStyle2}>Getting started with React Native!</Text>
            <Text style={styles.textStyle}>My name is {myName}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20
    },
    textStyle2: {
        fontSize: 45
    }
});

export default ComponentsScreen;