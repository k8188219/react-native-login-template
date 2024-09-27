import { Redirect, router } from "expo-router";
import { View, Text, Button, Dimensions } from "react-native";
import React, { useState, useEffect } from 'react';

const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen');

const DimensionText = () => {
  const [dimensions, setDimensions] = useState({
    window: windowDimensions,
    screen: screenDimensions,
  });

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      'change',
      ({ window, screen }) => {
        setDimensions({ window, screen });
      },
    );
    return () => subscription?.remove();
  });

  return (
    <>
      <Text style={{ paddingVertical: 10 }}>Window Dimensions</Text>
      {Object.entries(dimensions.window).map(([key, value]) => (
        <Text key={key}>
          {key} - {value.toFixed(2)}
        </Text>
      ))}
      <Text style={{ paddingVertical: 10 }}>Screen Dimensions</Text>
      {Object.entries(dimensions.screen).map(([key, value]) => (
        <Text key={key}>
          {key} - {value.toFixed(2)}
        </Text>
      ))}
    </>
  );
};

let i = 0;

export default function Index() {
  useEffect(() => {
    i++;
  }, []);
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <Text style={{ fontSize: 36 }}>index.tsx</Text>
      <Text style={{ fontSize: 36, color: 'red' }}>Mounted {i} times</Text>
      <Button title="navigate" onPress={() => { router.navigate("/greeting") }} />
      <DimensionText />
      {/* <Redirect href="/greeting"/> */}
    </View>
  );
}
