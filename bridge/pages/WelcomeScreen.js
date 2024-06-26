
import React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';

function WelcomeScreen({ navigation }) {
  return (
      <View style={styles.container}>
        <View style={{ position: 'absolute'}}>
          <Image source={require('../assets/bridge.jpg')} style={{marginTop: -150}}/>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>log in</Text>
        </TouchableOpacity>
        
        <Button
          title="new to bridge? sign up"
          color= '#9FA54B'
          onPress={() => navigation.navigate('SignUp')}
        />
        <View style={{ position: 'absolute', bottom: 0 }}>
          <Image source={require('../assets/wave.jpg')} style={{ width: 500, marginBottom: -50 }}/>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#C9D09A'
  },
  input: {
    width: '100%',
    marginVertical: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
  },
  button: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    marginVertical: 10,
    borderRadius: 25,
    width: '50%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center', 
  },
  buttonText: {
    fontSize: 20,
    color: '#9FA54B',
  }
});

export default WelcomeScreen;