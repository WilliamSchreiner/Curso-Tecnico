import stylesBody from './style';
import React from 'react';
import {  Text, View, Image } from 'react-native';


export default function TextSecond() {
    return (
      <View style={stylesBody.footer}> 
      <Text style={stylesBody.titleBottom}>os principais jogos estão aqui</Text>
      <Image style={stylesBody.image} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr1fTMbRaEF4-gdP9Fp0rwRTsdUjw3LsnrszkZf0PyGHqBSKfGWW4IJuGg5oy6fcuLY7Y&usqp=CAU' />
      <Text style={stylesBody.textBottom}>
        A familia Nintendo Swicht é o 
      lar de jogos exclusivos da séries como
      Super Mario Smash Bros, The Legend of Zelda,
      MArio KArt e muito mais.</Text>
      </View>
      
    );
  }

  