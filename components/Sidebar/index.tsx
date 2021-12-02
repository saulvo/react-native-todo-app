import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { Avatar, Heading, HStack, useColorModeValue, VStack } from 'native-base';
import React, { useCallback } from 'react';
import AnimatedColorBox from '../AnimatedColorBox';
import MenuButton from './MenuButton';

type Props = DrawerContentComponentProps;

const Sidebar: React.FC<Props> = (props) => {
  const { state, navigation } = props;
  const currentRoute = state.routeNames[state.index];

  const handlePressMenuMain = useCallback(() => {
    navigation.navigate('Main');
  }, [navigation]);
  const handlePressMenuAbout = useCallback(() => {
    navigation.navigate('About');
  }, [navigation]);
  return (
    <AnimatedColorBox safeArea p={10} pt={20} flex={1} bg={useColorModeValue('violet.100', 'violet.900')}>
      <VStack flex={1} space={2}>
        <HStack justifyContent='center'>
          <Avatar
            source={require('../../assets/logo.png')}
            size='2xl'
            borderRadius={100}
            mb={2}
            borderColor='violet.500'
            borderWidth={1}
            shadow={5}
          />
        </HStack>
        <Heading mb={6} size='xl' textAlign='center'>
          Saul Vo
        </Heading>
        <MenuButton active={currentRoute === 'Main'} onPress={handlePressMenuMain} icon='home'>
          HOME
        </MenuButton>
        <MenuButton active={currentRoute === 'About'} onPress={handlePressMenuAbout} icon='info'>
          ABOUT
        </MenuButton>
      </VStack>
    </AnimatedColorBox>
  );
};

export default Sidebar;
