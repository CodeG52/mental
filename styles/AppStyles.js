import { StyleSheet } from "react-native";

export const AppStyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#000000",
		padding: 10,
		paddingHorizontal: 20,
	},
	title: {
		color: "#ffffff",
		fontWeight: "800",
		fontSize: 24,
	},
	subtitle: {
		color: "#696969",
		fontWeight: "800",
	},
	normalText: {
		color: "#ffffff",
		fontWeight: "800",
	},
});

export const homeStyles = StyleSheet.create({
	container: {
		justifyContent: "space-between",
		backgroundColor: "#000000",
	},
});

export const profileStyles = StyleSheet.create({
	container: {
		justifyContent: "space-between",
		backgroundColor: "#000000",
		paddingHorizontal: 0,
	},
	top: {
		height: "55%",
	},
	bottom: {
		flex: 1,
		paddingHorizontal: 20,
		justifyContent: "space-between",
	},
});
