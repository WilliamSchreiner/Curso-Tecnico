import stylesBody from './style';
import React from 'react';
import {  Text, View } from 'react-native';


export default function TextSecond() {
    return (
      <View style={styles.meio}> 
      <img style={styles.image}></img>
      <Text style={styles.nome}>The Rock</Text>
      <Text style={styles.textMeio}>apenas a rocha</Text>
      </View>
      
    );
  }

  