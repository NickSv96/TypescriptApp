import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import Contador from './src/components/Contador/Contador';
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Taskflow</Text>
      <Text>Checkpiont 1: Estructura base</Text>
      <Contador/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#53c3d4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
