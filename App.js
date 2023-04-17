import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const HomeViewPage = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./assets/download.png')}
      />
      <Text style={styles.title}>WELCOME TO E-VOTING SYSTEM</Text>
      <TouchableOpacity style={styles.button}
      onPress={() => this.props.navigation.navigate('signup')}>
          <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}
      onPress={() => this.props.navigation.navigate('login')}>
          <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5fffa',
  },
  logo: {
    width: 170,
    height: 170,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },

  button: {
    backgroundColor: '#008080',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeViewPage;
