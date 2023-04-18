import stylesBody from './style';
import React from 'react';
import {  Text, View, img } from 'react-native';

 export default function TextTree() {
    return (   
      <View style={stylesBody.bottom}> 
      <Text style={stylesBody.titleBottom}>Sobre o ator</Text>
      <Text style={stylesBody.subTitleBottom}>Sua vida</Text>
      <Text style={stylesBody.textBottom}>broto em algum lugar</Text>
      <Text style={stylesBody.subTitleBottom}>Inicio da carreira</Text>
      <Text style={stylesBody.textBottom}>Um filme ai</Text>
      <img style={stylesBody.filme}>filme</img>
      
      </View>   
    );
  };