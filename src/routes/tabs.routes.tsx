import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Text, View } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../@theme/colors';
import { fonts } from '../@theme/fonts';
import AboutActiveIcon from '../assets/icons/about-active-icon.svg';
import AboutIcon from '../assets/icons/about-icon.svg';
import AssistanceActiveIcon from '../assets/icons/assistance-active-icon.svg';
import AssistanceIcon from '../assets/icons/assistance-icon.svg';
import HomeActiveIcon from '../assets/icons/home-active-icon.svg';
import HomeIcon from '../assets/icons/home-icon.svg';
import { MyStack } from './homeStack.routes';

function About() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>About!</Text>
    </View>
  );
}

function Assistance() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Assistance!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

type tabIconProps = {
  focused: boolean;
  route: {
      name: string;
  };
};

function tabIcon({ focused, route }: tabIconProps) {
  if (route.name === 'HomeTab') {
      if (focused) {
          return <HomeActiveIcon width={16} height={18} />;
      }
      return <HomeIcon width={16} height={18} />;
  }
  if (route.name === 'Assistance') {
      if (focused) {
          return <AssistanceActiveIcon width={16} height={18} />;
      }
      return <AssistanceIcon width={16} height={18} />;
  }
  if (route.name === 'About') {
      if (focused) {
          return <AboutActiveIcon width={16} height={18} />;
      }
      return <AboutIcon width={16} height={18} />;
  }
}

export function Tabs() {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => tabIcon({ focused, route }),
        tabBarActiveTintColor: colors.mainGreen,
        tabBarInactiveTintColor: colors.gray4,
        tabBarLabelStyle: {
          fontFamily: fonts.medium,
          fontSize: 12,
          marginBottom: 10,
        },
        tabBarStyle: {
          borderTopWidth: 0,
          backgroundColor: '#fff',
          height: 60 + insets.bottom,
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          position: 'absolute',
        },
        tabBarItemStyle: {
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          backgroundColor: '#fff',
        }
      })}
    >
      <Tab.Screen 
        name="HomeTab" 
        component={MyStack}
        options={{
          tabBarLabel: 'Início'
        }}
      />
      <Tab.Screen 
        name="Assistance"
        component={Assistance}
        options={{
          tabBarLabel: 'Direcionamento'
        }}
      />
      <Tab.Screen 
        name="About" 
        component={About}
        options={{
          tabBarLabel: 'Sobre'
        }}
      />
    </Tab.Navigator>
  );
}