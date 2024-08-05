import React from "react";
import {View, Text, StyleSheet, FlatList} from 'react-native';

/*
FlatList Element: Turns an array into a list of elements. 
- Always needs a prop of data where the data will be gathered from 
- Render item function that turns each item from list into an elemnt

NOTE: item is destructuring the arrray.
- keyExtractor is the best practice if you're working with unique elements. If not
make sure to add a unique key to the object.
*/
const ListScreen = () => {
    const friends = [
        {name: 'Friend #1', age: '24'},
        {name: 'Friend #2', age: '25'},
        {name: 'Friend #3', age: '26'},
        {name: 'Friend #4', age: '27'},
        {name: 'Friend #5', age: '28'},
        {name: 'Friend #6', age: '29'}
    ];

    return(
        <View>
            <FlatList 
                keyExtractor={(friend) => friend.name}
                showsVerticalScrollIndicator={false}
                data={friends} 
                renderItem={({item}) => {
                    return <Text style={styles.textStyle}>{item.name} - Age: {item.age}</Text>
                }} 

            />
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle:{
        marginVertical: 65
    }
});

export default ListScreen;