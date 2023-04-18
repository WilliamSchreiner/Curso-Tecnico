import {stylesBody} from './style';
import React from 'react';
import {  Text, View, img } from 'react-native';

 export default function TextFirst() {
    return (   
      <View style={styles.header}> 
      <img style={styles.logo}>Logo</img>
      <Text style={styles.textTop}>Nintendo Swicht</Text>
      </View>   
    );
  };

  
