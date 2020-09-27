import React from 'react';
import {
  Container,
  ImageDestak,
  Icon,
  Gradient,
  CarrouselNovidades,
  CarrouselPrincipal,
  ButtonWatch,
  Text,
  ItemCarrousel
} from './styles';
import { FlatList } from 'react-native'

const Home: React.FC = () => {
  return (
    <Container>
      <CarrouselPrincipal>
        <FlatList
          horizontal
          pagingEnabled
          data={[0, 1, 2, 3]}
          renderItem={({ item }) => {
            return (
              <ItemCarrousel>
                <ImageDestak source={{ uri: 'https://br.web.img3.acsta.net/pictures/17/05/29/23/31/530814.jpg' }} />
                <Gradient
                  colors={["transparent", "rgba(0,0,0,0.9)", "rgba(0,0,0,1)"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}>
                  <Icon name="share" size={30} color="white" />
                  <ButtonWatch>
                    <Icon name="controller-play" size={20} color="black" />
                    <Text>Assistir</Text>
                  </ButtonWatch>
                  <Icon name="info" size={30} color="white" />
                </Gradient>
              </ItemCarrousel>
            )
          }}
          keyExtractor={(item, index) => `${item}_${index}`} />

      </CarrouselPrincipal>

      <CarrouselNovidades>

      </CarrouselNovidades>
    </Container>
  )
}

export default Home;