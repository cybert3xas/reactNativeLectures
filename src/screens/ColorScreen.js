import React, { useState } from "react";
import {View, StyleSheet, Button, FlatList} from 'react-native';

/*
useState starts with an empty list, this list is 
displayed by the FlatList. The list has strings that 
represent a rgb() random value.
*/
const ColorScreen = () => {
    const [colors, setColors] = useState([]);
    return(
        <View>
            <Button 
                title="Add a Color"
                onPress={() => {
                    setColors([...colors, randomRgb()])
                }}
            />
            
            <FlatList
                keyExtractor={(item) => item}
                data={colors}
                renderItem={({item}) => {
                    return <View style={{ height: 150, width: 150, backgroundColor: item}} />
                }}
            />
        </View>
    );
};

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}

const styles = StyleSheet.create({

});

export default ColorScreen;