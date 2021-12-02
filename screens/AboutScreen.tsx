import { Feather } from '@expo/vector-icons';
import { Avatar, Box, HStack, Icon, Text, useColorModeValue, useToken } from 'native-base';
import React from 'react';
import AnimatedColorBox from '../components/AnimatedColorBox';
import AnimatedColorText from '../components/AnimatedColorText';
import AppHeader from '../components/AppHeader';
import Banner from '../components/Banner';
import LinkButton from '../components/LinkButton';

const AboutScreen = () => {
  return (
    <AnimatedColorBox w='full' h='full' bg={useColorModeValue('dark.900', 'dark.50')}>
      <AppHeader />
      <Banner title='About this App' image={require('../assets/work.png')} />
      <Box flex={1} px={2}>
        <AnimatedColorBox
          position='relative'
          p={3}
          w='full'
          bg={useColorModeValue('gray.100', 'gray.800')}
          borderRadius='xl'
          flex='1'>
          <HStack justifyContent='center'>
            <Avatar
              source={require('../assets/avatar.jpg')}
              size='xl'
              borderRadius={100}
              mt={2}
              borderColor='violet.500'
              borderWidth={1}
            />
          </HStack>
          <AnimatedColorText
            fontSize='md'
            w='full'
            mt={4}
            mb={6}
            text="Hello, I'm Saul Vo! I've learned React Native by building a simple ToDo app. I hope you
            enjoy it!"
            color={{
              dark: useToken('colors', 'dark.900'),
              light: useToken('colors', 'dark.300'),
            }}
          />
          <LinkButton
            mb={4}
            colorScheme='red'
            size='lg'
            borderRadius='full'
            href='https://www.youtube.com/c/saulvo'
            leftIcon={<Icon as={Feather} name='youtube' size='sm' opacity={0.8} />}>
            Go to YouTube channel
          </LinkButton>
          <LinkButton
            mb={4}
            colorScheme='purple'
            size='lg'
            borderRadius='full'
            href='https://github.com/sonvt-fe'
            leftIcon={<Icon as={Feather} name='github' size='sm' opacity={0.8} />}>
            Go to my Github
          </LinkButton>
          <LinkButton
            colorScheme='blue'
            size='lg'
            borderRadius='full'
            href='https://saulvo.vercel.app/'
            leftIcon={<Icon as={Feather} name='youtube' size='sm' opacity={0.8} />}>
            Go to my portfolio
          </LinkButton>
        </AnimatedColorBox>
      </Box>
    </AnimatedColorBox>
  );
};

export default AboutScreen;
