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
          }}>
         
          <View style={{
            backgroundColor: "dodgerblue",
            // flexBasis: 100, // map to width or height
            // flexGrow: 1, //fill avalable space
            flex: -1, //negative numbers in flex. same as flexShrink
            width: 400,
            height: 100,
            
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

          
        </View>
    
  );
}
