import { View, Text } from 'react-native';
import React from 'react';
import { styles } from './styles';

interface TodoInfoProps {
	tasksAmount: number;
	tasksCompletedAmount: number;
}

const TodoInfo = ({ tasksAmount, tasksCompletedAmount }: TodoInfoProps) => {
	return (
		<View style={styles.container}>
			<View style={styles.labelContainer}>
				<Text style={styles.createdText}>Criadas</Text>
				<Text style={styles.counter}>{tasksAmount}</Text>
			</View>

			<View style={styles.labelContainer}>
				<Text style={styles.completedText}>Concluídas</Text>
				<Text style={styles.counter}>{tasksCompletedAmount}</Text>
			</View>
		</View>
	);
};

export default TodoInfo;
