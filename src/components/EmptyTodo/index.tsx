import { Image, Text, View } from 'react-native';
import React, { Component } from 'react';
import { styles } from './styles';

export class EmptyTodo extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Image source={require('../../assets/clipboardIcon.png')} />

				<Text style={styles.text}>Você ainda não tem tarefas cadastradas</Text>
				<Text style={styles.subText}>Crie tarefas e organize seus itens a fazer</Text>
			</View>
		);
	}
}

export default EmptyTodo;
