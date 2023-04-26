import React from 'react';
import { Text, ImageBackground, View, Button } from 'react-native';

import trofeu from '../../assets/trofeu.jpg';
import estilo from './estilo';

const TelaRespostaCorreta = () => {
  const voltar = () => {
    alert('voltar');
  }

  return (
    <ImageBackground source={trofeu} style={estilo.fundo} resizeMode="contain">
      <Text style={estilo.texto}>Parabéns, você acertou!</Text>

      <View style={estilo.boxBotaoTabuada}>
        <Button title="Responder outro" onPress={voltar} color="#a0df52"/>
      </View>
    </ImageBackground>
  )
}

export default TelaRespostaCorreta;