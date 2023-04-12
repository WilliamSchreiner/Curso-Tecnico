import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function box2() {


    return (
      <View style={styles.container}> 
      <ScrollView>
      <Text>title</Text>
      <img></img>
      <Text>Texto</Text>
      </ScrollView>
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