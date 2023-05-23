import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";

import DateTimePicker from "@react-native-community/datetimepicker";

import AntDesign from "react-native-vector-icons/AntDesign";
import { windowHeight, windowWidth } from "../utils/Dimensions";
import { AppContext } from "../services/AppContext";

const UserDetailsScreen = ({ navigation }) => {
	const [userName, setUserName] = useState("");
	const [date, setDate] = useState(new Date());
	const [mode, setMode] = useState("date");
	const [show, setShow] = useState(false);
	const { updateUser } = useContext(AppContext);

	const onChange = (event, selectedDate) => {
		const currentDate = selectedDate;
		setShow(false);
		setDate(currentDate);
	};

	console.log(
		new Date(date).toLocaleString("en-us", {
			day: "2-digit",
			month: "short",
			year: "numeric",
		})
	);

	const showMode = (currentMode) => {
		if (Platform.OS === "android") {
			setShow(!show);
			// for iOS, add a button that closes the picker
		}
		setMode(currentMode);
	};

	const showDatepicker = () => {
		showMode("date");
	};

	const toHomeScreen = () => {
		const userDetails = {
			name: userName,
		};

		updateUser(userDetails.name);

		navigation.navigate("Bottom Tabs");
	};
	return (
		<View style={styles.container}>
			<Text>UserDetailsScreen</Text>
			<FormInput
				labelValue={userName}
				onChangeText={(name) => setUserName(name)}
				placeholderText="User Name"
				iconType="user"
				autoCapitalize="none"
				autoCorrect={false}
			/>
			<Pressable
				style={styles.dateView}
				android_ripple={{ color: "#eee" }}
				onPress={showMode}
			>
				<AntDesign name="calendar" size={25} color="#666" style={styles.icon} />
				<Text style={styles.calendarText}>
					Date of Birth: {date.toLocaleString()}
				</Text>
			</Pressable>
			{show && (
				<DateTimePicker
					testID="dateTimePicker"
					value={date}
					mode={mode}
					is24Hour={true}
					onChange={onChange}
				/>
			)}
			<FormButton buttonTitle="Set Details" onPress={toHomeScreen} />
		</View>
	);
};

export default UserDetailsScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		padding: 20,
	},
	dateView: {
		flexDirection: "row",
		backgroundColor: "#ffffff",
		width: "100%",
		alignItems: "center",
	},
	icon: {
		padding: 10,
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
		borderRightColor: "#ccc",
		borderRightWidth: 1,
		width: 50,
	},
	calendarText: {
		padding: 10,
		flex: 1,
		fontSize: 16,
		fontFamily: "Lato-Regular",
		color: "#333",
		justifyContent: "center",
		alignItems: "center",
	},
});
