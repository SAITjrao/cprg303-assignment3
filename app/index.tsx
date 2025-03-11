import { StyleSheet, Text, View } from 'react-native';
import ApiCall from '../components/apiCall';

export default function App() {
  return (
    <View style={styles.container}>
        <ApiCall />
    </View>  
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

