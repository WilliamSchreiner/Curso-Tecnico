import React , {useState,  useEffect} from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from "react-native-vector-icons/MaterialIcons";
import {styles} from "./Main.style"

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

  const bookEdit = (bookId) => {
    const book = books.find(item => item.id === bookId);
    navigation.navigate('Book', {book: book , isEdit: true});
}

const bookDelete = async (bookId)=> {
   const newBooks = books.filter(item=> item.id !== bookId);
   await AsyncStorage.setItem("books", JSON.stringify(newBooks));
   setBooks(newBooks);
}

  const onBookRead = async(bookId)=> {
    const newBooks = books.map(item=> {
      if(item.id === bookId) {
        item.read = !item.read; 
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
      onPress={onNewBook}>
      <Icon name="add" size={25} color="#fff" />
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
          <View style={styles.buttons}>
          <TouchableOpacity 
             style={styles.editButton}
              onPress={() => bookEdit(item.id)} >
              <Icon name="create" size={22} color="#2ecc71"/>
          </TouchableOpacity>

          <TouchableOpacity 
             style={styles.deleteButton}
              onPress={()=> bookDelete(item.id)} >
              <Icon name="delete" size={22} color="#e74c3c"/>
          </TouchableOpacity>
          </View>
          
        </View>
        )}
       /> 
    </View>
  )
}


export default Main;