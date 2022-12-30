import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Modal,
  View,
  Text,
  Pressable,
} from 'react-native';
import {Button} from 'react-native-paper';
import {useForm} from 'react-hook-form';
import FormInput from './FormInput';
import {EMAIL_REGEX, PASSWORD_REGEX} from '~src/constants';
import theme from '~src/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.accent,
  },
  formContainer: {
    marginTop: 87,
  },
  linksContainer: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'space-around',
  },
  linkContainerSelected: {
    borderBottomColor: theme.colors.primary,
    borderBottomWidth: 2,
  },
  menuText: {
    ...theme.fonts.light,
    letterSpacing: 4,
    fontWeight: '900',
    fontSize: 24,
    color: theme.colors.accent,
    margin: 20,
  },
  linkText: {
    ...theme.fonts.light,
    letterSpacing: 4,
    fontWeight: '900',
    fontSize: 24,
    color: theme.colors.gray,
    margin: 4,
  },
  linkTextSelected: {
    ...theme.fonts.light,
    letterSpacing: 4,
    fontWeight: '900',
    fontSize: 24,
    margin: 4,
    color: theme.colors.primary,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
});

const LoginModal = () => {
  const [loginVisible, setLoginVisible] = useState(false);
  const [selectedView, setSelectedView] = useState('login');

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
    setLoginVisible(!loginVisible);
  };

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={loginVisible}
        onRequestClose={() => {
          setLoginVisible(!loginVisible);
        }}>
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <View style={styles.linksContainer}>
              <Pressable
                style={[
                  selectedView === 'login' && styles.linkContainerSelected,
                ]}
                onPress={() => setSelectedView('login')}>
                <Text
                  style={[
                    selectedView === 'login'
                      ? styles.linkTextSelected
                      : styles.linkText,
                  ]}>
                  login
                </Text>
              </Pressable>
              <Pressable
                style={[
                  selectedView === 'signup' && styles.linkContainerSelected,
                ]}
                onPress={() => setSelectedView('signup')}>
                <Text
                  style={[
                    selectedView === 'signup'
                      ? styles.linkTextSelected
                      : styles.linkText,
                  ]}>
                  signup
                </Text>
              </Pressable>
            </View>
            <View style={styles.inputContainer}>
              <FormInput
                pattern={EMAIL_REGEX}
                errors={errors}
                control={control}
                name="email"
              />
              <FormInput
                pattern={PASSWORD_REGEX}
                errors={errors}
                control={control}
                name="password"
              />
            </View>
            <View style={styles.buttonContainer}>
              <Button
                testID="login-form-submit-button"
                compact={true}
                mode="contained"
                onPress={handleSubmit(onSubmit)}>
                {selectedView}
              </Button>
              <Button
                compact={true}
                mode="contained"
                onPress={() => setLoginVisible(!loginVisible)}>
                Cancel
              </Button>
            </View>
          </View>
        </View>
      </Modal>
      <TouchableOpacity onPress={() => setLoginVisible(!loginVisible)}>
        <Text style={styles.menuText}>LOGIN</Text>
      </TouchableOpacity>
    </>
  );
};

export default LoginModal;
