import { StatusBar } from 'expo-status-bar';
import { useEffect, useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, TextInput } from 'react-native';

export default function App() {
  const [text, setText] = useState("")

  useEffect(() => {setText("Recado")}, []
  )

  function HandleButtom (){
   setText("Recado Suspeito");
  }

  return (
    <View style={styles.container}>
      <Text>Atras de Voce</Text>
      <TouchableOpacity style={styles.buttom} onPress={HandleButtom}>
        <Text style={{fontSize:16,  alignSelf: 'center'}}>Buttom</Text>
      </TouchableOpacity>
      <Text>{text}</Text>
      <StatusBar style="auto" />
      <TextInput></TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00000',
    alignItems: 'center',
    justifyContent: 'center',
  },


  buttom:{
    width:100, 
    height:30, 
    backgroundColor: "#f3f3f2",
    marginTop: 35,
    textAlign: 'center',
    borderRadius: 10,


  }
});
