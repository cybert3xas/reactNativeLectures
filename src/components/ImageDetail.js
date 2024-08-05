import React from "react";
import {View, Text, StyleSheet, Image} from 'react-native';

/*
Description: This is the child component of ImageScreen, this component is in charge of 
creating the dimenssions of a picture and the description. 
*/
const ImageDetail = (props) => {
    return(
        <View>
            <Image source={props.imageSrc}/>
            <Text>{props.title}</Text>
            <Text>Image score: {props.imageScore}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default ImageDetail;