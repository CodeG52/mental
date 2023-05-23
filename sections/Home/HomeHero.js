import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";

import { AppStyles } from "../../styles/AppStyles";
import { AppContext } from "../../services/AppContext";

const HomeHero = () => {
	const { username } = useContext(AppContext);
	return (
		<View style={styles.container}>
			<Text style={AppStyles.title}>Hello {username || "Yibo"}! 🥰</Text>
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
