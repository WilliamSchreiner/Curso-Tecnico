import React , {useState,  useEffect} from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/MaterialIcons";

const Main = ({navigation}) => {
  
  const [books, setBooks] = useState([]);
  useEffect(() => {
      //AsyncStorage.removeItem("books");
      AsyncStorage.getItem("books").then(data => {
      const book = JSON.parse(data);
      setBooks(book);
   });
   

  },[]);

  const onNewBook = () => {
    navigation.navigate('Book');
  }


  const onBookRead = async(bookId)=> {
    const newBooks = books.map(item=> {
      if(item.id === bookId) {
        item.read = !item.read; // false -> true / true -> false
      }
      return item;
    });

    await AsyncStorage.setItem("books", JSON.stringify(newBooks));
      setBooks(newBooks); 
    }
    
  return (
    <View style={styles.container}>
      <View style={styles.toolbox}>
      <Text style={styles.title}>Lista de Leitura</Text>
      <TouchableOpacity 
      style={styles.toolboxButton}
      onPress={onNewBook}
      >
      <Icon name="add" size={30} color="#fff" />
      </TouchableOpacity>
      </View>
      <FlatList
       data={books}
       keyExtractor={item=> item.id}
       renderItem={({item})=> (
        <View style={styles.itemsContainer}>
        <TouchableOpacity 
              style={styles.itemButton}
              onPress={()=> onBookRead(item.id)}>
              <Text style={[styles.itemText, item.read ?
                 styles.itemRead : '']}>{item.title}</Text>
            </TouchableOpacity>
       
        </View>
        )}
       /> 
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  toolbox: {
    flexDirection: "row",
    marginBottom: 5,
  },
  title: {
    flex: 1,
    fontSize: 16,
    color: "#3498db",
  },
  toolboxButton: {
    backgroundColor: "#3498db",
    borderRadius: 50,
    width: 22,
    height: 22,
    justifyContent: "center",
    alignItems: "center",
  },
  itemButton: {

  },
  itemText: {
    fontSize: 16,
  },
});

export default Main;