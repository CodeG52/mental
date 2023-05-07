import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";

import { Ionicons, AntDesign } from "@expo/vector-icons";

import { AppStyles } from "../../styles/AppStyles";

const BottomProfile = () => {
	return (
		<View style={styles.container}>
			<ImageBackground
				source={{
					uri: "https://media.istockphoto.com/id/1302408229/vector/gradient-background-purple-mesh-abstract-purple-pink-red-and-red-vector-blurred-soft-blend.jpg?s=612x612&w=0&k=20&c=Z2d0A5gwVQi1lMW-6-Zy3Qfz3ZJwocQMscMJymX6ssw=",
				}}
				style={{ flex: 1 }}
			>
				<View style={styles.topSection}>
					<Text style={AppStyles.normalText}>
						I am having restless nights. Its hard
					</Text>
				</View>
				<View style={styles.bottomSection}>
					<View style={styles.left}>
						<View style={styles.commentBtn}>
							<Ionicons name="chatbubble-sharp" size={24} color="#ffffff" />
							<Text style={[AppStyles.normalText, { marginLeft: 5 }]}>
								12 comments
							</Text>
						</View>
					</View>
					<View style={styles.right}>
						<View style={styles.rightInnerWrapper}>
							<AntDesign name="heart" size={20} color="#ffffff" />
							<Text style={[AppStyles.normalText, { marginLeft: 10 }]}>10</Text>
						</View>
					</View>
				</View>
			</ImageBackground>
		</View>
	);
};

export default BottomProfile;

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#403c47",
		flex: 1,
		borderRadius: 24,
		overflow: "hidden",
	},
	topSection: {
		height: "70%",
		justifyContent: "center",
		padding: 15,
		borderBottomRightRadius: 24,
	},
	bottomSection: {
		flexDirection: "row",
		justifyContent: "space-between",
		flex: 1,
		// backgroundColor: "#403c47",
	},
	left: {
		// backgroundColor: "purple",
		justifyContent: "center",
		borderBottomRightRadius: 24,
		paddingHorizontal: 15,
		flex: 1,
		borderBottomRightRadius: 24,
	},
	commentBtn: {
		flexDirection: "row",
		backgroundColor: "#d64e676c",
		paddingHorizontal: 15,
		paddingVertical: 5,
		borderRadius: 10,
		alignItems: "center",
		maxWidth: "70%",
	},
	right: {
		width: "30%",
		backgroundColor: "purple",
	},
	rightInnerWrapper: {
		backgroundColor: "#403c47",
		borderTopLeftRadius: 24,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		flex: 1,
	},
});
