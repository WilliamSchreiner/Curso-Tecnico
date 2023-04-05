import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';

export default function Player(props){

    const chargeMusic = async (id) => {
        let curFile = props.musicas[props.audioIndex].file;
        let newMusicas= props.musicas.filter((val, k) => {
          if(props.audioIndex == k){
          // tocar a musica
            props.musicas[id].playing = true;
            curFile = props.musicas[k]= false;

          }else{
            props.musicas[id].playing = false;
            
          } return musicas[k];
    
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

      const handPause = async() =>{
        if(props.audio != null){
            props.audio.pauseAsync();
            props.setPlaying(false)
          }
      }

return(
    <View style={styles.player}>
        <View >
              <TouchableOpacity style={{marginRight: 20, marginLeft:20}}>
               <AntDesign name='banckward' size={35} color='#fff' />
              </TouchableOpacity>
{ (!props.playing)?
<TouchableOpacity onPress={()=>handPlay()} style={{marginRight: 20, marginLeft:20}}>
    <AntDesign name='playcircleo' size={35} color='#fff' />
</TouchableOpacity>

<TouchableOpacity onPress={()=>handPause()} style={{marginRight: 20, marginLeft:20}}>
    <AntDesign name='forward' size={35} color='#fff' />
</TouchableOpacity>
    }
              
            
        </View>
    </View>
    
)
}
const styles = StyleSheet.create({
    player: {
        backgroundColor: "gray",
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
  