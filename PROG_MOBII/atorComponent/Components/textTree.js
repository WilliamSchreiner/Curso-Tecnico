import stylesBody from './style';
import React from 'react';
import {  Text, View, Image } from 'react-native';

 export default function TextTree() {
    return (   
      <View style={stylesBody.bottom}> 
      <Text style={stylesBody.titleBottom}>Sobre o ator</Text>
      <Text style={stylesBody.subTitleBottom}>Sua vida</Text>
      <Text style={stylesBody.textBottom}>Nasceu pela erosao dos sete mares e terriveis ventos do norte, transforamdo no corpo que é hoje.</Text>
      <Text style={stylesBody.subTitleBottom}>Inicio da carreira</Text>
      <Text style={stylesBody.textBottom}>Um filme ai</Text>
      <Image style={stylesBody.filme} source={require('../assets/filme.jpg')}/>
      
      </View>   
    );
  };