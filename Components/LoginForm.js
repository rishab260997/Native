import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import auth from '@react-native-firebase/auth';

const LoginForm = ({navigation}) => {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState(false);

  const handleFormValues = (key, value) => {
    setFormValues({
      ...formValues,
      [key]: value,
    });
  };
  const handleSignup = () => {
    navigation.navigate('SignUp');
  };

  const firebaseAuthentication = async () => {
    console.log(
      'responseresponseresponseresponse________________firebaseAuthentication',
    );
    auth()
      .signInWithEmailAndPassword(formValues.email, formValues.password)
      .then(() => {
        console.log('User account created & signed in!');
        navigation.navigate('Dashboard');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
      });
  };

  const handleLogin = () => {
    if (formValues.email && formValues.password) {
      setError(false);
      firebaseAuthentication();
    } else {
      setError(true);
    }
  };
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.center}>
          <Text style={styles.loginText}>Login</Text>
          {error && (
            <Text style={styles.errorText}>
              Please fill in the below fields
            </Text>
          )}
          <TextInput
            style={styles.inputStyle}
            selectionColor={'#fff'}
            placeholder="Email"
            placeholderTextColor={'#fff'}
            onChangeText={text => handleFormValues('email', text)}
            // value={name}
            autoCapitalize="none"
          />
          <TextInput
            style={styles.inputStyle}
            selectionColor={'#fff'}
            placeholder="Password"
            placeholderTextColor={'#fff'}
            onChangeText={text => handleFormValues('password', text)}
            secureTextEntry={true}
            // value={name}
            autoCapitalize="none"
          />
          <View style={styles.loginBtnContainer}>
            <TouchableOpacity onPress={handleLogin}>
              <View style={styles.signUpButton}>
                <Text style={styles.signUpButtonText}>Login</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.signUpContainer}>
          <Text style={styles.signUpText}>Already a member?</Text>
          <TouchableOpacity onPress={handleSignup}>
            <View style={styles.signUpButton}>
              <Text style={styles.signUpButtonText}>Sign Up</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#05679E',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    height: 825,
  },
  center: {
    width: '90%',
  },
  loginText: {
    color: '#fff',
    fontSize: 50,
    fontWeight: 'bold',
  },
  inputStyle: {
    height: 45,
    borderColor: '#fff',
    borderWidth: 1,
    marginTop: 20,
    borderRadius: 25,
    paddingLeft: 20,
    paddingRight: 20,
    color: '#fff',
    fontSize: 15,
  },
  loginBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  loginButton: {
    backgroundColor: '#fff',
    height: 40,
    borderRadius: 25,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  loginButtonText: {
    color: '#05679E',
    fontSize: 22,
    fontWeight: 'bold',
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  signUpText: {
    color: '#fff',
    fontSize: 14,
    marginRight: 5,
  },
  signUpButton: {
    backgroundColor: '#075480',
    height: 30,
    borderRadius: 10,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    marginTop: 20,
  },
  signUpButtonText: {
    color: '#fff',
    fontSize: 15,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
  },
});
