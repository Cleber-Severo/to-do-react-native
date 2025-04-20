import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { colors } from '../../../styles/colors';
import Header from '../../components/Header';
import Todo from '../../components/Todo';

const Home = () => {
	return (
		<View style={styles.wrapper}>
			<Header />
			<Todo />
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({
	wrapper: {
		backgroundColor: colors['gray-500'],
		flex: 1,
	},
});
