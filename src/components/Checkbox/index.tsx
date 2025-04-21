import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { styles } from './styles';
import { colors } from '../../../styles/colors';
import Feather from '@expo/vector-icons/Feather';

interface CheckboxProps {
	selected: boolean;
	onClick: () => void;
}

export default function Checkbox({ selected, onClick }: CheckboxProps) {
	return (
		<TouchableOpacity
			style={{
				...styles.container,
				borderColor: selected ? colors['purple-dark'] : colors['blue'],
				backgroundColor: selected ? colors['purple-dark'] : 'transparent',
			}}
			onPress={onClick}
		>
			{selected && <Feather name='check' size={10} color='white' />}
		</TouchableOpacity>
	);
}
