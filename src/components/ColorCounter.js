import React from "react";
import {View, Text, StyleSheet, Button} from 'react-native';

/*
Description: This is the sub-component of the SquareScreen component. This 
component is in charge of CHANGING the state variables, while the SquareScreen is
in charge of READ/DISPLAYING the state variables. The parent component passes down 
a callback fucntion.
*/
const ColorCounter = ({ color, onIncrease, onDecrease }) => {
    return(
        <View>
            <Text>{color}</Text>
            <Button 
            onPress={() => onIncrease()}
            title={`Increase ${color}`}/>
            <Button 
            onPress={() => onDecrease()}
            title={`Decrease ${color}`}/>
        </View>
    );
};

const style = StyleSheet.create({


});

export default ColorCounter;