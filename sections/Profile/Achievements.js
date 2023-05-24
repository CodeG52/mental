import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { Entypo, AntDesign } from "@expo/vector-icons";

import { AppStyles } from "../../styles/AppStyles";
import { LinearGradient } from "expo-linear-gradient";
import { windowHeight } from "../../utils/Dimensions";

const Achievements = () => {
	return (
		<LinearGradient
			colors={["#403c47", "#252525"]}
			locations={[0.2, 0.5]}
			style={styles.container}
			start={[0, 1]}
			end={[1, 0]}
		>
			<View style={styles.iconWrapper}>
				<Entypo name="trophy" size={24} color="#ffffff" />
			</View>
			<Text style={[AppStyles.normalText, { flex: 1 }]}>Achievements</Text>

			<View style={styles.emojisWrapper}>
				<View style={[styles.emojiWrapper, { position: "absolute", left: 0 }]}>
					<Text style={[styles.text]}>🥰</Text>
				</View>
				<View
					style={[styles.emojiWrapper, { position: "absolute", left: "30%" }]}
				>
					<View style={[styles.text]}>
						<AntDesign name="heart" size={30} color="#ff0000" />
					</View>
				</View>
				<View
					style={[styles.emojiWrapper, { position: "absolute", left: "60%" }]}
				>
					<Text style={[styles.text]}>👍🏼</Text>
				</View>
			</View>
		</LinearGradient>
	);
};

export default Achievements;

const styles = StyleSheet.create({
	container: {
		height: 0.1 * windowHeight,
		backgroundColor: "#2f2f2f",
		borderRadius: 15,
		paddingHorizontal: 15,
		flexDirection: "row",
		alignItems: "center",
	},
	iconWrapper: {
		backgroundColor: "#000000",
		padding: 10,
		borderRadius: 15,
		marginRight: 10,
	},
	emojisWrapper: {
		flexDirection: "row",
		alignItems: "center",
		position: "relative",
		width: "30%",
	},
	emojiWrapper: {
		backgroundColor: "#000000a1",
		borderRadius: 50,
		padding: 2,
	},
	text: {
		fontSize: 24,
		backgroundColor: "#353636",
		padding: 5,
		borderRadius: 50,
		justifyContent: "center",
		alignItems: "center",
	},
});
