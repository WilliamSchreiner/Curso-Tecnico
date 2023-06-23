import { View, Text, StyleSheet,TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
// a diferença entre faltlist e scrollview é a renderização, flatlist é mais benefico em questao de requerimento de renderização.
import { StatusBar } from 'expo-status-bar';
import { Participante } from '../components/Participantes';
import { useState } from 'react';

export function Home() {
    const [name, setName] = useState('');
    const [participantes, setParticipantes] = useState([])

    function handleParicipantAdd(name) {
        if (participantes.includes(name)){
        Alert.alert(`${name} já existe`);
        console.log(`${name} já existe`);
        }else if (name === ""){
            Alert.alert(`Write a name.`);
            console.log(`Write a name.`);
        }else {
        console.log(`add ${name}`);
        setParticipantes((prevState)=> [...prevState, name]);
        };
    }

    function handleParicipantDelete(name) {
        Alert.alert("Remover", `You want remove ${name}?`,[
            {
                text:'sim',
                onPress: ()=> {
                    setParticipantes(prevState => (
                        prevState.filter(participantName => participantName !== name)
                    ))
                }       
            },
            {
                text:'não',
                onPress: ()=>Alert.alert('ok, canceled.')
            }
        ])
        
    }

    return (
        <View style={styles.container}>
            <StatusBar style='auto'/>
            
            <View  style={styles.header}>
            <Text style={styles.title}> Nome do Evento</Text>
            <Text style={styles.subTitle}> Sexta, 2 de junho</Text>
            </View>

            <View style={styles.boxInput}>

            <TextInput 
            style={styles.input}
            placeholder='Nome do Participante...'
            placeholderTextColor={'#fff'}
            value={name}
            onChangeText={setName}>
                
            </TextInput>

            <TouchableOpacity 
            style={styles.button} 
            onPress={()=>handleParicipantAdd(name)}>
                <Text  style={styles.buttonText}> + </Text>
            </TouchableOpacity>

            </View>

            <View>
                
                  <FlatList
                  data={participantes}
                  keyExtractor={(item)=> item}
                  renderItem={({item})=> (
            <Participante key={item} 
            name={item} 
            participantRemove={()=>handleParicipantDelete(item)} />
            )}
                  ListFooterComponent={()=>{
                    <Text>
                        adicione algum participante. 
                    </Text>
                  }}
                   />
               
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000000',
      width: '100%'
    },
    header: {
        marginLeft: 10,
        width: '100%'
      },
    title: {
        color: '#fff',
        textShadowColor: 'blue',
        textShadowOffset: {width: 2, height: 3},  
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 48,
    
    },
    subTitle: {
        color: 'gray',
        textShadowColor: '#fff',
        textShadowColor: 'blue',
        textShadowOffset: {width: 2, height: 3},
        shadowOpacity: 0.2,
        fontSize: 16,
        marginTop: 2,
        marginLeft: 18
    },
    boxInput: {
        marginTop: 36,
        marginBottom: 42,
        width: '100%',
        flexDirection: 'row'
    },
    input: {
        color: '#fff',
        height: 56,
        backgroundColor: '#1f1e25',
        textShadowColor: 'blue',
        textShadowOffset: {width: 2, height: 3},
        textShadowOpacity: 0.2,
        fontSize: 16,
        marginTop: 2,
        marginLeft: 18,
        padding: 16,

    },
    button:{
        width:56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#31cf67',
        justifyContent: 'center',
        shadowColor: '#31B345',
        shadowOffset: {width: 5, height: 4},
        shadowOpacity: 0.8

    },
    buttonText: {
        fontSize: 24,
        color: '#fff',
        marginLeft: 14
    }
  });
  