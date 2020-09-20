import React, { useCallback } from 'react';
import { 
  Container,
  Logo, 
  ImageBackground, 
  Input, 
  ContainerINput, 
  Button, 
  Text, 
  Form } from './styles';
//@ts-ignore
import logo from '../../assets/logo.png'
//@ts-ignore
import background from '../../assets/login.jpg'
import { useNavigation } from '@react-navigation/native';

const Login: React.FC = () => {
  const navigation = useNavigation()
  
  const goLogin = useCallback(() => {
    navigation.navigate('Home')
  }, [])

  return (
    <>
      <ImageBackground source={background}>
        <Container>
          <Logo source={logo} />

          <Form>
            <ContainerINput>
              <Input placeholder="Email" />
            </ContainerINput>

            <ContainerINput>
              <Input placeholder="senha" />
            </ContainerINput>

            <Button onPress={goLogin}><Text>Login</Text></Button>

            <Text>Forget Password | Create Account</Text>
          </Form>
        </Container>
      </ImageBackground>
    </>
  )
}

export default Login;