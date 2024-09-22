import { memo, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import {
  BackButton,
  Background,
  Logo,
  Header,
  TextInput,
  Button,
  Link,
} from '../../components';

const RegisterScreen = () => {
  const [name, setName] = useState({ value: '', error: '' });
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });

  return (
    <Background>
      <Link href="/greeting" asChild>
        <BackButton />
      </Link>

      <Logo />

      <Header>Create Account</Header>

      <TextInput
        placeholder="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: '' })}
        errorText={name.error}
      />

      <TextInput
        placeholder="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        errorText={email.error}
        autoCapitalize="none"
        autoComplete="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        placeholder="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        errorText={password.error}
        secureTextEntry
      />

      <Link href="/dashboard" asChild>
        <Button style={styles.button}>
          Sign Up
        </Button>
      </Link>

      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <Link href="/login" asChild>
          <TouchableOpacity>
            <Text style={styles.link}>Login</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
  },
});

export default memo(RegisterScreen);
