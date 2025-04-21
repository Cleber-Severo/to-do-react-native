import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import { styles } from './styles';
import { colors } from '../../../styles/colors';

interface TodoFormProps {
	addTask: (task: string) => void;
}

const TodoForm = ({ addTask }: TodoFormProps) => {
	const [taskText, setTaskText] = useState('');
	const [isFocused, setIsFocused] = useState(false);

	const handleAddTodo = () => {
		addTask(taskText);
		setTaskText('');
	};

	const handleFocus = () => setIsFocused(true);
	const handleBlur = () => setIsFocused(false);

	return (
		<View style={styles.form}>
			<TextInput
				style={{
					...styles.input,
					borderColor: isFocused ? colors['purple'] : 'black',
				}}
				placeholder='Adicione uma tarefa'
				placeholderTextColor={colors['gray-300']}
				onChangeText={(text) => setTaskText(text)}
				value={taskText}
				onFocus={handleFocus}
				onBlur={handleBlur}
			/>

			<TouchableOpacity style={styles.button} onPress={handleAddTodo} disabled={!taskText.length}>
				<AntDesign name='pluscircleo' size={18} color='white' />
			</TouchableOpacity>
		</View>
	);
};

export default TodoForm;
