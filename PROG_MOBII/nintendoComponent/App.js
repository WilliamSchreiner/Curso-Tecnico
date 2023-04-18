
import {  StyleSheet, View, Image } from 'react-native';

import TextFirst from './Components/textFirst';
import TextSecond from './Components/textSecond';

export default function App() {

  return (
    <View style={stylesApp.container}> 
    
     <TextFirst></TextFirst>
     <TextSecond></TextSecond>
  
    </View>
    
  );
}

const stylesApp = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
