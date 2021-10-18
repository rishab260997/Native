import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Dashhboard = ({navigation}) => {
  const handleLogout = () => {
    navigation.navigate("Login")
  };
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.center}>
          <Text style={styles.loginText}>Dashboard</Text>
          </View>
          <View style={styles.loginBtnContainer}>
            <TouchableOpacity onPress={handleLogout}>
              <View style={styles.signUpButton}>
                <Text style={styles.signUpButtonText}>Logout</Text>
              </View>
            </TouchableOpacity>
          </View>
      </SafeAreaView>
    </>
  );
};

export default Dashhboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#05679E',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    height: 900,
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
});
