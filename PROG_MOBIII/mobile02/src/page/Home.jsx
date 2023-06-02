import { View, Text, StyleSheet,TextInput, Touchable, TouchableOpacity} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export function Home() {
    function handleParicipantAdd () {
console.log('ta on')
    }
    return (
        <View style={styles.container}>
            <StatusBar style='auto'/>
            <View  style={styles.header}>
            <Text style={styles.title}> Nome do Evento</Text>
            <Text style={styles.subTitle}> Sexta, 2 de junho</Text>
            </View>

            <View style={styles.boxInput}>
                <TextInput style={styles.input}
            placeholder='Nome do Participante...'
            placeholderTextColor={'#fff'}></TextInput>

            <TouchableOpacity style={styles.button} onPress={handleParicipantAdd}>
                <Text  style={styles.buttonText}> + </Text>
            </TouchableOpacity>
            </View>
            

            <View>

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
        textAlign: 'center',
        justifyContent: 'center',
        shadowColor: '#31B345',
        shadowOffset: {width: 5, height: 4},
        shadowOpacity: 0.8

    },
    buttonText: {
        fontSize: 24,
        color: '#fff',
    }
  });
  