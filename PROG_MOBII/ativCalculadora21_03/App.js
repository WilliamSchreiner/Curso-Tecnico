import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { useState, useEffect } from 'react';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.flex}>
<TouchableOpacity style={styles.BoxOperanc}> + </TouchableOpacity>
      <TouchableOpacity style={styles.BoxOperanc}> - </TouchableOpacity>
      <TouchableOpacity style={styles.BoxOperanc}> / </TouchableOpacity>
      <TouchableOpacity style={styles.BoxOperanc}> x </TouchableOpacity>

      <TouchableOpacity style={styles.Box}> 0 </TouchableOpacity>
      <TouchableOpacity style={styles.Box}> 1 </TouchableOpacity>
      <TouchableOpacity style={styles.Box}> 2 </TouchableOpacity>
      <TouchableOpacity style={styles.Box}> 3 </TouchableOpacity>
      <TouchableOpacity style={styles.Box}> 4 </TouchableOpacity>
      <TouchableOpacity style={styles.Box}> 5 </TouchableOpacity>
      <TouchableOpacity style={styles.Box}> 6 </TouchableOpacity>
      <TouchableOpacity style={styles.Box}> 7 </TouchableOpacity>
      <TouchableOpacity style={styles.Box}> 8 </TouchableOpacity>
      <TouchableOpacity style={styles.Box}> 9 </TouchableOpacity>
      <TouchableOpacity style={styles.Box}> = </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: 'black',
    alignItems: 'center',
  },
  flex: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: '100%'
  },
  Box: {
    width: 50,
    height: 50,
    border: 'solid',
    borderColor: '#fff',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    backgroundColor: 'black',
    color: '#fff',
    fontSize: 28,
    paddingLeft: 16,
    paddingTop: 8,
    
  },
  BoxOperanc: {
    width: 50,
    height: 50,
    color: '#fff',
    fontSize: 24,
    marginRight: 8,
    marginBottom: 15
  }
});
