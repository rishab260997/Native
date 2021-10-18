import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import LoginForm from '../Components/LoginForm';

const Login = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <LoginForm navigation={navigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
