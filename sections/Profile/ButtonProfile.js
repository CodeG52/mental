import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

import { AppStyles } from "../../styles/AppStyles";

const ButtonProfile = ({ title, isACtive }) => {
	return (
		<Pressable
			style={[
				styles.container,
				{ backgroundColor: isACtive ? "#f94c84" : "#2b2b2b" },
			]}
			android_ripple={{ color: "#ffffff" }}
		>
			<Text style={AppStyles.normalText}>{title}</Text>
		</Pressable>
	);
};

export default ButtonProfile;

const styles = StyleSheet.create({
	container: {
		marginHorizontal: 10,
		padding: 10,
		borderRadius: 10,
		paddingHorizontal: 15,
	},
});
