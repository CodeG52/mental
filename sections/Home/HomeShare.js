import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { windowWidth } from "../../utils/Dimensions";

const circleSize = 0.16 * windowWidth;
const circleRadius = 0.36 * circleSize;

const HomeShare = () => {
	return (
		<View style={styles.container}>
			<View style={styles.imageWrapper}>
				<Image
					source={{
						uri: "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
					}}
					style={{ height: "100%", width: "100%", resizeMode: "cover" }}
				/>
			</View>
			<TextInput
				style={styles.textArea}
				placeholder="Share anything you want"
				placeholderTextColor={"#717171"}
			/>
		</View>
	);
};

export default HomeShare;

const styles = StyleSheet.create({
	container: {
		height: "100%",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	imageWrapper: {
		height: circleSize,
		width: circleSize,
		backgroundColor: "yellow",
		borderRadius: circleRadius,
		overflow: "hidden",
	},
	textArea: {
		flex: 1,
		marginLeft: 10,
		backgroundColor: "#2b2b2b",
		height: circleSize,
		borderRadius: 0.9 * circleRadius,
		paddingHorizontal: 15,
		fontWeight: "700",
	},
});
