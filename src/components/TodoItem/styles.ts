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
		alignItems: 'center',
	},
	subContainer: {
		flexDirection: 'row',
		gap: 8,
		alignItems: 'center',
	},
	text: {
		color: colors['gray-100'],
		userSelect: 'none',
		maxWidth: 220,
	},
	button: {
		padding: 8,
	},
});
