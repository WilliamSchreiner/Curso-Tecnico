import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, Entypo, MaterialIcons } from '@expo/vector-icons';

import Inicio from './Components/inicio'
import Contatos from './Components/contatos'
import Catalogo from './Components/catalogo'

const Tabs = createBottomTabNavigator();
export default function App() {
  return (
    <View style={stylesApp.container}>      
      <NavigationContainer >
        <Tabs.Navigator 
        screenOptions={{
          headerStyle:{ 
            backgroundColor: '#400303' 
          },
          headerTitleStyle: { 
            color: '#fff', 
            fontWeight: 'bold' 
          },
          headerTitleAlign: 'center',
          
          tabBarStyle: { 
            backgroundColor: "#fff"
          },
          tabBarLabelStyle:{ 
            fontSize: 14, 
            fontWeight: "bold"
          },
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: "#ab887c",
          tabBarActiveBackgroundColor: "#400303",
        }}>
          <Tabs.Screen name="Inicio"  component = {Inicio}/>
          <Tabs.Screen name="Catalogo"component ={Catalogo}/>
          <Tabs.Screen name="Contatos"component = {Contatos}/>
        </Tabs.Navigator>
      </NavigationContainer>
    </View>
  );
}

const stylesApp = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  
});
