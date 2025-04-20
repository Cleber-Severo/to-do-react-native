import { StyleSheet } from 'react-native';
import { colors } from '../../../styles/colors';

export const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		flex: 1,
		paddingTop: 70,
		marginTop: 20,
		gap: 7,
		borderTopWidth: 1,
		borderTopColor: colors['gray-400'],
		borderStyle: 'solid',
	},
	text: {
		marginTop: 25,
		color: colors['gray-300'],
		fontWeight: 'bold',
	},
	subText: {
		color: colors['gray-300'],
	},
});
