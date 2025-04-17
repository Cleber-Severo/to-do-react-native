import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { colors } from '../../../styles/colors';
import Header from '../../components/Header';

const Home = () => {
	return (
		<View style={styles.wrapper}>
			<Header />
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({
	wrapper: {
		backgroundColor: colors['gray-600'],
		flex: 1,
	},
});
