import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import BackButton from '../components/UI/BackButton';
import PrimaryButton from '../components/UI/PrimaryButton';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import styles from './login.style';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {COLORS} from '../constants';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'Password must be 8 characters long')

    .required('Required'),
  email: Yup.string()
    .email('Provide a valid email address')
    .required('Required'),
});

const Login = () => {
  const navigation = useNavigation();
  const [loader, setLoader] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [obsecureText, setObsecureText] = useState(true);

  const login = async values => {
    try {
      const endpoint = 'http://172.17.28.120:3000/api/login';
      const data = values;

      const response = await axios.post(endpoint, data);
      if (response.status === 200) {
        setLoader(true);
        setResponseData(response.data);
        await AsyncStorage.setItem(
          `user${response.data._id}`,
          JSON.stringify(response.data),
        );

        await AsyncStorage.setItem('id', JSON.stringify(response.data._id));
        navigation.replace('Bottom Tab Navigation');
      } else {
        Alert.alert(
          'Error Logging in',
          'Please check your email and password',
          [
            {
              text: 'OK',
              onPress: () => console.log('OK Pressed'),
            },
          ],
        );
      }
    } catch (error) {
      Alert.alert('Error Logging in', 'Please check your email and password', [
        {
          text: 'OK',
          onPress: () => console.log('OK Pressed'),
        },
      ]);
    } finally {
      setLoader(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.backBtn}>
        <BackButton />
      </View>
      <Text style={styles.title}>Get your dream shoes</Text>

      <Formik
        initialValues={{email: '', password: ''}}
        validationSchema={LoginSchema}
        onSubmit={values => login(values)}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          isValid,
          setFieldTouched,
        }) => (
          <View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email</Text>
              <View
                style={styles.inputWrapper(
                  touched.email ? COLORS.gray2 : COLORS.offwhite,
                )}>
                <FontAwesome6
                  name="envelope"
                  size={20}
                  color={COLORS.gray}
                  style={{marginRight: 10}}
                />
                <TextInput
                  placeholder="Enter email"
                  placeholderTextColor={COLORS.gray}
                  onFocus={() => setFieldTouched('email')}
                  onBlur={() => setFieldTouched('email', '')}
                  value={values.email}
                  onChangeText={handleChange('email')}
                  autoCapitalize="none"
                  autoCorrect={false}
                  style={styles.input}
                />
              </View>

              {touched.email && errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}

              <Text style={styles.label}>Password</Text>
              <View
                style={styles.inputWrapper(
                  touched.password ? COLORS.gray2 : COLORS.offwhite,
                )}>
                <FontAwesome6
                  name="lock"
                  size={20}
                  color={COLORS.gray}
                  style={{marginRight: 10}}
                />
                <TextInput
                  secureTextEntry={obsecureText}
                  placeholder="Enter password"
                  placeholderTextColor={COLORS.gray}
                  onFocus={() => setFieldTouched('password')}
                  onBlur={() => setFieldTouched('password', '')}
                  value={values.password}
                  onChangeText={handleChange('password')}
                  autoCapitalize="none"
                  autoCorrect={false}
                  style={styles.input}
                />
                <TouchableOpacity
                  onPress={() => {
                    setObsecureText(!obsecureText);
                  }}>
                  <FontAwesome6
                    name={obsecureText ? 'eye-slash' : 'eye'}
                    size={20}
                    color={COLORS.gray}
                    style={{marginRight: 10}}
                  />
                </TouchableOpacity>
              </View>

              {touched.password && errors.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
            </View>

            <PrimaryButton
              loader={loader}
              title={'LOG IN'}
              isValid={isValid}
              onPress={handleSubmit}
            />

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Sign Up');
              }}>
              <Text style={styles.registerButton}>Register</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Login;
