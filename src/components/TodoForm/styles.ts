import { StyleSheet } from 'react-native';
import { colors } from '../../../styles/colors';

export const styles = StyleSheet.create({
	form: { flexDirection: 'row', gap: 4 },
	input: {
		flex: 1,
		backgroundColor: colors['gray-500'],
		borderRadius: 8,
		padding: 16,
		borderWidth: 1,
		borderStyle: 'solid',
		color: colors['gray-100'],
	},
	button: {
		backgroundColor: colors['blue-dark'],
		width: 52,
		height: 52,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 8,
	},
});
