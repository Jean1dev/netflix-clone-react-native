import React from 'react';
import { Container, Logo } from './styles';
//@ts-ignore
import logo from '../../assets/logo.png'

const Splash: React.FC = () => {
  return (
    <Container>
      <Logo source={logo}/>
    </Container>
  )
}

export default Splash;