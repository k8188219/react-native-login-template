import React, { memo, useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Background from '@/components/login/Background';
import Logo from '@/components/login/Logo';
import Header from '@/components/login/Header';
import Button from '@/components/login/Button';
import TextInput from '@/components/login/TextInput';
import BackButton from '@/components/login/BackButton';
import { Link } from 'expo-router';

const LoginScreen = () => {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });

  return (
    <Background>
      <Link href="/greeting" asChild>
        <BackButton />
      </Link>
      <Logo />

      <Header>Welcome back.</Header>

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

      <View style={styles.forgotPassword}>
        <Link href="/forget-password" asChild>
          <TouchableOpacity>
            <Text>Forgot your password?</Text>
          </TouchableOpacity>
        </Link>
      </View>
      
      <Link href="/dashboard" asChild>
        <Button>
          Login
        </Button>
      </Link>

      <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <Link href="/register" asChild>
          <TouchableOpacity>
            <Text style={styles.link}>Sign up</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
  },
});

export default memo(LoginScreen);
