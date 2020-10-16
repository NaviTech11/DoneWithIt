import React from 'react';
import { StyleSheet, Button, Alert, SafeAreaView, StatusBar, Platform } from 'react-native';

export default function App() {
  
  return (
    <SafeAreaView style={styles.container}>
      <Button 
        title="Click Me" 
        onPress={() => 
        Alert.prompt("My title", "My message", text => console.log(text))
        }
        color="orange"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
