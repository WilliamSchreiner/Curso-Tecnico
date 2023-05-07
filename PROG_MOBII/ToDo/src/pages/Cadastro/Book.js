import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Book = ({ navigation }) => {

  const book = navigation.getParam("book", {
    title:'',
    description: '',
    read: false,
   
});


const [books, setBooks] = useState([]);
const [ title, setTitle] = useState(book.title);
const [description , setDescription] = useState( book.description);
const [read, setRead] = useState(book.read);
const isEdit = navigation.getParam("isEdit", false);


useEffect(()=> {

  AsyncStorage.getItem("books").then(data=> {
   if(data){
 const book = JSON.parse(data);      
 setBooks(book);
}     
} );


},[]);


  const isValid = () => {
    if (title !== undefined && title !== '') {
      return true;
    }

    return false;
  };

  const onSave = async()=> {
    if(isValid()){    
      if(isEdit){        
        // altera o livro corrente
        let newBooks = books;

        newBooks.map(item=> {
          if(item.id === book.id){
            item.title = title;
            item.description = description;
            item.read = read;
          }
          return item;
        });

        console.log("books", books);
        console.log("newBooks", newBooks);

        await AsyncStorage.setItem('books', JSON.stringify(newBooks));

         }else{

        // adiciona um livro
        const id = Math.random(99999999).toString();

        const data = {
          id,
          title,
          description,
          read,
        };

        books.push(data);

          await AsyncStorage.setItem('books', JSON.stringify(books));
       }

      navigation.goBack();

        }else{

         console.log('Inválido!');
        }
      };

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Inclua seu novo livro...</Text>
      <TextInput
        style={styles.input}
        placeholder="Título"
        value={title}
        onChangeText={text => {
          setTitle(text);
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        multiline={true}
        numberOfLines={4}
        value={description}
        onChangeText={text => {
          setDescription(text);
        }}
      />

      <TouchableOpacity style={styles.cameraButton}>
        <Icon name="photo-camera" size={18} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.saveButton, (!isValid()) ? styles.saveButtonInvalid : '']} 
        onPress={onSave}>
        <Text style={styles.saveButtonText}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.cancelButton}
        onPress={() => {
          navigation.goBack();
        }}>
        <Text style={styles.cancelButtonText}>Cancelar</Text>
      </TouchableOpacity>
    </View>
  );
      }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  pageTitle: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    fontSize: 16,
    borderBottomColor: '#f39c12',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  cameraButton: {
    backgroundColor: '#f39c12',
    borderRadius: 50,
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: '#f39c12',
    alignSelf: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  saveButtonInvalid: {
    opacity: 0.5,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  cancelButton: {
    alignSelf: 'center',
  },
  cancelButtonText: {
    color: '#95a5a6',
  },
});

export default Book;
