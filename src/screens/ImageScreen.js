import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import ImageDetail from "../components/ImageDetail";
/*
Description: This is the parent component of ImageDetail, this scren is in charge of 
displaying the child component with it's correct props.

ImageScreen -> props: {imageSrc, title} passes down to image detail

NOTE: The props you give to the custom components can be named whatever you want.
*/
const ImageScreen = () => {
    return(
        <View>
            <ImageDetail 
                title="Forest" 
                imageSrc={require('../../assets/forest.jpg')}
                imageScore="9" />
            <ImageDetail 
                title="Beach" 
                imageSrc={require('../../assets/beach.jpg')}
                imageScore="10" />
            <ImageDetail 
                title="Mountain" 
                imageSrc={require('../../assets/mountain.jpg')}
                imageScore="8.5" />
        </View>
    );
};

const styles = StyleSheet.create({

});

export default ImageScreen;