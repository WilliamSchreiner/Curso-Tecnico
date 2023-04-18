import stylesBody from './style';
import React from 'react';
import {  Text, View, Image} from 'react-native';

 export default function TextFirst() {
    return (   
      <View style={stylesBody.header}> 
      <Image style={stylesBody.logo} src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_2.0/c_scale,w_400/ncom/en_US/switch/site-design-update/oled-model-promo" />
      <Text style={stylesBody.textTop}>Nintendo Swicht</Text>
      </View>   
    );
  };

  
