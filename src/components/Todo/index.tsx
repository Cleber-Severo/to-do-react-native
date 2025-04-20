import { View } from 'react-native';
import React, { useState } from 'react';
import TodoForm from '../TodoForm';
import { styles } from './styles';

const Todo = () => {
	const [todoList, setTodoList] = useState();

	const addTask = (taskText: string) => {
		console.log(taskText);
	};

	return (
		<View style={styles.container}>
			<TodoForm addTask={addTask} />
		</View>
	);
};

export default Todo;
