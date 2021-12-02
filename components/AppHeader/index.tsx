import { Feather } from '@expo/vector-icons';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { HStack, IconButton, useColorMode, useColorModeValue, useToken } from 'native-base';
import React from 'react';

const AppHeader: React.FC = () => {
  const navigation = useNavigation<DrawerNavigationProp<{}>>();
  const { colorMode, toggleColorMode } = useColorMode();

  const handlePressMenuButton = React.useCallback(() => {
    navigation.openDrawer();
  }, [navigation]);

  return (
    <HStack safeArea px={2} pt={3} w='full' alignItems='center' justifyContent='space-between'>
      <IconButton
        onPress={handlePressMenuButton}
        borderRadius={100}
        colorScheme='dark'
        _icon={{
          as: Feather,
          name: 'menu',
          size: 8,
          color: useToken('colors', `${colorMode === 'dark' ? 'dark.900' : 'dark.50'}`),
        }}
      />
      <IconButton
        onPress={toggleColorMode}
        borderRadius={50}
        colorScheme='dark'
        bg={useColorModeValue('dark.600', 'dark.200')}
        _icon={{
          as: Feather,
          name: colorMode === 'dark' ? 'sun' : 'moon',
          size: 5,
          color: useColorModeValue('violet.500', 'yellow.300'),
        }}
      />
    </HStack>
  );
};

export default AppHeader;
