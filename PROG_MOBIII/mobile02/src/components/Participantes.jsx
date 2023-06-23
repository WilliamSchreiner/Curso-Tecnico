import {Text, View, TouchableOpacity, StyleSheet} from 'react-native'

export function Participante({name, participantRemove}){
            
    return(
        <View style={styles.container}>
            <Text style={styles.name}>
                {name}
            </Text>

            <TouchableOpacity 
            style={styles.button} 
            onPress={()=>{participantRemove(name)}}>
                <Text  style={styles.buttonText}> - </Text>
            </TouchableOpacity>
            </View>
    )
}   




const styles = StyleSheet.create({
    container: {
        marginBottom: 5,
        width: '100%',
        flexDirection: 'row'
    },
    name: {
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
        width: '70%'

    },
    button:{
        width:56,
        height: 56,
        borderRadius: 5,
        backgroundColor: 'red',
        textAlign: 'center',
        justifyContent: 'center',
        shadowColor: '#CC2E2E',
        shadowOffset: {width: 5, height: 4},
        shadowOpacity: 0.8
        

    },
    buttonText: {
        fontSize: 24,
        color: '#fff',
        marginLeft: 18
    }
  });
  
