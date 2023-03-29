import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Botao } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function App() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const logicaCalculadora = (value) => {
    if (value === '=') {
      try {
        const evalResult = eval(expression);
        setResult(evalResult.toString());
      } catch (error) {
        setResult('Invalid Expression');
      }
    } else if (value === 'C') {
      setExpression('');
      setResult('');
    } else if (value === 'DEL') {
        setExpression('');
    } else {
      setExpression(expression + value);
    }
  };


const buttons = [
  ['*','-','+', '/'],
  ['7', '8', '9'],
  ['4', '5', '6'],
  ['1', '2', '3'],
  ['.', '0', 'C', '='],
];


  return (
    <View style={styles.container}>
      <View style={{flex: 2, backgroundColor: 'gray', justifyContent: 'center', alignItems: 'flex-end', padding: 10, height: 100}}>
        <Text style={{ fontSize: 48, color: '#fff',}}>{expression}</Text>
      </View>
      <View style={{flex: 1, backgroundColor: 'black', justifyContent: 'center', alignItems: 'flex-end', padding: 10,}}>
        <Text style={{fontSize: 36, fontWeight: 'bold', color: '#fff',}}>{result}</Text>
      </View>
      <View style={{flex: 7, backgroundColor: 'black'}}>
        {buttons.map((row, index) => {
          return (
            <View key={index} style={styles.row}>
              {row.map((buttonValue) => {
                return (
                  <TouchableOpacity
                    key={buttonValue}
                    style={{flex: 1, justifyContent: 'center', alignItems: 'center', borderWidth: 0.5, borderColor: '#fff', color: '#fff'}}
                    onPress={() => logicaCalculadora(buttonValue)}>
                    <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#fff',}}>{buttonValue}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
  },
});