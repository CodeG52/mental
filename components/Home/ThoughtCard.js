import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";

import {
	AntDesign,
	Ionicons,
	MaterialCommunityIcons,
} from "@expo/vector-icons";

import { windowWidth } from "../../utils/Dimensions";

import { AppStyles } from "../../styles/AppStyles";
import { LinearGradient } from "expo-linear-gradient";

const imageSize = 0.12 * windowWidth;
const moreButtonSize = 0.9 * imageSize;

const ThoughtCard = () => {
	const personImg = {
		uri: "https://www.shutterstock.com/image-illustration/modern-cars-studio-room-3d-260nw-735402217.jpg",
	};
	return (
		<LinearGradient
			colors={["#403c47", "#606060", "#000000"]}
			locations={[0.3, 0.5, 0.8]}
			style={styles.borderGradient}
			start={[0.2, 0.3]}
			end={[0.9, 1]}
		>
			<LinearGradient
				colors={["#403c47", "#252525"]}
				locations={[0.5, 0.9]}
				style={styles.container}
				start={[0, 1]}
				end={[1, 0]}
			>
				<View style={styles.startSection}>
					<View style={styles.thoughtPublisher}>
						<View style={styles.imgWrapper}>
							<Image
								source={personImg}
								style={{ height: "100%", width: "100%" }}
							/>
						</View>
						<View style={styles.personStatus}>
							<Text style={AppStyles.normalText}>Mark Kyle</Text>
							<Text style={AppStyles.subtitle}>24 secs ago</Text>
						</View>
					</View>
					<View style={styles.more}>
						<View style={styles.dot}></View>
						<View style={styles.dot}></View>
					</View>
				</View>
				<View style={styles.endSection}>
					<ImageBackground
						source={{
							uri: "https://media.istockphoto.com/id/1302408229/vector/gradient-background-purple-mesh-abstract-purple-pink-red-and-red-vector-blurred-soft-blend.jpg?s=612x612&w=0&k=20&c=Z2d0A5gwVQi1lMW-6-Zy3Qfz3ZJwocQMscMJymX6ssw=",
						}}
						style={{ flex: 1 }}
					>
						<View style={styles.middleSection}>
							<View style={styles.middleSectionLeft}>
								<AntDesign name="heart" size={20} color="#ffffff" />
								<Text style={AppStyles.normalText}>10</Text>
							</View>
							<View style={styles.middleSectionRight}>
								<View style={styles.buttonHelpless}>
									<Text style={AppStyles.normalText}>Hopeless</Text>
								</View>
							</View>
						</View>
						<View style={styles.bottomSection}>
							<Text style={AppStyles.normalText}>
								I miss my parents too much and I haven't talked to them in 2
								years.
							</Text>
							<View style={styles.commentBookmarkWrapper}>
								<View style={styles.commentBtn}>
									<Ionicons name="chatbubble-sharp" size={24} color="#ffffff" />
									<Text style={[AppStyles.normalText, { marginLeft: 5 }]}>
										12 comments
									</Text>
								</View>
								<MaterialCommunityIcons
									name="bookmark-minus-outline"
									size={32}
									color="#ffffff"
								/>
							</View>
						</View>
					</ImageBackground>
				</View>
			</LinearGradient>
		</LinearGradient>
	);
};

export default ThoughtCard;

const styles = StyleSheet.create({
	borderGradient: {
		height: "100%",
		// alignItems: "center",
		padding: 2,
		borderRadius: 24,
		overflow: "hidden",
	},
	container: {
		borderRadius: 22,
		overflow: "hidden",
	},
	startSection: {
		height: "25%",
		alignItems: "center",
		padding: 15,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	thoughtPublisher: {
		flexDirection: "row",
		alignItems: "center",
	},
	personStatus: {
		marginLeft: 10,
	},
	more: {
		height: moreButtonSize,
		width: 1.2 * moreButtonSize,
		borderWidth: 1,
		borderRadius: 15,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		borderColor: "#606060",
	},
	dot: {
		width: 5,
		height: 5,
		backgroundColor: "#ffffff",
		marginHorizontal: 5,
		borderRadius: 0.5 * 5,
	},
	imgWrapper: {
		height: imageSize,
		width: imageSize,
		borderRadius: 0.5 * imageSize,
		overflow: "hidden",
	},
	endSection: {
		height: "75%",
		overflow: "hidden",
		borderTopRightRadius: 24,
	},
	middleSection: {
		height: "33%",
		alignItems: "center",
		flexDirection: "row",
	},
	middleSectionLeft: {
		backgroundColor: "#403c47",
		height: "100%",
		width: "25%",
		padding: 15,
		borderBottomRightRadius: 24,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-evenly",
	},
	middleSectionRight: {
		height: "100%",
		flex: 1,
		justifyContent: "center",
		padding: 15,
		borderTopLeftRadius: 24,
	},
	buttonHelpless: {
		borderWidth: 1,
		alignSelf: "flex-end",
		paddingHorizontal: 15,
		paddingVertical: 5,
		borderRadius: 12,
		borderColor: "#afafaf",
	},
	bottomSection: {
		borderRadius: 24,
		flex: 1,
		justifyContent: "space-evenly",
		padding: 15,
		borderTopRightRadius: 0,
	},
	commentBookmarkWrapper: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	commentBtn: {
		flexDirection: "row",
		backgroundColor: "#d64e6763",
		paddingHorizontal: 15,
		paddingVertical: 5,
		borderRadius: 10,
		alignItems: "center",
	},
});
