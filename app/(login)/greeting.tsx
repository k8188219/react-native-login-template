import React, { memo } from 'react';
import Background from '@/components/login/Background';
import Logo from '@/components/login/Logo';
import Header from '@/components/login/Header';
import Paragraph from '@/components/login/Paragraph';
import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';
import Button from '@/components/login/Button';

const HomeScreen = () => (
  <Background>
    <Logo />
    <Header>Login Template</Header>

    <Paragraph>
      The easiest way to start with your amazing application.
    </Paragraph>

    <Link href="/login" asChild>
      <Button>
        Login
      </Button>
    </Link>

    <Link href="/register" asChild>
      <Button style={styles.button} labelStyle={styles.text}>
        Sign Up
      </Button>
    </Link>
  </Background>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 16,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
    color: '#6750a4'
  },
});

export default memo(HomeScreen);
