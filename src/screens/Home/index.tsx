import React from 'react';
import { Background } from '../../components/Background';
import { MenuButton } from '../../components/MenuButton';

function Home() {
    return (
        <Background
          contentContainerStyle={{ paddingTop: 20 }}
        >
          <MenuButton 
            title='Definição e etiologia da sífilis'
            icon='pill'
            onPress={() => 1}
          />
          <MenuButton 
            title='Classificação clínica da sífilis'
            icon='pill'
            onPress={() => 1}
          />
          <MenuButton 
            title='Transmissão'
            icon='pill'
            onPress={() => 1}
          />
        </Background>
      );
}

export { Home };
