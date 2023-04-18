import stylesBody from './style';
import React from 'react';
import {  Text, View } from 'react-native';


export default function TextSecond() {
    return (
      <View style={stylesBody.meio}> 
      <img style={stylesBody.image}></img>
      <Text style={stylesBody.nome}>The Rock</Text>
      <Text style={stylesBody.textMeio}>apenas a rocha</Text>
      </View>
      
    );
  }

  