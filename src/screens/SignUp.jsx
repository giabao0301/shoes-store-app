import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import BackButton from '../components/UI/BackButton';
import PrimaryButton from '../components/UI/PrimaryButton';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {COLORS} from '../constants';
import styles from './signUp.style';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'Password must be 8 characters long')
    .required('Required'),
  email: Yup.string()
    .email('Provide a valid email address')
    .required('Required'),
  username: Yup.string()
    .min(3, 'Username must be 3 characters long')
    .required('Required'),
  location: Yup.string()
    .min(3, 'Location must be 3 characters long')
    .required('Required'),
});

const SignUp = () => {
  const navigation = useNavigation();
  const [loader, setLoader] = useState(false);
  const [responseData, setResponseData] = useState(null);
  const [obsecureText, setObsecureText] = useState(true);

  const registerUser = async values => {
    setLoader(true);
    try {
      const endpoint = 'http://172.17.28.120:3000/api/register';
      const data = values;
      const response = await axios.post(endpoint, data);

      if (response.status === 201) {
        setLoader(false);
        setResponseData(response.data);
        navigation.navigate('Log in');
      }
    } catch (error) {
      console.log('Error registering the user', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.backBtn}>
        <BackButton />
      </View>
      <Text style={styles.title}>Get your dream shoes</Text>

      <Formik
        initialValues={{email: '', password: '', location: '', username: ''}}
        validationSchema={LoginSchema}
        onSubmit={values => registerUser(values)}>
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
              <Text style={styles.label}>User name</Text>
              <View
                style={styles.inputWrapper(
                  touched.username ? COLORS.gray2 : COLORS.offwhite,
                )}>
                <FontAwesome6
                  name="user"
                  size={20}
                  color={COLORS.gray}
                  style={{marginRight: 10}}
                />
                <TextInput
                  placeholder="Enter user name"
                  placeholderTextColor={COLORS.gray}
                  onFocus={() => setFieldTouched('username')}
                  onBlur={() => setFieldTouched('username', '')}
                  value={values.username}
                  onChangeText={handleChange('username')}
                  autoCapitalize="none"
                  autoCorrect={false}
                  style={styles.input}
                />
              </View>

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

              <Text style={styles.label}>Location</Text>
              <View
                style={styles.inputWrapper(
                  touched.location ? COLORS.gray2 : COLORS.offwhite,
                )}>
                <FontAwesome6
                  name="location-crosshairs"
                  size={20}
                  color={COLORS.gray}
                  style={{marginRight: 10}}
                />
                <TextInput
                  placeholder="Enter location"
                  placeholderTextColor={COLORS.gray}
                  onFocus={() => setFieldTouched('location')}
                  onBlur={() => setFieldTouched('location', '')}
                  value={values.location}
                  onChangeText={handleChange('location')}
                  autoCapitalize="none"
                  autoCorrect={false}
                  style={styles.input}
                />
              </View>

              {touched.location && errors.location && (
                <Text style={styles.errorText}>{errors.location}</Text>
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
              title={'SIGN UP'}
              isValid={isValid}
              onPress={handleSubmit}
            />

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Log in');
              }}>
              <Text style={styles.registerButton}>Login</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default SignUp;
