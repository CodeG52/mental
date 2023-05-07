import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";

import { LinearGradient } from "expo-linear-gradient";

import { windowWidth } from "../../utils/Dimensions";

const circleSize = 0.28 * windowWidth;
const containerCircle = circleSize + 5;
const containerRadius = 0.4 * containerCircle;
const circleRadius = 0.4 * circleSize;
const profileImgSize = 0.85 * circleSize;

const CoverImgProfile = () => {
	const coverImg = {
		uri: "https://www.shutterstock.com/image-illustration/modern-cars-studio-room-3d-260nw-735402217.jpg",
	};

	return (
		<View style={styles.container}>
			<ImageBackground source={coverImg} style={styles.coverImage}>
				<LinearGradient
					colors={["transparent", "#000000"]}
					locations={[0.4, 0.8]}
					style={styles.coverImgWrapper}
				>
					<LinearGradient
						colors={["#db5783ff", "#9a6cc9ff"]}
						locations={[0.6, 0.8]}
						style={styles.gradient}
						start={[0, 0.7]}
						end={[0.3, 1]}
					>
						<View style={styles.imageWrapper}>
							<Image source={coverImg} style={styles.profileImage} />
						</View>
					</LinearGradient>
				</LinearGradient>
			</ImageBackground>
		</View>
	);
};

export default CoverImgProfile;

const styles = StyleSheet.create({
	container: {
		backgroundColor: "green",
		height: "50%",
	},
	coverImage: {
		flex: 1,
		resizeMode: "cover",
		justifyContent: "center",
	},
	gradient: {
		borderRadius: containerRadius,
		height: containerCircle,
		width: containerCircle,
		position: "absolute",
		bottom: "-10%",
		alignSelf: "center",
		alignItems: "center",
		justifyContent: "center",
	},
	coverImgWrapper: {
		flex: 1,
		position: "relative",
	},
	imageWrapper: {
		backgroundColor: "#000000",
		width: circleSize,
		height: circleSize,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: circleRadius,
	},
	profileImage: {
		height: profileImgSize,
		width: profileImgSize,
		borderRadius: 0.4 * profileImgSize,
	},
});
