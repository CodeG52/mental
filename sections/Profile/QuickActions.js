import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";

import {
	MaterialCommunityIcons,
	Entypo,
	FontAwesome,
} from "@expo/vector-icons";

import { windowWidth } from "../../utils/Dimensions";

const circleSize = 0.2 * windowWidth;

const QuickActions = () => {
	const [isActive, setActive] = useState(1);

	// const progressActiveness = () => {
	// 	if (isActive === 3) {
	// 		setActive((prev) => prev - 2);
	// 	} else {
	// 		setActive((prev) => prev + 1);
	// 	}
	// };

	// useEffect(() => {
	// 	setInterval(progressActiveness, 5000);
	// }, []);

	return (
		<View style={styles.container}>
			<View
				style={[
					styles.outerCircle,
					{ backgroundColor: isActive === 1 ? "#f94c84" : "#000000" },
				]}
			>
				<View
					style={[
						styles.innerCircle,
						{
							backgroundColor: isActive === 1 ? "#f94c84" : "#000000",
							borderColor: isActive === 1 ? "#f94c84" : "#ead2f1",
						},
					]}
				>
					<View
						style={[
							styles.iconWrapper,
							{ backgroundColor: isActive === 1 ? "#f94c84" : "#484848" },
						]}
					>
						<MaterialCommunityIcons
							name="note-text-outline"
							size={36}
							color="#ffffff"
						/>
					</View>
				</View>
			</View>
			<View
				style={[
					styles.outerCircle,
					{ backgroundColor: isActive === 2 ? "#f94c84" : "#000000" },
				]}
			>
				<View
					style={[
						styles.innerCircle,
						{
							backgroundColor: isActive === 2 ? "#f94c84" : "#000000",
							borderColor: isActive === 2 ? "#f94c84" : "#9c78a7",
						},
					]}
				>
					<View
						style={[
							styles.iconWrapper,
							{ backgroundColor: isActive === 2 ? "#f94c84" : "#484848" },
						]}
					>
						<Entypo name="feather" size={36} color="#ffffff" />
					</View>
				</View>
			</View>
			<View
				style={[
					styles.outerCircle,
					{ backgroundColor: isActive === 3 ? "#f94c84" : "#000000" },
				]}
			>
				<View
					style={[
						styles.innerCircle,
						{
							backgroundColor: isActive === 3 ? "#f94c84" : "#000000",
							borderColor: isActive === 3 ? "#f94c84" : "#df6890",
						},
					]}
				>
					<View
						style={[
							styles.iconWrapper,
							{ backgroundColor: isActive === 3 ? "#f94c84" : "#484848" },
						]}
					>
						<FontAwesome name="camera-retro" size={36} color="#ffffff" />
					</View>
				</View>
			</View>
		</View>
	);
};

export default QuickActions;

const styles = StyleSheet.create({
	container: {
		marginVertical: 10,
		flexDirection: "row",
		justifyContent: "space-between",
	},
	outerCircle: {
		height: circleSize,
		width: circleSize,
		borderRadius: 50,
		justifyContent: "center",
		alignItems: "center",
	},
	innerCircle: {
		height: 0.95 * circleSize,
		width: 0.95 * circleSize,
		borderRadius: 50,
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 3,
		backgroundColor: "#000000",
		padding: 5,
	},
	iconWrapper: {
		height: 0.75 * circleSize,
		width: 0.75 * circleSize,
		borderRadius: 50,
		justifyContent: "center",
		alignItems: "center",
	},
});
