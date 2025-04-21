import { StyleSheet } from 'react-native';
import { colors } from '../../../styles/colors';

export const styles = StyleSheet.create({
	container: {
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'row',

		marginTop: 30,
		marginBottom: 20,
	},
	labelContainer: {
		flexDirection: 'row',
		gap: 8,
	},
	createdText: {
		color: colors['blue'],
		fontWeight: 'bold',
		fontSize: 14,
	},
	completedText: {
		color: colors['purple'],
		fontWeight: 'bold',
		fontSize: 14,
	},
	counter: {
		backgroundColor: colors['gray-400'],
		color: colors['gray-200'],
		fontWeight: 'bold',
		paddingHorizontal: 10,
		paddingVertical: 2,
		borderRadius: 12,
		fontSize: 12,
	},
});
