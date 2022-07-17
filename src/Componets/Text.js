import { View, Text as RNText, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { presets } from './Text.preset'

export default function Text({children, preset='default', style}) {
    const textStyleSheet = StyleSheet.compose(presets[preset], style)
  return (
    <SafeAreaView>
      <RNText style={textStyleSheet}>{children}</RNText>
    </SafeAreaView>
  )
}