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
        height:'60%',
        width: '90%',
        marginBottom: '5%',
        textAlign: 'right',
        flexDirection: 'row',
        backgroundColor: '#ab887c'
    },
    vinhoImg:{
        height: '80%',
        width: '30%',
        marginTop: 15
    },
    vinhoBoxTextos:{
        textAlign: 'left',
        width: '50%',
        marginLeft: 20
    },
    titleBoxVinho:{
        marginTop:5,
        fontSize: 18
    },
    textBoxVinho:{
        marginTop:5,
        fontSize: 15
    },
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