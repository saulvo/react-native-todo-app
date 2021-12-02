import { Feather } from '@expo/vector-icons';
import {
  Box,
  Button,
  Center,
  HStack,
  Input,
  useColorMode,
  useColorModeValue,
  useToken,
} from 'native-base';
import React, { FC, useCallback, useState } from 'react';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import AnimatedCheck from '../../AnimatedCheck';
import AnimatedColorText from '../../AnimatedColorText';

export interface TaskItemType {
  id: string;
  subject: string;
  done: boolean;
}

interface Props {
  task: TaskItemType;
  isEditing: boolean;
  onRemove: (id: string) => void;
  onUpdate: (id: string) => void;
  onFinishEditing: () => void;
  onChangeSubject: (item: TaskItemType, newSubject: string) => void;
  onPressLabel: (item: TaskItemType) => void;
}
const AnimatedBox = Animated.createAnimatedComponent(Box);
const TaskItem: FC<Props> = ({
  task,
  isEditing,
  onRemove,
  onUpdate,
  onChangeSubject,
  onFinishEditing,
  onPressLabel,
}) => {
  const { colorMode } = useColorMode();
  const progress = useSharedValue(1);
  const [hide, setHide] = useState(false);

  const opacity = useAnimatedStyle(() => {
    progress.value = withTiming(hide ? 0 : 1, { duration: 500 });
    return {
      opacity: progress.value,
    };
  }, [hide]);

  const handleChangeSubject = useCallback(
    (item: TaskItemType, newSubject: string) => {
      onChangeSubject(item, newSubject);
    },
    [onChangeSubject],
  );

  return (
    <AnimatedBox m={1.5} style={opacity}>
      <Swipeable
        renderRightActions={() => <Box w='1/3' />}
        onSwipeableRightOpen={() => {
          onRemove(task.id);
        }}
        onSwipeableRightWillOpen={() => setHide(true)}
        onSwipeableWillClose={() => setHide(false)}>
        <Box
          borderRadius='5'
          bg={hide ? 'transparent' : colorMode === 'dark' ? 'dark.50' : 'dark.900'}>
          <HStack minW='full' p={1} alignItems='center'>
            <Button p={0} m={1.5} h={30} borderRadius={5} onPress={() => onUpdate(task.id)}>
              <AnimatedCheck
                checked={task.done}
                color={useToken('colors', 'violet.500')}
                bg={useColorModeValue('dark.700', 'dark.200')}
              />
            </Button>
            {!isEditing && (
              <AnimatedColorText
                flex={1}
                text={task.subject}
                color={{
                  dark: useToken('colors', 'dark.900'),
                  light: useToken('colors', 'dark.50'),
                }}
                ml={1.5}
                mt={0.3}
                fontSize='18'
                opacity={hide ? 0 : 1}
                textDecorationLine={task.done ? 'line-through' : 'none'}
                onPress={() => onPressLabel(task)}
              />
            )}
            {isEditing && (
              <Input
                value={task.subject}
                flex={1}
                pl={0}
                h={35}
                ml={1.5}
                variant='underlined'
                size='md'
                fontSize='18'
                placeholder='Enter new task...'
                _focus={{ borderColor: 'violet.500' }}
                autoFocus
                blurOnSubmit
                onChange={(e) => handleChangeSubject(task, e.nativeEvent.text)}
                onBlur={() => onFinishEditing()}
              />
            )}
          </HStack>
        </Box>
      </Swipeable>
      <Box
        position='absolute'
        top='0'
        left='0'
        w='full'
        h='full'
        bg='red.500'
        zIndex='-1'
        borderRadius='5'>
        <Center ml='auto' h='full' pr={3}>
          <Feather name='trash-2' size={22} color='white' />
        </Center>
      </Box>
    </AnimatedBox>
  );
};

export default TaskItem;
