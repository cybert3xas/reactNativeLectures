import React, {useState} from "react";
import {View, Text, StyleSheet, Button} from 'react-native';        

/*
State -  Is used to store data of the component, we never want to modify this value
directly. You want to make use of another function to change the value. YOU ALWAYS need 
to initialize the state.

counter is our piece of data changing
setCounter is the function that changes the state
useState() initializes the state with value of 0
*/
const CounterScreen = () => {
    const [counter, setCounter] = useState(0);

    return(
        <View>
        <Button 
            title="Increase"
            onPress={() => {
                setCounter(counter+1);
            }}
        />
        <Button 
            title="Decrease"
            onPress={() => {
                setCounter(counter-1);
            }}
        />
            <Text>Current Count: {counter}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default CounterScreen;