import { FlatList, ImageBackground, StyleSheet, View } from "react-native";
import React from "react";

import { Ionicons } from "@expo/vector-icons";

import SmallCircle from "../../components/Home/SmallCircle";

import { windowWidth } from "../../utils/Dimensions";
import { LinearGradient } from "expo-linear-gradient";

const circleSize = 0.19 * windowWidth + 5;
const circleRadius = 0.36 * circleSize;

const HomeStories = () => {
	const stories = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	return (
		<View style={styles.container}>
			<View style={styles.contents}>
				<ImageBackground
					source={{
						uri: "https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg",
					}}
					style={styles.image}
					imageStyle={{ borderRadius: circleRadius }}
				>
					<LinearGradient
						colors={["#db578363", "#9a6cc965"]}
						locations={[0.6, 0.8]}
						style={styles.gradient}
						start={[0, 0.7]}
						end={[0.3, 1]}
					>
						<Ionicons name="ios-add-circle" size={30} color="#ffffff" />
					</LinearGradient>
				</ImageBackground>
			</View>
			<FlatList
				horizontal
				data={stories}
				keyExtractor={(story) => story}
				renderItem={() => <SmallCircle />}
			/>
		</View>
	);
};

export default HomeStories;

const styles = StyleSheet.create({
	container: { flexDirection: "row" },
	contents: {
		height: circleSize,
		width: circleSize,
		borderRadius: circleRadius,
		justifyContent: "center",
		alignItems: "center",
		marginRight: 10,
	},
	image: {
		height: circleSize,
		width: circleSize,
		justifyContent: "center",
		alignItems: "center",
	},
	gradient: {
		borderRadius: circleRadius,
		height: circleSize,
		width: circleSize,
		justifyContent: "center",
		alignItems: "center",
	},
});
