import { useColorModeValue } from 'native-base';
import React, { useCallback, useState } from 'react';
import shortid from 'shortid';
import AnimatedColorBox from '../components/AnimatedColorBox';
import AppHeader from '../components/AppHeader';
import Banner from '../components/Banner';
import TaskList from '../components/TaskList';
import { TaskItemType } from '../components/TaskList/TaskItem';

const initialData = [
  {
    id: shortid.generate(),
    subject: 'Make coffee',
    done: true,
  },
  {
    id: shortid.generate(),
    subject: 'Build Todo App',
    done: false,
  },
];

const HomeScreen = () => {
  const [data, setData] = useState<Array<TaskItemType>>(initialData);
  const [editingItemId, setEditingItemId] = useState<string | null>(null);

  const handleOnRemove = (id: string) => {
    setData((list) => list.filter((x) => x.id !== id));
  };

  const handleOnUpdate = useCallback((id: string) => {
    setData((list) => {
      const idx = list.findIndex((item) => item.id === id);
      return [
        ...list.slice(0, idx),
        {
          ...list[idx],
          done: !list[idx].done,
        },
        ...list.slice(idx + 1),
      ];
    });
  }, []);

  const handleChangeTaskItemSubject = useCallback((item: TaskItemType, newSubject: string) => {
    setData((list) => {
      const idx = list.findIndex((x) => x.id === item.id);
      return [
        ...list.slice(0, idx),
        {
          ...list[idx],
          subject: newSubject,
        },
        ...list.slice(idx + 1),
      ];
    });
  }, []);

  const handleFinishEditingTaskItem = useCallback(() => {
    setEditingItemId(null);
  }, []);

  const handlePressTaskItemLabel = useCallback((item) => {
    setEditingItemId(item.id);
  }, []);

  const handleOnAddSubject = () => {
    if (data.length > 0 && data[0].subject === '') {
      setEditingItemId(data[0].id);
      return;
    }

    const id = shortid.generate();
    setData((list) => [
      ...list,
      {
        id,
        subject: '',
        done: false,
      },
    ]);
    setEditingItemId(id);
  };

  return (
    <AnimatedColorBox w='full' h='full' bg={useColorModeValue('dark.900', 'dark.50')}>
      <AppHeader />
      <Banner title="What's up, Saul Vo!" image={require('../assets/hello.png')} />
      <TaskList
        list={data}
        onRemove={handleOnRemove}
        onUpdate={handleOnUpdate}
        editingItemId={editingItemId}
        onChangeSubject={handleChangeTaskItemSubject}
        onFinishEditing={handleFinishEditingTaskItem}
        onPressLabel={handlePressTaskItemLabel}
        onAddSubject={handleOnAddSubject}
      />
    </AnimatedColorBox>
  );
};

export default HomeScreen;
