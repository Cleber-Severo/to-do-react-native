import { StyleSheet } from 'react-native';
import { colors } from '../../../styles/colors';

export const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 16,
		backgroundColor: colors['gray-500'],
		borderRadius: 10,
		marginBottom: 8,
	},
	subContainer: {
		flexDirection: 'row',
		gap: 8,
	},
	text: {
		color: colors['gray-100'],
	},
});
