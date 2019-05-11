import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ViewStyle, TextStyle, PixelRatio } from 'react-native';

interface Style {
	header: ViewStyle;
	disabledHeader: ViewStyle;
	title: TextStyle;		
}

export default class LongButton extends Component<{
	goto?: (e: any) => any;
	disabled?: boolean | false;
	styleHeader?: ViewStyle;
	styleText?: TextStyle;
}> {
	render() {
		const { children, goto, disabled, styleHeader, styleText } = this.props;

		return (
			<TouchableOpacity onPress={goto} disabled={disabled} >
				<View style={disabled === true ? styles.disabledHeader : [styles.header, styleHeader]}>
					<Text style={[styles.title, styleText]}>{children}</Text>
				</View>
			</TouchableOpacity>
		);
	}
}

console.log(PixelRatio.getPixelSizeForLayoutSize(51.3));
console.log(PixelRatio.getPixelSizeForLayoutSize(305));
const styles = StyleSheet.create<Style>({
	header: {
		height: 51.3,
		paddingTop: 17.8,
		paddingBottom: 17.8,
    width: 305,
    borderRadius: 25.65,
    backgroundColor: '#354052'
	},
	disabledHeader: {
		backgroundColor: 'grey',
		padding: 5,
		marginLeft: 10, 
		marginRight: 10, 
		width: 160
	},
	title: {
		textAlign: 'center',
		color: 'white',
		fontSize: 13.8
	}
});