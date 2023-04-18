import stylesBody from './style';
import React from 'react';
import {  Text, View, Image } from 'react-native';


export default function TextSecond() {
    return (
      <View style={stylesBody.meio}> 
      <Image style={stylesBody.image} source={require('../assets/rock.png')}/>
      <Text style={stylesBody.nome}>The Rock</Text>
      <Text style={stylesBody.textMeio}>apenas a rocha</Text>
      </View>
      
    );
  }

  