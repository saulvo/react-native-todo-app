import { Feather } from '@expo/vector-icons';
import { FlatList, HStack, IconButton, useColorModeValue, useToken } from 'native-base';
import React from 'react';
import AnimatedColorBox from '../AnimatedColorBox';
import TaskItem, { TaskItemType } from './TaskItem';

interface Props {
  list: Array<TaskItemType>;
  editingItemId: string | null;
  onRemove: (id: string) => void;
  onUpdate: (id: string) => void;
  onFinishEditing: () => void;
  onChangeSubject: (item: TaskItemType, newSubject: string) => void;
  onPressLabel: (item: TaskItemType) => void;
  onAddSubject: () => void;
}
const TaskList: React.FC<Props> = ({
  list,
  editingItemId,
  onRemove,
  onUpdate,
  onChangeSubject,
  onFinishEditing,
  onPressLabel,
  onAddSubject,
}) => {
  return (
    <HStack px={2} flex='1'>
      <AnimatedColorBox
        position='relative'
        p={3}
        w='full'
        bg={useColorModeValue('gray.100', 'gray.800')}
        borderRadius='xl'>
        <FlatList
          data={list}
          renderItem={({ item }) => (
            <TaskItem
              task={item}
              isEditing={item.id === editingItemId}
              onRemove={onRemove}
              onUpdate={onUpdate}
              onChangeSubject={onChangeSubject}
              onFinishEditing={onFinishEditing}
              onPressLabel={onPressLabel}
            />
          )}
          keyExtractor={(item) => item.id}
        />
        {!editingItemId && (
          <IconButton
            position='absolute'
            right={4}
            bottom={4}
            borderRadius={50}
            bg={useColorModeValue('dark.600', 'dark.200')}
            p={2}
            colorScheme='dark'
            onPress={onAddSubject}
            _icon={{
              as: Feather,
              name: 'plus',
              size: 10,
              color: useToken('colors', 'dark.500'),
            }}
          />
        )}
      </AnimatedColorBox>
    </HStack>
  );
};

export default TaskList;
