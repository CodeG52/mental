import { SafeAreaView, ScrollView, Text, View } from "react-native";
import React from "react";

import { AppStyles, profileStyles as styles } from "../styles/AppStyles";
import CoverImgProfile from "../sections/Profile/CoverImgProfile";
import ProfileStats from "../sections/Profile/ProfileStats";
import Achievements from "../sections/Profile/Achievements";
import QuickActions from "../sections/Profile/QuickActions";
import BottomProfile from "../sections/Profile/BottomProfile";

const ProfileScreen = () => {
	return (
		<View style={[AppStyles.container, styles.container]} >
			<View style={styles.top}>
				<CoverImgProfile />
				<ProfileStats />
			</View>
			<View style={[styles.bottom, { marginTop: 40 }]}>
				<Achievements />
				<QuickActions />
				<BottomProfile />
			</View>
		</View>
	);
};

export default ProfileScreen;
