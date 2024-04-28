import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

function SignUpScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder='Confirm Password'
        secureTextEntry
      />
      <Button
        title="Sign Up"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#C9D09A',
  },
  input: {
    width: '100%',
    marginVertical: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
  }
});

export default SignUpScreen;