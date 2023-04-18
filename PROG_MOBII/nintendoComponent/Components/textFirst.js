import stylesBody from './style';
import React from 'react';
import {  Text, View, img } from 'react-native';

 export default function TextFirst() {
    return (   
      <View style={stylesBody.header}> 
      <img style={stylesBody.logo}>Logo</img>
      <Text style={stylesBody.textTop}>Nintendo Swicht</Text>
      </View>   
    );
  };

  
