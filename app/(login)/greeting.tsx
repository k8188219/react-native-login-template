import { memo } from 'react';
import { StyleSheet } from 'react-native';
import {
  Background,
  Logo,
  Header,
  Paragraph,
  Button,
  Link,
} from '../../components';

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
    color: '#6750a4',
  },
});

export default memo(HomeScreen);
