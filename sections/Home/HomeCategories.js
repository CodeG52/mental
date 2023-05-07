import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CategoriesButton from "../../components/Home/CategoriesButton";
import { LinearGradient } from "expo-linear-gradient";

const HomeCategories = () => {
	const categories = ["Recent", "Friends"];
	return (
		<LinearGradient
			colors={["#403c47", "#252525"]}
			locations={[0.2, 0.5]}
			style={styles.container}
			start={[0, 1]}
			end={[1, 0]}
		>
			{categories.map((categ, idx) => (
				<CategoriesButton
					key={idx}
					title={categ}
					isActive={categ === "Recent"}
				/>
			))}
		</LinearGradient>
	);
};

export default HomeCategories;

const styles = StyleSheet.create({
	container: {
		height: "100%",
		alignItems: "center",
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 10,
		borderRadius: 20,
	},
});
