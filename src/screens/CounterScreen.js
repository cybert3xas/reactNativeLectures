import React, {useReducer} from "react";
import {View, Text, StyleSheet, Button} from 'react-native';        

/*
State -  Is used to store data of the component, we never want to modify this value
directly. You want to make use of another function to change the value. YOU ALWAYS need 
to initialize the state.

counter is our piece of data changing
setCounter is the function that changes the state
useState() initializes the state with value of 0
*/
const COUNTER_VALUE = 1;
const reducer = (state, action) => {
    //state = {counter: number}
    //action = {type: 'increase' || 'decrease', payload: 1, -1}

    switch(action.type){
        case 'increase':
        case 'decrease':
            return {...state, counter: state.counter + action.payload}
        default:
            return state
    }
};
const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, {counter: 0});
    const {counter} = state;
    return(
        <View>
        <Button 
            title="Increase"
            onPress={() => {
                dispatch({type: 'increase', payload: COUNTER_VALUE});
            }}
        />
        <Button 
            title="Decrease"
            onPress={() => {
                dispatch({type: 'decrease', payload: -1*COUNTER_VALUE});
            }}
        />
            <Text>Current Count: {counter}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default CounterScreen;