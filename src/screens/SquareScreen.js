import React, {useReducer} from "react";
import {View, Text, StyleSheet} from 'react-native';
import ColorCounter from "../components/ColorCounter";


/*
- The three pieces of state are very related, without one, the other two don't make much sense
- The is a percise way in which the values are updated 
With the two note above, we know we're able to make use of a reducer.

Hook - Adds additional functionality to a component
*/
const COLOR_INCREMENT = 25;
//action - how to to change state object.
const reducer = (state, action) => {
    //state - {red: number, green: number, blue: number}
    //action - {type: 'change_red' || 'change_green' || 'change_blue' , payload: 25, -55}

    switch(action.type){
        case 'change_red':
            return state.red + action.payload > 255 || state.red + action.payload < 0
            ? state 
            : {...state, red: state.red + action.payload};
        case 'change_green':
            return state.green + action.payload > 255 || state.green + action.payload < 0
            ? state 
            : {...state, green: state.green + action.payload};
        case 'change_blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0
            ? state 
            : {...state, blue: state.blue + action.payload};
        default:
            return state;
    }
};

const SquareScreen = () => {
    const [state, dispatch] = useReducer(reducer, {red:0, green: 0, blue: 0});
    const {red, green, blue} = state; //destructioring the object
    console.log(red);
    return(
        <View>
        <ColorCounter 
           onIncrease={() => dispatch({type: 'change_red', payload: COLOR_INCREMENT})}
           onDecrease={() => dispatch({type: 'change_red', payload: -1*COLOR_INCREMENT})}
           color="Red" 
        />

        <ColorCounter 
           onIncrease={() => dispatch({type: 'change_green', payload: COLOR_INCREMENT})}
           onDecrease={() => dispatch({type: 'change_green', payload: -1*COLOR_INCREMENT})}
           color="Green" 
         />

        <ColorCounter 
           onIncrease={() => dispatch({type: 'change_blue', payload: COLOR_INCREMENT})}
           onDecrease={() => dispatch({type : 'change_blue', payload: -1*COLOR_INCREMENT})}
           color="Blue"
        />

        <View style={{height: 150, width:150, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}/>

        
        </View>
    );
};

const style = StyleSheet.create({


});

export default SquareScreen;