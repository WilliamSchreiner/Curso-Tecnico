import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    <Image source={require('./assets/logo.png')} style={styles.logo}/>
    <Text style={styles.title}>Sistema de login</Text>
    <Text style={styles.subTitle}>Bem vindo(a)! Digite seus dados abaixo</Text>
    <Text style={styles.email}>Email</Text>
    <Text style={styles.boxEmail}>Digite sua email</Text>
    <Text style={styles.senha}>Senha</Text>
    <Text style={styles.boxSenha}>*******</Text>
    <Text style={styles.esqueceuSenha}>Esqueci minha senha</Text>
    <Text style={styles.entrar}>Entrar</Text>
    <Text style={styles.nTemConta}>Não tenho uma conta? <Text style={styles.cadastrar}>Cadastre-se</Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 160,
    width: 160
  },
  title: {
    fontSize: 28,
    lineHeight: 28,
    textAlign: 'center',
    marginBottom: 20
  },
  subTitle: {
    fontSize: 16,
    lineHeight: 16,
    textAlign: 'center',
    color: '#8f8f8f',
    marginBottom: 20
  },
  email: {
    fontSize: 15,
    lineHeight: 15,
    textAlign: 'left',
    color: '#8f8f8f',
    width: 330,
    marginBottom: 10
  },
  boxEmail: {
    width: 330,
    marginBottom: 20,
    border: 'solid',
    borderRadius: 5,
    borderBottomWidth: 1.5,
    borderTopWidth: 1.5,
    borderLeftWidth: 1.5,
    borderRightWidth: 1.5,
    height: 40,
    color: '#8f8f8f',
    borderColor: '#8f8f8f',
    paddingTop: 8,
    paddingLeft: 8,
    
  },
  senha: {
    fontSize: 15,
    lineHeight: 15,
    textAlign: 'left',
    color: '#8f8f8f',
    width: 330,
    marginBottom: 10
  },
  boxSenha: {
    width: 330,
    marginBottom: 20,
    border: 'solid' ,
    borderRadius: 5,
    borderBottomWidth: 1.5,
    borderTopWidth: 1.5,
    borderLeftWidth: 1.5,
    borderRightWidth: 1.5,
    height: 40,
    color: '#8f8f8f',
    borderColor: '#8f8f8f',
    paddingTop: 10,
    paddingLeft: 10
  },
  esqueceuSenha: {
    fontSize: 13,
    lineHeight: 13,
    textAlign: 'right',
    color: '#4263b7',
    width: 330,
    marginBottom: 20,
    fontWeight: 'bold'
  },
  entrar: {
    fontSize: 15,
    lineHeight: 15,
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#4162b7',
    width: 330,
    height: 40,
    paddingTop: 13,
    borderRadius: 10,
    marginBottom: 30
  },
  nTemConta: {
    fontSize: 13,
    lineHeight: 13,
    textAlign: 'center',
    color: '#8f8f8f',
    width: 240,
    fontWeight: 'bold',
    
  },
  cadastrar: {
    fontSize: 13,
    lineHeight: 13,
    color: '#4263b7',
    width: 100,
    fontWeight: 'bold',
  }
});
