import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import React, { useState, useEffect } from 'react';

export default function Botao(props){

    <View style={            
    <Text style={{backgroundColor:"black", borderColor: '#fff', width:'33%', borderWidth:1 }}>{props.numeros}</Text>
}>
        <TouchableOpacity onPress={()=>props.logicaCalculadora()} 
        style={{width:'100%', height:'100%', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{textAlign: 'center', fontSize:24, color:"#fff"}}>{props.numeros}</Text>
        </TouchableOpacity>
    </View>
}