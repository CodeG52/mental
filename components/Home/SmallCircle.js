import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

import { windowWidth } from "../../utils/Dimensions";
import { LinearGradient } from "expo-linear-gradient";

const circleSize = 0.19 * windowWidth;
const containerCircle = circleSize + 5;
const imageSize = 0.85 * circleSize;
const containerRadius = 0.36 * circleSize;
const imageRadius = 0.36 * imageSize;

const SmallCircle = () => {
	return (
		<LinearGradient
			colors={["#db5782", "#9b6cc9"]}
			locations={[0.6, 0.8]}
			style={styles.container}
			start={[0, 0.7]}
			end={[0.3, 1]}
		>
			<View style={styles.contents}>
				<Image
					source={{
						uri: "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
					}}
					style={styles.image}
				/>
			</View>
		</LinearGradient>
	);
};

export default SmallCircle;

const styles = StyleSheet.create({
	container: {
		borderRadius: 0.36 * containerCircle,
		height: containerCircle,
		width: containerCircle,
		marginRight: 10,
		justifyContent: "center",
		alignItems: "center",
	},
	contents: {
		height: circleSize,
		width: circleSize,
		borderRadius: containerRadius,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#000000",
	},

	image: {
		height: imageSize,
		width: imageSize,
		borderRadius: imageRadius,
	},
});
