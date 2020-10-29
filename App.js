import React, { useEffect } from "react";
import * as ImagePicker from 'expo-image-picker';

import Screen from "./app/components/Screen"

export default function App() {
  //Getting users permision
  //componentDidMount => for Class components
  //useEffect hook for functions
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync()
    if(!granted) alert('Youneed to enable permission to access the library')
  }

  useEffect(() => {
    requestPermission(); 
  }, [])

  return <Screen></Screen>
}
