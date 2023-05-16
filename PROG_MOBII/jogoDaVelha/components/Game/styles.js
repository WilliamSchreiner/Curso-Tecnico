import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    titulo: {
      fontSize: 32,
      marginBottom: 24,
    },
  
    linha: {
      display: 'flex',
      flexDirection: 'row', 
    },
    tabuleiro: {
      marginTop: 24,
    },
    areaReinicio: {
      display: 'flex',
      alignItems: 'center',
    },
    status: {
      fontSize: 20,
      marginBottom: 12,
    },
  });

  export default styles;