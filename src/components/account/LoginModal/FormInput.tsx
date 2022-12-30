import React from 'react';
import {Controller, FieldErrorsImpl} from 'react-hook-form';
import {StyleSheet, TextInput} from 'react-native';
import {Text} from 'react-native-paper';

import theme from '~src/theme';

const styles = StyleSheet.create({
  input: {
    ...theme.fonts.light,
    margin: 4,
    backgroundColor: theme.colors.primary,
    paddingVertical: 2,
    paddingLeft: 6,
    paddingHorizontal: 90,
    color: theme.colors.backdrop,
  },
  label: {
    color: theme.colors.primary,
    marginLeft: 8,
  },
  errors: {
    marginLeft: 8,
  },
});

type ErrorsType = Partial<
  FieldErrorsImpl<{
    email: string;
    password: string;
  }>
>;

type Props = {
  errors: ErrorsType;
  control: any;
  name: string;
  pattern: RegExp;
};

const FormInput: React.FC<Props> = ({errors, control, name, pattern}) => {
  console.log(errors);
  return (
    <>
      <Controller
        control={control}
        rules={{
          required: true,
          pattern,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <>
            <Text style={styles.label}>{name}</Text>
            <TextInput
              accessibilityLabel={`input for ${name}`}
              style={styles.input}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder={name}
              secureTextEntry={name === 'password'}
            />
          </>
        )}
        name={name}
      />
      {errors[name as keyof ErrorsType] && (
        <Text style={styles.errors}>Please enter a valid {name}</Text>
      )}
    </>
  );
};

export default FormInput;
