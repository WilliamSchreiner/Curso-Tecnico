import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Audio} from 'expo-av';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import Player from './Player'
import musicass from './DBmusicas';

export default function App() {
  const [audioIndex, setarAudioIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [audio, setAudio] = useState(null);
  const [musicas, setMusicas] = useState(musicass)
  
  const changeMusic = async (id) => {
    
    let curFile = null;
    let newMusicas= musicas.filter((val, k) => {
      if(id == k){
      // tocar a musica
        musicas[k].playing = true;
        curFile = musicas[k].file;
        setPlaying(true);
        setarAudioIndex(id);
      }else{
        musicas[k].playing = false;
      } return musicas[k];

    })

    if(audio != null){
      audio.unloadAsync();
    }

    let curAudio = new Audio.Sound();

    try{

      await curAudio.loadAsync(curFile);
      await curAudio.playAsync();

    }catch(erro){}

    setAudio(curAudio);
    setMusicas(newMusicas);
  }


  return (
    <View style={{flex: 1}}>
    <ScrollView style={styles.container}>
      <StatusBar hidden/>
      <View style={styles.headerBottom}>
        <Text style={{ color: '#ADD8E6', width:'50%', marginLeft:30}}>Música</Text>
        <Text style={{ color: '#ADD8E6', width:'50%'}}>Artista</Text>
      </View>
      <View style={styles.header}>
        <Text style={{textAlign: 'center', color: '#fff', fontSize: 33, marginTop: 26}}>Bird</Text>
      </View>

      
      {
      musicas.map((val, k)=> {
        if (val.playing){
          return(
            <View style={styles.tableSelect}  key={k}>
              <TouchableOpacity  onPress={()=>changeMusic(k)} style={{width: '100%', flexDirection: 'row'}}>
              <Text style={styles.tableTextSelected}> <AntDesign name='play' size={15} color='#ADD8E6' marginRight={25}/> {val.nome}</Text>
              <Text style={styles.tableTextSelected}>{val.artista}</Text>
              </TouchableOpacity>
               
                <Player 
              playing={playing} setPlaying={setPlaying} 
              setarAudioIndex={setarAudioIndex} audioIndex={audioIndex} 
              musicas={musicas} setMusicas={setMusicas} 
              audio={audio} setAudio={setAudio}></Player>
            </View>
          );
        }else{
          return(
            <View style={styles.table}  key={k}>
              <TouchableOpacity  onPress={()=>changeMusic(k)}  style={{width: '100%', flexDirection: 'row'}}>
              <Text style={styles.tableText}> <AntDesign name='play' size={15} color='#ADD8E6' marginRight={25} />{val.nome}</Text>
              <Text style={styles.tableText}>{val.artista}</Text>
              </TouchableOpacity>
              
              
            </View>
          );
        }
      })  
      }
    </ScrollView >
    

 </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    backgroundColor: "#1E90FF",
    width: '100%',
    padding: 15,
    marginTop: -125,
    marginBottom: 50,
    height: 100,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80
  },
  headerBottom: {
    backgroundColor: "#00BFFF",
    width: '100%',
    height:100,
    padding: 15,
    paddingTop: 75,
    marginTop: 25,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    
  },
  table: {
    flexDirection: 'row',
    borderBottomColor: '#ADD8E6',
    borderBottomWidth: 1,
    padding: 15,
  },
  tableSelect: {
    flexDirection: 'column',
    marginTop:3,
    marginBottom:3,
    padding: 15,
    height:80,
    backgroundColor: "#1E90FF",
    borderRadius: 10,
    width: '100%',
  },
  playerBox:{
    flexDirection: 'row'
  },
  tableTextSelected: {
    width: '50%',
    color: '#ADD8E6',
    height: 20
  },
  tableText: {
    width: '50%',
    color: '#ADD8E6'
  }
});
