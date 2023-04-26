import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
  imagemFundo: {
    width: '100%', 
    height: '100%'
  },

  tela: { 
    alignItems: 'center',
    justifyContent: 'center',
    flex:1
  },

  boxPergunta: {
    backgroundColor: 'rgba(255,255,255,0.85)',
    borderRadius: 10,
    margin: 20,
    padding: 20,
    alignItems: "center",
    width: 320
  },
  
  titulo: {
    marginBottom: 20,
    paddingHorizontal: 10, 
    fontSize: 26,
    textTransform: "uppercase",
    fontWeight: "700",
    textAlign: "center",
    color:"#1f4f66"
  },

  boxQuestao: {
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center"
  },  

  texto: {
    marginRight: 10,
    fontSize: 26
  },
  
  input: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 3,
    width: 100,
    paddingHorizontal: 5,
    marginLeft: 10 ,
    fontSize: 26
  },

  opcoes: {
    width:320,
    marginTop: 20,
    alignItems:"center",
    justifyContent: 'space-around',
    flexDirection: 'row'
  },

  boxBotao: {
    minWidth: 130,
    marginBottom: 10
  },

  boxBotaoTabuada: {
    width: 320
  }

});

export default estilo;