import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function LoginScreen() {
    return (
        <View style={styles.container}>
          <Text style={styles.header}>Access Your Account</Text>
    
          <TouchableOpacity style={styles.signIn} onPress={() => alert("Login")}>
              <Text style={styles.buttonText}>Sign in with google</Text>
          </TouchableOpacity>
    
          <View style={styles.orView}>
            <View style={styles.borderHorizontal}></View>
            <Text style={styles.or}>or</Text>
            <View style={styles.borderHorizontal}></View>
          </View>
        </View>
      )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'E2E2',
      padding: 30,
      width: '100vw',
      height: 250,
    },
    header: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    signIn: {
      width: '100%',
      height: 50,
      marginVertical: 50,
      padding: 25,
      backgroundColor: '#fff',
      borderColor: '#DEDEDE',
      borderWidth: 1,
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 20,
    },
    buttonText: {
        color: '#000000', // Mengatur warna teks menjadi hitam
        fontSize: 16,
        textAlign: 'center',
    },
    orView: {
      width: "100%",
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    or: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#DEDEDE',
      fontSize: 18,
      marginHorizontal: 15,
    },
    borderHorizontal: {
      height: 1,
      borderBottomWidth: 1,
      borderColor: '#DEDEDE',
      width: '42%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  })