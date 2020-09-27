import styled from 'styled-components/native';
import { Entypo } from '@expo/vector-icons';
import LinearGradient from 'expo-linear-gradient';
import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('screen')

export const Container = styled.View`
    background-color: black;
    flex: 1;
`;

export const ImageDestak = styled.Image.attrs({
    resizeMode: 'stretch'
})`
    width: 100%;
    height: 100%;
`

export const Gradient = styled(LinearGradient)`
    position: absolute;
    bottom: 5px;
    flex-direction: row;
    width: 100%;
    justify-content: space-evenly;
`

export const Icon = styled(Entypo)``

export const ButtonWatch = styled.TouchableOpacity`
    background-color: white;
    border-radius: 4px;
    flex-direction: row;
    align-items: center;
    padding: 10px;
`

export const Text = styled.Text``

export const CarrouselPrincipal = styled.View`
    height: 50%;
`

export const CarrouselNovidades = styled.View`

`

export const ItemCarrousel = styled.TouchableOpacity.attrs({
    activeOpacity: 1,
})`
    height: 100%;
    width: ${`${width}px`};
`