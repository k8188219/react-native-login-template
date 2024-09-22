import React, { memo, useState } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import Background from '@/components/login/Background';
import BackButton from '@/components/login/BackButton';
import Logo from '@/components/login/Logo';
import Header from '@/components/login/Header';
import TextInput from '@/components/login/TextInput';
import Button from '@/components/login/Button';
import { Link } from 'expo-router';

const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState({ value: '', error: '' });

  return (
    <Background>
      <Link href="/greeting" asChild>
        <BackButton />
      </Link>

      <Logo />

      <Header>Restore Password</Header>

      <TextInput
        placeholder="E-mail address"
        returnKeyType="done"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        errorText={email.error}
        autoCapitalize="none"
        autoComplete="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <Link href="/login" asChild>
        <Button style={styles.button}>
          Send Reset Instructions
        </Button>
      </Link>

      <Link href="/login" asChild>
        <TouchableOpacity style={styles.back}>
          <Text style={styles.label}>← Back to login</Text>
        </TouchableOpacity>
      </Link>
    </Background>
  );
};

const styles = StyleSheet.create({
  back: {
    width: '100%',
    marginTop: 12,
  },
  button: {
    marginTop: 12,
  },
  label: {
    width: '100%',
  },
});

export default memo(ForgotPasswordScreen);
