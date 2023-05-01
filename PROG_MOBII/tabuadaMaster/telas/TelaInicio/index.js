import React, { useState } from "react";
import { View, Text, Button, TextInput, ImageBackground } from "react-native";
import { NavigationContainer } from '@react-navigation/native';

import { validarResposta, gerarNumero } from "./funcoes";

import estilo from './estilo';
import fundo from '../../assets/fundo.png';

const TelaInicio = (props) => {
  const [ primeiroNumero, setPrimeiroNumero ] = useState(1);
  const [ segundoNumero, setSegundoNumero ] = useState(1);
  const [ respostaUsuario, setRespostaUsuario ] = useState(0);
  
  const criarQuestao = () => {
    setPrimeiroNumero(gerarNumero());
    setSegundoNumero(gerarNumero());
    setRespostaUsuario("");
  }

  //Ordens para navegação
  const responder = () => {
    if ( validarResposta(primeiroNumero, segundoNumero, respostaUsuario) ) {
      props.navigation.navigate('RespostaCorreta');
    } else {
      props.navigation.navigate('RespostaErrada');
    }
    criarQuestao();
  }

  const abrirTelaTabuada = () => {
    props.navigation.navigate('Tabuada');
  }

  return (
    <ImageBackground source={fundo} style={estilo.imagemFundo}>
      <View style={estilo.tela}>
        <View style={estilo.boxPergunta}>
          <Text style={estilo.titulo}>
            Duvido você acertar!
          </Text>

          <View style={estilo.boxQuestao}>
            <Text style={estilo.texto}>            
              { primeiroNumero }
            </Text>

            <Text style={estilo.texto}>
              X
            </Text>

            <Text style={estilo.texto}>            
              { segundoNumero }
            </Text>

            <Text style={estilo.texto}>
              =
            </Text>

            <TextInput 
              textAlign="center"
              onChangeText={ setRespostaUsuario } 
              keyboardType="numeric" 
              value={respostaUsuario.toString()} 
              autoFocus={true}
              maxLength={3} 
              style = { estilo.input }/>
          </View>

          <View style={estilo.opcoes}>
            

            <View style={estilo.boxBotao}>
              <Button title="Responder" onPress={responder} color="#a0df52"/>
            </View>
          </View>

        </View>

        <View style={estilo.boxBotaoTabuada}>
          <Button title="Ver tabuada" onPress={abrirTelaTabuada} color="#1f4f66"/>
        </View>
      </View>
    </ImageBackground>
  );
}

export default TelaInicio;