import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Botao } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function App() {

  const[firstNumber, setFirstNumber] = useState(0);
  const[secondNumber, setSecondNumber] = useState(0);
  const[sinal, setSinal] = useState("");
  const[stringCalculo, setStringCalculo] = useState("");

  function logicaCalculadora(n){
    if (sinal == ''){
        setFirstNumber(parsetInt(firstNumber.toString() + n.toString()));
        setStringCalculo(parsetInt(firstNumber.toString() + n.toString()));
    }
    if ((n =="/" || n == "*"|| n == "-"|| n == "+") && secondNumber ==0){
        setStringCalculo(firstNumber.toString() + n.toString());
        setSinal(n)
    }
    if (sinal !== ''){
        setSecondNumber(parsetInt(secondNumber.toString() + n.toString()));
        setStringCalculo(firstNumber+sinal+parsetInt(secondNumber.toString() + n.toString()));
    }
    if (n == "="){
        let resultado = 0;

        if (sinal == '+'){
            resultado= firstNumber+secondNumber
        }else if (sinal == '-'){
            resultado= firstNumber-secondNumber
        }else if (sinal == '*'){
            resultado= firstNumber*secondNumber
        }else if (sinal == '/'){
            resultado= firstNumber/secondNumber
        }
        setStringCalculo(resultado);
        setSinal(''),
        setFirstNumber(resultado),
        setSecondNumber(0)
    }
    
}



  var numeros = [];

  for(var i=0; i<=9; i++){
    numeros.push(i)
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View><Text>{stringCalculo}</Text></View>
      
      <TouchableOpacity style={{width: "25%",backGroundColor:'black',justifyContent: 'center', alignItems: 'center', height:'100%'}}> <Text style={{fontSize: 24, textAlign: 'center', color:'#fff'}}>+</Text></TouchableOpacity>
      <TouchableOpacity style={{width: "25%",backGroundColor:'black',justifyContent: 'center', alignItems: 'center', height:'100%'}}> <Text style={{fontSize: 24, textAlign: 'center', color:'#fff'}}>-</Text></TouchableOpacity>
      <TouchableOpacity style={{width: "25%",backGroundColor:'black',justifyContent: 'center', alignItems: 'center', height:'100%'}}> <Text style={{fontSize: 24, textAlign: 'center', color:'#fff'}}>*</Text></TouchableOpacity>
      <TouchableOpacity style={{width: "25%",backGroundColor:'black',justifyContent: 'center', alignItems: 'center', height:'100%'}}> <Text style={{fontSize: 24, textAlign: 'center', color:'#fff'}}>/</Text></TouchableOpacity>
       

<View style={{flexDirection: 'row', flexWrap: 'wrap', borderTopColor:'black', borderTopWidth:2, height:'66,8%'}}>
  {
    numeros.map(function(e){
      return (<Botao numero={e}></Botao>)
    })
  }
</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },
 
});
