import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Contador from './src/components/Contador/Contador';
export default function App() {
  return (
    <View style={styles.container}>
      <Contador/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
