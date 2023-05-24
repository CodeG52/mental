import { ScrollView, Text, View } from "react-native";
import React from "react";

import { AppStyles, profileStyles as styles } from "../styles/AppStyles";
import CoverImgProfile from "../sections/Profile/CoverImgProfile";
import StatsPrpofile from "../sections/Profile/StatsPrpofile";
import Achievements from "../sections/Profile/Achievements";
import QuickActions from "../sections/Profile/QuickActions";
import BottomProfile from "../sections/Profile/BottomProfile";

const ProfileScreen = () => {
	return (
		<View style={[AppStyles.container, styles.container]}>
			<ScrollView>
				<View style={styles.top}>
					<CoverImgProfile />
					<StatsPrpofile />
				</View>
				<View style={styles.bottom}>
					<Achievements />
					<QuickActions />
					<BottomProfile />
					<BottomProfile />
				</View>
			</ScrollView>
		</View>
	);
};

export default ProfileScreen;
