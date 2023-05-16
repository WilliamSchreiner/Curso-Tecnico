import { Text, View } from 'react-native';
import styles from './styles';

export default function Casa(
    {
        jogador = null, 
        
    }) {
    

    
    return(    
        <View style={styles.coluna}>
            <Text style={styles.marcadorJogador}>{jogador}</Text>
        </View>
    )
}

