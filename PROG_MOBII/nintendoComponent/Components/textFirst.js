import stylesBody from './style';
import React from 'react';
import {  Text, View, Image} from 'react-native';

 export default function TextFirst() {
    return (   
      <View style={stylesBody.header}> 
      <Image style={stylesBody.logo}  source={require('../assets/nintendo.jpg')}/>
      <Text style={stylesBody.textTop}>Nintendo Swicht</Text>
      </View>   
    );
  };

  
