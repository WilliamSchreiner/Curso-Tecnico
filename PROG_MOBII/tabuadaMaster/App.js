import React from "react";
import TelaInicio from './telas/TelaInicio';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//import tabuada
import TelaTabuada from "./telas/TelaTabuada";
//imports telas correta e errada
import TelaRespostaCorreta from "./telas/TelaRespostaCorreta";
import TelaRespostaErrada from "./telas/TelaRespostaErrada";

const Navegacao = createStackNavigator();

const App = () => (

//Rotas de navigation - name para o import
  <NavigationContainer >
    <Navegacao.Navigator screenOptions={{ headerShown: false }}>
      <Navegacao.Screen name="Inicio" component = { TelaInicio } />

      <Navegacao.Screen name="RespostaCorreta" component = { TelaRespostaCorreta } />
      <Navegacao.Screen name="RespostaErrada" component = { TelaRespostaErrada } />

      <Navegacao.Screen name="Tabuada" component = { TelaTabuada } />

    </Navegacao.Navigator>
  </NavigationContainer>
);

export default App;