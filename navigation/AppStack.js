import { Platform, Text, View } from "react-native";
import { Entypo, AntDesign, Ionicons, FontAwesome5 } from "@expo/vector-icons";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AsyncStorage from "@react-native-async-storage/async-storage";

import HomeScreen from "../screens/HomeScreen";
import Screen1 from "../screens/Screen1";
import Screen2 from "../screens/Screen2";
import MessagingScreen from "../screens/MessagingScreen";
import ProfileScreen from "../screens/ProfileScreen";
import OnboardingScreen from "../screens/OnboardingScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import { useEffect, useState } from "react";
import UserDetailsScreen from "../screens/UserDetailsScreen";

const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();

const homeScreenTopView = {
	marginHorizontal: 5,
	borderWidth: 2,
	padding: 10,
	borderRadius: 10,
	borderColor: "#373737",
};

const homeScreenTopText = {
	fontWeight: "800",
	color: "#ffffff",
	fontStyle: "italic",
	fontSize: 20,
};

const BottomStack = () => {
	return (
		<BottomTab.Navigator
			screenOptions={{
				tabBarShowLabel: false,
				tabBarStyle: {
					backgroundColor: "#000000",
					borderTopWidth: 0,
					height: 70,
				},
				headerShown: false,
			}}
		>
			<BottomTab.Screen
				name="Home"
				component={HomeScreen}
				options={{
					tabBarIcon: ({ focused }) => (
						<Entypo
							name="home"
							size={24}
							color={focused ? "#f14f86" : "#ffffff"}
						/>
					),
					headerStyle: {
						backgroundColor: "#000000",
					},
					headerShadowVisible: false,
					headerShown: true,
					headerTitle: "",
					headerLeft: () => (
						<View style={{ paddingLeft: 20 }}>
							<Text style={[homeScreenTopText]}>About</Text>
							<Text style={homeScreenTopText}>life</Text>
						</View>
					),
					headerRight: () => (
						<View style={{ flexDirection: "row" }}>
							<View style={homeScreenTopView}>
								<Ionicons name="notifications" size={24} color="#ffffff" />
							</View>
							<View style={homeScreenTopView}>
								<FontAwesome5 name="stethoscope" size={24} color="#ffffff" />
							</View>
						</View>
					),
				}}
			/>
			<BottomTab.Screen
				name="Search"
				component={Screen1}
				options={{
					tabBarIcon: ({ focused }) => (
						<AntDesign
							name="search1"
							size={24}
							color={focused ? "#f14f86" : "#ffffff"}
						/>
					),
				}}
			/>
			<BottomTab.Screen
				name="Add"
				component={Screen2}
				options={{
					tabBarIcon: ({ focused }) => (
						<Ionicons
							name="ios-add-circle"
							size={Platform.OS === "ios" ? 48 : 60}
							color="#f14f86"
						/>
					),
				}}
			/>
			<BottomTab.Screen
				name="Messaging"
				component={MessagingScreen}
				options={{
					tabBarIcon: ({ focused }) => (
						<AntDesign
							name="message1"
							size={24}
							color={focused ? "#f14f86" : "#ffffff"}
						/>
					),
				}}
			/>
			<BottomTab.Screen
				name="Profile"
				component={ProfileScreen}
				options={{
					tabBarIcon: ({ focused }) => (
						<Ionicons
							name="person"
							size={24}
							color={focused ? "#f14f86" : "#ffffff"}
						/>
					),
				}}
			/>
		</BottomTab.Navigator>
	);
};

const AppStack = () => {
	const [isFirstLaunch, setIsFirstLaunch] = useState(null);
	let routeName;

	useEffect(() => {
		AsyncStorage.getItem("alreadyLaunched").then((value) => {
			if (value === null) {
				AsyncStorage.setItem("alreadyLaunched", "true");
				setIsFirstLaunch(true);
			} else {
				setIsFirstLaunch(false);
			}
		});
	}, []);

	if (isFirstLaunch === null) {
		return null;
	} else if (isFirstLaunch === true) {
		routeName = "Onboarding";
	} else {
		routeName = "Login";
	}

	return (
		<Stack.Navigator
			initialRouteName={routeName}
			screenOptions={{ headerShown: false }}
		>
			<Stack.Screen
				name="Onboarding"
				component={OnboardingScreen}
				options={{ header: () => null }}
			/>
			<Stack.Screen
				name="Login"
				component={LoginScreen}
				options={{ header: () => null }}
			/>
			<Stack.Screen
				name="User Details"
				component={UserDetailsScreen}
				options={{ header: () => null }}
			/>
			<Stack.Screen
				name="Signup"
				component={SignupScreen}
				options={({ navigation }) => ({
					title: "",
					headerStyle: {
						backgroundColor: "#f9fafd",
						shadowColor: "#f9fafd",
						elevation: 0,
					},
					headerLeft: () => (
						<View style={{ marginLeft: 10 }}>
							<FontAwesome.Button
								name="long-arrow-left"
								size={25}
								backgroundColor="f9fafd"
								color="#333"
								onPress={() => navigation.navigate("Login")}
							/>
						</View>
					),
				})}
			/>
			<Stack.Screen name="Bottom Tabs" component={BottomStack} />
		</Stack.Navigator>
	);
};

export default AppStack;
