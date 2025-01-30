
import React from 'react';
import { StyleSheet, TextInput, Image, View } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const Activity4 = () => {
  const [name, onChangeName] = React.useState('Name: ');
  const [age, onChangeAge] = React.useState('Age: ');
  const [address, onChangeAddress] = React.useState('Address: ');
  const [school, onChangeSchool] = React.useState('School: ');
  const [course, onChangeCourse] = React.useState('Course:');
  const [email, onChangeEmail] = React.useState('Email:');
  const [comment, onChangeComment] = React.useState('Contact:');
  const [aboutMe, onChangeAboutMe] = React.useState('About Me: ');

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.content}>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={'https://icon-library.com/images/name-icon-png/name-icon-png-4.jpg'}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeName}
            value={name}
            placeholder="Name:"
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={'https://th.bing.com/th/id/OIP.NA2sASZR4fX323OVdZS6oQHaHa?rs=1&pid=ImgDetMain'}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeAge}
            value={age}
            placeholder="Age:"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={'https://th.bing.com/th/id/R.6c54525cc78d1514e93c17a2fe27d315?rik=I7Qj6l5sIg1xug&riu=http%3a%2f%2fgetdrawings.com%2fvectors%2faddress-icon-vector-3.png&ehk=cFsyj5ZV4g%2bLoUB2JcwdZQ3cleqhaJ9BgsI9ItXV9%2bQ%3d&risl=&pid=ImgRaw&r=0'}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeAddress}
            value={address}
            placeholder="Address:"
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={'https://www.freeiconspng.com/uploads/high-school-icon-png-8.png'}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeSchool}
            value={school}
            placeholder="School:"
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={'https://th.bing.com/th/id/OIP.yPQT1TjTmdzFrLSRkKZMlgHaHa?rs=1&pid=ImgDetMain'}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeCourse}
            value={course}
            placeholder="Course:"
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={'https://icon-library.com/images/name-icon-png/name-icon-png-2.jpg'}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeEmail}
            value={email}
            placeholder="Email:"
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={'https://www.freeiconspng.com/uploads/contact-icons-png-15.png'}
          />
          <TextInput
            style={styles.input}
            onChangeText={onChangeComment}
            value={comment}
            placeholder="Contact:"
          />
        </View>
        <View style={styles.row}>
          <Image
            style={styles.image}
            source={'https://th.bing.com/th/id/OIP.alpZGROF5C9hWA2NVDXJVAHaHa?rs=1&pid=ImgDetMain'}
          />
          <TextInput
            editable
            multiline
            numberOfLines={4}
            maxLength={40}
            onChangeText={(text) => onChangeAboutMe(text)}
            placeholder="About Me: "
            value={aboutMe}
            style={styles.textInput}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: "100%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  textInput: {
    borderBottomColor: '#000',
    borderWidth: 1,
    padding: 10,
    margin: 12,
    width: "100%",
  },
  row: {
    flexDirection: 'row',
  },
  content: {
    flex: 1,
    height: '100%',
    width: '100%',
    padding: 20,
  },
  image: {
    height: 40,
    width: 40,
    alignSelf: 'center',
  },
});

export default Activity4;