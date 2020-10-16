import React from 'react';
import { View} from 'react-native';


export default function App() {
  
  return (
   
        <View style={{ 
          backgroundColor: "#fff",
          flex: 1,
          flexDirection: "row",  //axis (horizontal)
          justifyContent: "center", //alig items accross the main axis
          alignItems: "center", //align axis accross secondary axis
          alignContent: "center", //align all the content - only works if we have wrapping enabled
          flexWrap: 'wrap'
          }}>
         
          <View style={{
            backgroundColor: "dodgerblue",
            width: 100,
            height: 300,
            
          }}/>

          <View style={{
            backgroundColor: "gold",
            width: 100,
            height: 100,
          }}/>

          <View style={{
            backgroundColor: "tomato",
            width: 100,
            height: 100,
          }}/>

          <View style={{
            backgroundColor: "gray",
            width: 100,
            height: 100,
          }}/>

          <View style={{
            backgroundColor: "greenyellow",
            width: 100,
            height: 100,
          }}/>

        </View>
    
  );
}
