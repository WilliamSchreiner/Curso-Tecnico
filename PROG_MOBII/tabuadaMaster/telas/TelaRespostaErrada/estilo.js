import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
  fundo: {
    width: '100%', 
    height: '100%', 
    backgroundColor: '#fff', 
    alignItems:"center",
    justifyContent: 'center',
    flex: 1,
    

  },
  boxConteudo: {
    margin: 20,
    paddingVertical: 20,
    alignItems: "center",
    backgroundColor: 'rgba(255,255,255,0.85)',
    borderRadius: 10,
  },

  texto: {
    marginBottom: 20,
    paddingHorizontal: 10, 
    fontSize: 26,
    textTransform: "uppercase",
    fontWeight: "700",
    textAlign: "center",
    color:"#1f4f66"
  },
  boxBotoes: {
    flexDirection: 'row',
  },

  boxBotao: {
    width: 130,
    marginBottom: 10,
    paddingHorizontal: 5
  }
});

export default estilo;