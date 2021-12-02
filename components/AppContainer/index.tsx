import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import React from 'react';
import theme from '../../contants/theme';

interface Props {
  children: React.ReactNode;
}

const AppContainer: React.FC<Props> = ({ children }) => {
  return (
    <NavigationContainer>
      <StatusBar style='auto' />
      <NativeBaseProvider theme={theme}>{children}</NativeBaseProvider>
    </NavigationContainer>
  );
};

export default AppContainer;
