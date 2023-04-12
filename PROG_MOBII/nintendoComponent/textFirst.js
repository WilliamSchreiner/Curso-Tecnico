import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function box1() {


    return (
      <View style={styles.container}> 
      <ScrollView>
      <View>Logo</View>
      <Text>Title</Text>
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