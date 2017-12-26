import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const ClearButton = ({text, onPress}) => (
	<TouchableOpacity style={styles.container}>
		<View style={styles.view}>
			<Image resizeMode='contain' style={styles.icon} source={require('./img/icon.png')} />
			<Text style={styles.text}>{text}</Text>
		</View>
	</TouchableOpacity>
)

ClearButton.propTypes = {
	text: PropTypes.string,
	onPress: PropTypes.func
}

export default ClearButton;