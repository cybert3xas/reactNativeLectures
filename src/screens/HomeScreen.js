import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity} from "react-native";

/*
TouchableOpacity allows you to wrap any component inside it. This is great for clicking on 
images, texts, etc. It's the proper way to make users clisk on the screen, the button 
component is only used for a 'hot fix'.

*/
const HomeScreen = ({navigation}) => {
  return(
  <View>
    <Text style={styles.text}>HomeScreen</Text>
    <Button 
      title="Go to Components Screen" 
      onPress={() => navigation.navigate('Components')}
    />
    <Button 
      title="Go to List Screen" 
      onPress={() => navigation.navigate('List')}
    />
    
    {/* <TouchableOpacity onPress={() => console.log("List Screen")}>
      <Text>List Screen</Text>
    </TouchableOpacity> */}
  </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
