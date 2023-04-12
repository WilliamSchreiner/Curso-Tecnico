import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import box1 from './textFirst';
import box2 from './textSecond';
import { useState } from 'react';

export default function App() {

const [textFirst,setTextFirst] = useState(box1)
const [textSecond,setTextSecond] = useState(box2)

  return (
    <View> 
    <ScrollView>
     
    
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
