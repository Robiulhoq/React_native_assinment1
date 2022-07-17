import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Platform, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import Home from './src/Screen/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Ditails from './src/Screen/Ditails';
export default function App() {
  const [loading] = useFonts({
    'Sfprodisplay': require('./assets/fonts/SFProDisplay-Regular.ttf'),
    'Sfprotext': require('./assets/fonts/SFProText-Regular.ttf'),
  });
  if (!loading) return null;
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Ditails" component={Ditails} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 38 : 0,
  },
});
