import stylesBody from './style';
import React from 'react';
import {  Text, View } from 'react-native';


export default function TextSecond() {
    return (
      <View style={stylesBody.footer}> 
      <Text style={stylesBody.titleBottom}>os principais jogos estão aqui</Text>
      <img style={stylesBody.image}></img>
      <Text style={stylesBody.textBottom}>
        A familia Nintendo Swicht é o 
      lar de jogos exclusivos da séries como
      Super Mario Smash Bros, The Legend of Zelda,
      MArio KArt e muito mais.</Text>
      </View>
      
    );
  }

  