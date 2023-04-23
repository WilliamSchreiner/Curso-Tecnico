import {StyleSheet} from  'react-native';

const stylesBody = StyleSheet.create({
    inicio:{ 
    textAlign: 'center',
    backgroundColor: 'black',
    height:'100%',
    width: '100%'
    },
    subTitleInicio:{
        fontSize: 26,
        color: '#fff',
        marginTop: '60%'
    },
    textInicio:{
        fontSize: 18,
        color: '#fff'
    },
    catalogo:{
    backgroundColor: '#fff',
    height:'100%',
    width: '100%'
    },
    titleCatalogo:{
        fontSize: 24,
        marginTop: '10%',
        marginBottom: '10%',
        marginLeft: '10%',
        fontWeight: 'bold'
    },
    textCatalogo:{
        fontSize: 16,
        marginBottom: '10%',
        marginLeft: '10%'
    },
    vinhoLista:{
        alignContent: 'center',
        alignItems: 'center'
    },
    boxVinho:{
        border: 'solid',
        borderWidth: 1,
        borderRadius: 15,
        height:'40%',
        width: '90%',
        marginBottom: '5%',
        alignItems: 'center'
    },
    vinhoImg:{
        height: '80%',
        width: '30%'
    },
    vinhoBoxTextos:{},
    titleBoxVinho:{},
    textBoxVinho:{},

    contato:{
    backgroundColor: '#fff',
    height:'100%',
    width: '100%'
    },
    titleContato:{
        fontSize: 22,
        marginTop: '10%',
        marginBottom: '10%',
        marginLeft: '10%',
        fontWeight: 'bold'
    },
    contatoLista:{
        alignContent: 'center',
        alignItems: 'center'
    },
    contatoBox:{
        border: 'solid',
        borderWidth: 1,
        borderRadius: 15,
        height:'30%',
        width: '80%',
        marginBottom: '5%',
        alignItems: 'center'
    },
    titleBoxContato:{
        fontSize: 16,
        fontWeight: 'bold',
        color: '#400303'
    },
    textBoxContato:{}


  });

  export default stylesBody;