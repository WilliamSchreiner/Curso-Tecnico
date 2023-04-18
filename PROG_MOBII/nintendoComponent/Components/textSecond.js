import {stylesBody} from './style';
import React from 'react';
import {  Text, View } from 'react-native';


export default function TextSecond() {
    return (
      <View style={styles.footer}> 
      <Text style={styles.titleBottom}>os principais jogos estão aqui</Text>
      <img style={styles.image}></img>
      <Text style={styles.textBottom}>A familia Nintendo Swicht é o 
      lar de jogos exclusivos da séries como
      Super Mario Smash Bros, The Legend of Zelda,
      MArio KArt e muito mais.</Text>
      </View>
      
    );
  }

  