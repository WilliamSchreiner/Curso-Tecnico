import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Audio} from 'expo-av';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import Player from './Player'



export default function App() {
  const [audioIndex, setarAudioIndex] = useState(0);

  const [playing, setPlaying] = useState(false);
  const [audio, setAudio] = useState(null);
  const [musicas, setMusicas] = useState([
    {
      nome: "Before You Go",
      artista: "Chris Klafford",
      playing: true,
      file: require('./Before You Go.mp3')
    },
    {
      nome: "Numb",
      artista: "Linkin Park",
      playing: true,
      file: require('./Numb.mp3')
    },
    {
      nome: "Lemon Tree",
      artista: "Post Malone",
      playing: true,
      file: require('./Lemon Tree.mp3')
    },
    
  ]);


  const changeMusic = async (id) => {
    let curFile = null;
    let newMusicas= musicas.filter((val, k) => {
      if(id == k){
      // tocar a musica
        musicas[id].playing = true;
        curFile = musicas[k].file;
        setPlaying(true);
        setarAudioIndex(id);
      }else{
        musicas[id].playing = false;
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

    setAudio(newAudio);
    setMusicas(newMusicas);
  }


  return (
    <View style={{flex: 1}}>
    <ScrollView style={styles.container}>
      <StatusBar hidden/>

      <View style={styles.header}>
        <Text style={{textAlign: 'center', color: '#fff', fontSize: 22}}>Bird</Text>
      </View>

      <View style={styles.table}>
        <Text style={{ color: '#fff', width:'50%'}}>Música</Text>
        <Text style={{ color: '#fff', width:'50%'}}>Artista</Text>
      </View>
      {
      musicas.map((val)=> {
        if (val.playing){
          return(
            <View style={styles.table}>
              <TouchableOpacity  onPress={()=>changeMusic(k)} style={{width: '100%', flexDirection: 'row'}}>
              <Text style={styles.tableTextSelected}> <AntDesign name='play' size={15} color='#fff' />{val.name}</Text>
              <Text style={styles.tableTextSelected}>{val.artista}</Text>
              </TouchableOpacity>
            </View>
          );
        }else{
          return(
            <View style={styles.table}>
              <TouchableOpacity  onPress={()=>changeMusic(k)}  style={{width: '100%', flexDirection: 'row'}}>
              <Text style={styles.tableText}> <AntDesign name='play' size={15} color='#fff' />{val.name}</Text>
              <Text style={styles.tableText}>{val.artista}</Text>
              </TouchableOpacity>
            </View>
          );
        }
      })  
      }
    <View  style={{paddingBottom: 200}}></View>

    </ScrollView >

<Player playing={playing} setPlaying={setPlaying} setarAudioIndex={setarAudioIndex} audioIndex={audioIndex}
musicas={musicas} setMusicas={setMusicas} audio={audio} setAudio={setAudio}>

</Player>
 </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    backgroundColor: "gray",
    width: '100%',
    padding: 20
  },
  table: {
    flexDirection: 'row',
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    padding: 20
  },
  tableTextSelect: {
    width: '50%',
    color: '#fff'
  },
  tableText: {
    width: '50%',
    color: '#fff'
  }
});
