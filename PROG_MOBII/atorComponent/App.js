
import {  StyleSheet, Text, View , img} from 'react-native';

import TextFirst from './Components/textFirst';
import TextSecond from './Components/textSecond';
import TextTree from './Components/textTree';

export default function App() {

  return (
    <View style={stylesApp.container}> 
    
     <TextFirst></TextFirst>
     <TextSecond></TextSecond>
     <TextTree></TextTree>
  
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
