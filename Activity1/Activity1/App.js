import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const TextInputExample = () => {
  const [name, onChangeName] = React.useState('Name:');
  const [age, onChangeAge] = React.useState('AGE:');
  const [address, onChangeAddress] = React.useState('Address:');
  const [school, onChangeSchool] = React.useState('School:');
  const [course, onChangeCourse] = React.useState('Course:');
  const [email, onChangeEmail] = React.useState('Email:');
  const [contact, onChangeContact] = React.useState('Contact:');
 
 
 

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <TextInput
          style={styles.input}
          onChangeText={onChangeName}
          value={name}
        />
        <TextInput
          style={styles.input}
          onChangeName={onChangeAge}
          value={age}
          onChangeText={onChangeAge}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeAddress}
          value={address}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeSchool}
          value={school}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeCourse}
          value={course}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeContact}
          value={contact}
        />
       
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default TextInputExample;