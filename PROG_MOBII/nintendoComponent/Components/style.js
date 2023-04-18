import {StyleSheet} from  'react-native';

const stylesBody = StyleSheet.create({
    header: {
      flexDirection: "column",
      backgroundColor: 'red',
      textAlign: 'center',
      height: 200,
      width: '100%',
      marginTop: -400,
    },
    logo: {
      marginTop: 30,
      minHeight: 150,
      width: '100%',
      paddingBottom: 30
    },
    textTop: {
      height: 50,
      width: '100%',
      textSize: 25,
      color: '#fff',
    
    },
    footer: {
    textAlign: 'center'
    },
    titleBottom: {
      height: 50,
      width: '100%',
      textSize: 25,
    },
    image: {
      minHeight: 120,
      width: '100%'
    },
    textBottom: {
    textSize: 14,
    },
  });

  export default stylesBody;