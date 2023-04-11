import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import {Audio} from 'expo-av';


export default function Player(props){

  // dar play
    const handPlay = async () => {
        let curFile = props.musicas[props.audioIndex].file;
        let newMusicas= props.musicas.filter((val, k) => {
          if(props.audioIndex == k){
          // tocar a musica
            props.musicas[k].playing = true;
            curFile = props.musicas[k]= false;

          }else{
            props.musicas[k].playing = false;
            
          } return props.musicas[k];
    
        })
    
        try{
        if(props.audio != null){
          props.setPlaying(true)
          props.setMusicas(newMusicas);
          await props.audio.playAsync();
        } }catch(erro){

            let curAudio = new Audio.Sound();
            try{
                await curAudio.loadAsync(curFile);
                await curAudio.playAsync();
            }catch(erro){}
        }
    
        props.setAudio(newAudio);
        props.setMusicas(newMusicas);
        props.setPlaying(true)
      }

      // dar pause
      const handPause = async() =>{
        if(props.audio != null){
            props.audio.pauseAsync();
            props.setPlaying(false)
          }
      }

      //proxima musica
      const handNext = async ()=>{
     
        let newIndex = props.audioIndex + 1;
        if(newIndex >= props.musicas.lenght ){
          newIndex = 0;
        }
        props.setarAudioIndex(newIndex);
        
        let curFile = props.musicas[newIndex].file;

      //Atualizar interface do App
        let newMusics=  props.musicas.filter((val, k)=>{
          if(newIndex== k){       
            props.musicas[k].playing = true;
            curFile = props.musicas[k].file;
            
          }else{
            props.musicas[k].playing = false;      
          }

          return props.musicas[k];

        })

        //Reproduzir Audio em questão
            if(props.audio != null){
              props.audio.unloadAsync();
            }
            let curAudio = new Audio.Sound();
            try{
              await curAudio.loadAsync(curFile);
              await curAudio.playAsync();
          }catch(error){}

          props.setarAudio(curAudio);
          props.setarMusicas(newMusics);
          props.setPlaying(true);
  }

      //voltar
      const handBack = async ()=>{
    let newIndex = props.audioIndex -1;
      if(newIndex <0){ newIndex= props.musicas.lenght -1;}
        props.setarAudioIndex(newIndex);

    let curFile = props.musicas[newIndex].file;
    let newMusicas= props.musicas.filter((val, k) => {
      if(newIndex == k){
        props.musicas[k].playing = true;
        curFile = props.musicas[k].file;
      }else{
        props.musicas[k].playing = false;
      } return props.musicas[k];

    })

    if(props.audio != null){
      props.audio.unloadAsync();
    }

    let curAudio = new Audio.Sound();

    try{

      await curAudio.loadAsync(curFile);
      await curAudio.playAsync();

    }catch(erro){}

    props.setAudio(newAudio);
    props.setMusicas(newMusicas);
    props.setPlaying(true)
      }

return(
    <View style={styles.player}>
        <View >
              <TouchableOpacity  onPress={()=>handBack()} style={{marginRight: 20, marginLeft:20}}>
               <AntDesign name='banckward' size={35} color='#fff' />
              </TouchableOpacity>

{ (!props.playing)?
<TouchableOpacity onPress={()=>handPlay()} style={{marginRight: 20, marginLeft:20}}>
    <AntDesign name='playcircleo' size={35} color='#fff' />
</TouchableOpacity>:

<TouchableOpacity onPress={()=>handPause()} style={{marginRight: 20, marginLeft:20}}>
    <AntDesign name='pausecircleo' size={35} color='#fff' />
</TouchableOpacity>
    }
              <TouchableOpacity onPress={()=>handNext()} style={{marginRight:20, marginLeft:20}}>
               <AntDesign name='forward' size={35} color="#fff"></AntDesign>
              </TouchableOpacity>
        </View>
    </View>
    
)
}
const styles = StyleSheet.create({
    player: {
        backgroundColor: "#1E90FF",
        width: '100%',
        height: 100,
        padding: 20,
        position: 'absolute',
        bottom:0,
        left:0,
        zIndex:999,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    }
  });
  