import { FlatList, Text, View } from 'react-native';
import React, { useState } from 'react';
import TodoForm from '../TodoForm';
import { styles } from './styles';
import UUID from 'react-native-uuid'; // Use this for generating UUIDs
import EmptyTodo from '../EmptyTodo';
import TodoInfo from '../TodoInfo';
import { ITask } from '../../types/todo';
import TodoItem from '../TodoItem';

const Todo = () => {
	const [todoList, setTodoList] = useState<ITask[]>([]);

	const tasksCompletedAmount = todoList.filter((task) => task.isCompleted === true)?.length || 0;
	const tasksAmount = todoList.length;

	const addTask = (taskText: string) => {
		const newTask = {
			id: UUID.v4(),
			text: taskText,
			isCompleted: false,
		};

		setTodoList((prev) => [...prev, newTask]);
	};

	const updateTask = (id: string) => {
		const selectedTask = todoList.find((task) => task.id === id);

		const newTodoList = todoList.map((task) => {
			const isCompleted = task.id !== id ? task.isCompleted : !task.isCompleted;

			return { ...task, isCompleted };
		});

		if (!selectedTask) return;

		setTodoList(newTodoList);
	};

	const deleteTask = (id: string) => {
		console.log('deleteTask fn');
	};

	return (
		<View style={styles.container}>
			<TodoForm addTask={addTask} />

			<TodoInfo tasksAmount={tasksAmount} tasksCompletedAmount={tasksCompletedAmount} />

			<FlatList
				data={todoList}
				keyExtractor={(item) => item.id}
				showsVerticalScrollIndicator={false}
				renderItem={({ item }) => (
					<TodoItem deleteTask={deleteTask} todoItem={item} updateTask={updateTask} />
				)}
				ListEmptyComponent={() => <EmptyTodo />}
				style={styles.list}
			/>
		</View>
	);
};

export default Todo;
