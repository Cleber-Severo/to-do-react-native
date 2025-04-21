import { View, Text, TouchableOpacity, Pressable } from 'react-native';
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
				<Text
					numberOfLines={3}
					style={{
						...styles.text,
						textDecorationLine: isCompleted ? 'line-through' : 'none',
						color: isCompleted ? colors['gray-300'] : colors['gray-100'],
					}}
				>
					{text}
				</Text>
			</View>

			<Pressable onPress={() => deleteTask(id)} style={styles.button}>
				<FontAwesome5 name='trash-alt' size={18} color={colors['gray-300']} on />
			</Pressable>
		</View>
	);
};

export default TodoItem;
