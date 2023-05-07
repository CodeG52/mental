import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { AppStyles } from "../../styles/AppStyles";

const HomeHero = () => {
	return (
		<View style={styles.container}>
			<Text style={AppStyles.title}>Hello Yibo! 🥰</Text>
			<Text style={AppStyles.subtitle}>What's bothering you?</Text>
		</View>
	);
};

export default HomeHero;

const styles = StyleSheet.create({
	container: {
		height: "100%",
		justifyContent: "space-around",
	},
});
