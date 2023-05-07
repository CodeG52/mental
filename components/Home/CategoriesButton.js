import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

import { AppStyles } from "../../styles/AppStyles";

const CategoriesButton = ({ title, isActive }) => {
	return (
		<Pressable
			style={[
				styles.container,
				{ backgroundColor: isActive ? "#a06df2" : null },
			]}
			android_ripple={{ color: "#000000" }}
		>
			<Text style={AppStyles.normalText}>{title}</Text>
		</Pressable>
	);
};

export default CategoriesButton;

const styles = StyleSheet.create({
	container: {
		width: "45%",
		alignItems: "center",
		height: "60%",
		justifyContent: "center",
		borderRadius: 10,
	},
});
