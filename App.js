import React from 'react';
import { StyleSheet, Button, SafeAreaView } from 'react-native';

export default function App() {
  
  return (
    <SafeAreaView style={styles.container}>
      <Button 
        title="Click Me" 
        onPress={() => alert("Button Tapped")}
        color="orange"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: "center",
  },
});
