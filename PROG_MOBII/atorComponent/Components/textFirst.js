import stylesBody from './style';
import React from 'react';
import {  Text, View,} from 'react-native';

 export default function TextFirst() {
    return (   
      <View style={stylesBody.header}> 
      <Text style={stylesBody.title}>Ator famoso</Text>
      </View>   
    );
  };

  
