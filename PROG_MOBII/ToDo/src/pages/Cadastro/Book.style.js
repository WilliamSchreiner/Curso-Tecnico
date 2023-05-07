import { StyleSheet, } from 'react-native';
export const styles = StyleSheet.create({
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