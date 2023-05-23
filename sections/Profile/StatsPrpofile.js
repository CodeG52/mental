import { StyleSheet, Text, View } from "react-native";
import React from "react";

import ButtonProfile from "./ButtonProfile";

import { AppStyles } from "../../styles/AppStyles";

const StatsPrpofile = () => {
	return (
		<View style={styles.container}>
			<View>
				<Text style={[AppStyles.title, styles.text]}>Wang Yibo</Text>
				<Text style={[AppStyles.subtitle, styles.text]}>
					Member for 2 years
				</Text>
			</View>
			<View style={styles.stats}>
				<View>
					<Text style={[AppStyles.title, styles.text]}>10.6K</Text>
					<Text style={[AppStyles.subtitle, styles.text]}>Followers</Text>
				</View>
				<View style={styles.horizontalLine}></View>
				<View>
					<Text style={[AppStyles.title, styles.text]}>1.2K</Text>
					<Text style={[AppStyles.subtitle, styles.text]}>Following</Text>
				</View>
			</View>
			<View style={styles.twinButtons}>
				<ButtonProfile title="Here To Help" />
				<ButtonProfile title="I Need Help" isACtive={true} />
			</View>
		</View>
	);
};

export default StatsPrpofile;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: "6%",
		justifyContent: "space-around",
	},
	text: {
		textAlign: "center",
	},
	stats: {
		flexDirection: "row",
		justifyContent: "center",
	},
	horizontalLine: {
		width: 2,
		backgroundColor: "#2d2d2d",
		marginHorizontal: 10,
	},
	twinButtons: {
		alignSelf: "center",
		flexDirection: "row",
	},
});
