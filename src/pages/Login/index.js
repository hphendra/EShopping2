import React from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

// ICONS
import LogoIcon from '../../assets/icons/logo.svg';
import EmailIcon from '../../assets/icons/email.svg';
import PasswordIcon from '../../assets/icons/password.svg';
import EyeIcon from '../../assets/icons/eye.svg';

const Login = ({navigation}) => {
  return (
    <View style={styles.login}>
      <StatusBar barStyle="dark-content" backgroundColor="#fcfcfc" />
      <View style={styles.boxLogo}>
        <LogoIcon width={140} height={140} />
        <Text style={styles.judulLogin}>E Shopping</Text>
      </View>
      <View style={styles.boxInput}>
        <Text style={styles.judulInput}>Please Login</Text>
        <View style={styles.isiInput}>
          <View style={styles.boxIsiInput}>
            <TextInput placeholder="Email" style={styles.input} />
          </View>
          <EmailIcon width={19} height={19} style={styles.iconInput} />
        </View>
        <View style={styles.isiInput}>
          <View style={styles.boxIsiInput}>
            <TextInput placeholder="Password" style={styles.inputPassword} />
          </View>
          <PasswordIcon width={19} height={19} style={styles.iconInput} />
          <EyeIcon width={19} height={19} style={styles.iconInputEye} />
        </View>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Home')}>
          <View style={styles.buttonLogin}>
            <Text style={styles.textButtonLogin}>Login</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.boxFooter}>
        <Text style={styles.textFooter}>Sign up</Text>
        <Text style={styles.textFooter}>Forgot Password?</Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  login: {
    flex: 1,
    backgroundColor: '#fcfcfc',
    justifyContent: 'center',
    padding: 35,
  },
  boxLogo: {
    // backgroundColor: 'red',
    alignItems: 'center',
  },
  judulLogin: {
    fontSize: 24,
    marginTop: 15,
    fontWeight: '700',
    color: '#303030',
  },
  boxInput: {
    // backgroundColor: 'red',
    marginTop: 60,
  },
  judulInput: {
    fontSize: 22,
    fontWeight: '700',
    color: '#303030',
    marginBottom: 25,
  },
  isiInput: {
    justifyContent: 'center',
    marginBottom: 20,
  },
  boxIsiInput: {
    backgroundColor: 'transparent',
  },
  input: {
    backgroundColor: '#fff',
    elevation: 4,
    height: 53,
    borderRadius: 50,
    fontSize: 16,
    paddingHorizontal: 18,
    paddingLeft: 51,
  },
  inputPassword: {
    backgroundColor: '#fff',
    elevation: 4,
    height: 53,
    borderRadius: 50,
    fontSize: 16,
    paddingHorizontal: 18,
    paddingLeft: 51,
    paddingRight: 51,
  },
  iconInput: {
    position: 'absolute',
    marginLeft: 18,
  },
  iconInputEye: {
    position: 'absolute',
    marginRight: 18,
    right: 0,
  },
  buttonLogin: {
    backgroundColor: '#2cc17d',
    height: 55,
    borderRadius: 55,
    marginTop: 10,
    justifyContent: 'center',
  },
  textButtonLogin: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  boxFooter: {
    // backgroundColor: 'red',
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textFooter: {
    fontSize: 14,
    color: '#a1a1a1',
    fontWeight: '700',
  },
});
