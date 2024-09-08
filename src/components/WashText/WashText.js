import { Text, StyleSheet } from 'react-native'
import React from 'react'
import { presets } from './TextPreset';

export default function WashText({title, preset='default', customStyle, numberOfLines = 1} ) {

  const TextStyle = StyleSheet.compose(presets[preset], customStyle)

  return (
      <Text numberOfLines={numberOfLines} style={TextStyle}>{title}</Text>
  );
}