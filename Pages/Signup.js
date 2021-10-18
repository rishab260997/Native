import React from 'react';
import SignupForm from '../Components/SignupForm';
import {
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';

const Signup = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
      >
        <View>
          <SignupForm navigation={navigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
