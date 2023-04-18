import stylesBody from './style';
import React from 'react';
import {  Text, View, Image } from 'react-native';


export default function TextSecond() {
    return (
      <View style={stylesBody.footer}> 
      <Text style={stylesBody.titleBottom}>os principais jogos estão aqui</Text>
      <Image style={stylesBody.image} source={require('../assets/Zelda.jpg')}  />
      <Text style={stylesBody.textBottom}>
        A familia Nintendo Swicht é o 
      lar de jogos exclusivos da séries como
      Super Mario Smash Bros, The Legend of Zelda,
      MArio KArt e muito mais.</Text>
      </View>
      
    );
  }

  