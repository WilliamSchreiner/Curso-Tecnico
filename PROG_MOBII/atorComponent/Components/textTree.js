importcreate stylesBody from './style';
import React from 'react';
import {  Text, View, img } from 'react-native';

 export default function TextTree() {
    return (   
      <View style={styles.bottom}> 
      <Text style={styles.titleBottom}>Sobre o ator</Text>
      <Text style={styles.subTitleBottom}>Sua vida</Text>
      <Text style={styles.textBottom}>broto em algum lugar</Text>
      <Text style={styles.subTitleBottom}>Inicio da carreira</Text>
      <Text style={styles.textBottom}>Um filme ai</Text>
      <img style={styles.filme}>filme</img>
      
      </View>   
    );
  };