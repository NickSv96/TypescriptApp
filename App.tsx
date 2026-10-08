import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';
export default function App() {
  return (
    <View>
      <ProfileScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  
});
