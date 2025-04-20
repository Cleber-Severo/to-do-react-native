import { FlatList, Text, View } from 'react-native';
import React, { useState } from 'react';
import TodoForm from '../TodoForm';
import { styles } from './styles';
import UUID from 'react-native-uuid'; // Use this for generating UUIDs
import EmptyTodo from '../EmptyTodo';
interface ITask {
	id: string;
	text: string;
}

const Todo = () => {
	const [todoList, setTodoList] = useState<ITask[]>([]);

	console.log(todoList);
	const addTask = (taskText: string) => {
		const newTask = {
			id: UUID.v4(),
			text: taskText,
		};

		setTodoList((prev) => [...prev, newTask]);
	};

	return (
		<View style={styles.container}>
			<TodoForm addTask={addTask} />

			<FlatList
				data={todoList}
				keyExtractor={(item) => item.id}
				showsVerticalScrollIndicator={false}
				renderItem={({ item }) => <Text>{item.text}</Text>}
				ListEmptyComponent={() => <EmptyTodo />}
				style={styles.list}
			/>
		</View>
	);
};

export default Todo;
