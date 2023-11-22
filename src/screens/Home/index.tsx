import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Background } from '../../components/Background';
import { MenuButton } from '../../components/MenuButton';

function Home() {
    const navigation = useNavigation();

    return (
        <Background>
          <MenuButton 
          title='Definição e Etiologia da Sífilis'
          icon='pill'
          onPress={() => 1}
          />
        </Background>
      );
}

export { Home };
