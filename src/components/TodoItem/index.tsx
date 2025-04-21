import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { ITask } from '../../types/todo';
import Checkbox from '../Checkbox';
import { styles } from './styles';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { colors } from '../../../styles/colors';

interface TodoItemProps {
	todoItem: ITask;
	updateTask: (id: string) => void;
	deleteTask: (id: string) => void;
}

const TodoItem = ({ todoItem, deleteTask, updateTask }: TodoItemProps) => {
	const { id, isCompleted, text } = todoItem;

	return (
		<View style={styles.container}>
			<View style={styles.subContainer}>
				<Checkbox selected={isCompleted} onClick={() => updateTask(id)} />
				<Text style={styles.text}>{text}</Text>
			</View>

			<TouchableOpacity onPress={() => deleteTask(id)}>
				<FontAwesome5 name='trash-alt' size={18} color={colors['gray-300']} on />
			</TouchableOpacity>
		</View>
	);
};

export default TodoItem;
