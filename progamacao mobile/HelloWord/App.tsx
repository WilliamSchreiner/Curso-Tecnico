import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useFonts, Basic_400Regular } from '@expo-google-fonts/basic'
import { StyleSheet, Text, View, Button, Image} from 'react-native';

export default function App() {

  let [fontsLoaded] = useFonts ({
    Basic_400Regular,
  });
  
  return (
    <View style={styles.container}>
<View style={styles.logo}> 
</View>
<View style={styles.butoon}>
  <text style={styles.name}>UserName</text>
</View>
<View style={styles.butoonPass}>
  <text style={styles.pass}>Password</text>
</View>
<View style={styles.butoonLogin}>
  <text style={styles.login}>Login Now</text>
</View>

<View style={styles.textLink}>
  <View style={styles.checkbox}></View>
  <text style={styles.textRemember}>Remember me</text>
  <text style={styles.textForgot}>Forgot password?</text>
</View>

<View style={styles.textRegister}> <text>Not a member?</text> </View>

<View style={styles.buttonAccont}> <text style={styles.account}>Create Account</text> </View>
    </View>
  );
}

const styles = StyleSheet.create({
 container:{
height: 896,
backgroundColor: '#63cbc4',

 },
 login:{ color:'#fff',fontFamily: 'Basic_400Regular'},
 pass:{ color:'#008fb7',fontFamily: 'Basic_400Regular'},
 name:{ color:'#008fb7',fontFamily: 'Basic_400Regular'},
 logo:{
backgroundColor: '#fff',
borderRadius: 120,
height: 200,
width: 200,
alignSelf: 'center',
marginTop: 120

 },
 butoon:{
 height: 50,
 width: 290,
 backgroundColor: '#30f1fa',
 marginTop: 55,
 marginBottom: 0,
 paddingTop: 15,
 paddingBottom: 20,
 borderRadius: 25,

 alignSelf: 'center',
 textAlign: 'center',
 Color: '#008fb7'

 },
 butoonPass:{
  height: 50,
  width: 290,
  backgroundColor: '#30f1fa',
  marginTop: 20,
  marginBottom: 0,
  paddingTop: 15,
  paddingBottom: 20,
  borderRadius: 25,
 
  alignSelf: 'center',
  textAlign: 'center',
  Color: '#008fb7'
 
  },
 butoonLogin:{
  height: 50,
  width: 330,
  backgroundColor: '#f8b4a9',
  marginTop: 25,
  marginBottom: 20,
  paddingTop: 15,
  paddingBottom: 20,
  borderRadius: 25,
 
  alignSelf: 'center',
  textAlign: 'center',
  Color: '#fff'
 
  },
 checkbox:{
backgroundColor: '#63cbc4',
height: 15,
width: 15,
border: 'solid',
borderWidth: 0.2,
borderColor: '#fff',
borderRadius: 2,
marginLeft: 50

 },
 textLink:{},
 textRemember:{
marginLeft: 67,
marginTop: -17,
color: '#fff',
fontFamily: 'Basic_400Regular'
 },
 textForgot:{
alignSelf: 'auto',
marginRight: 30,
marginLeft: 'auto',
marginTop: -19,
color: '#fff',

textDecorationLine: 'underline',
fontFamily: 'Basic_400Regular'
 },
 textRegister:{
marginTop: 110,
alignSelf: 'center',
color: '#fff',
fontFamily: 'Basic_400Regular'
 },
 buttonAccont:{
  height: 25,
  width: 130,
  backgroundColor: '#63cbc4',
  marginTop: 10,
  marginBottom: 20,
  border: 'solid',
  borderColor: '#fff',
  borderRadius: 30,


  alignSelf: 'center',
 textAlign: 'center'
 },
 account:{color:'#fff',fontFamily: 'Basic_400Regular'}
});