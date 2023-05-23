import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import { auth } from "../firebase";

const LoginScreen = ({ navigation }) => {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	useEffect(() => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				navigation.navigate("User Details");
			}
		});
	}, []);

	const handleLogin = () => {
		auth
			.signInWithEmailAndPassword(email, password)
			.then((userCredentials) => {
				const user = userCredentials.user;
				console.log("Logged in with:", user.email);
			})
			.catch((error) => alert(error.message));
	};

	return (
		<View style={styles.container}>
			<Image
				source={require("../assets/mental-logo.png")}
				style={styles.logo}
			/>
			<Text style={styles.text}>mental</Text>

			<FormInput
				labelValue={email}
				onChangeText={(userEmail) => setEmail(userEmail)}
				placeholderText="Email"
				iconType="user"
				keyboardType="email-address"
				autoCapitalize="none"
				autoCorrect={false}
			/>
			<FormInput
				labelValue={password}
				onChangeText={(userPassword) => setPassword(userPassword)}
				placeholderText="Password"
				iconType="lock"
				secureTextEntry={true}
			/>

			<FormButton buttonTitle="Sign In" onPress={handleLogin} />

			<TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
				<Text style={styles.navButtonText}>Forgot Password?</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.forgotButton}
				onPress={() => navigation.navigate("Signup")}
			>
				<Text style={styles.navButtonText}>
					Don't have an acount? Create here
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default LoginScreen;

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
		padding: 20,
		paddingTop: 50,
	},
	logo: {
		height: 150,
		width: 150,
		resizeMode: "cover",
	},
	text: {
		fontFamily: "Kufam-SemiBoldItalic",
		fontSize: 28,
		marginBottom: 10,
		color: "#228B22",
		letterSpacing: 2,
	},
	navButton: {
		marginTop: 15,
	},
	forgotButton: {
		marginVertical: 35,
	},
	navButtonText: {
		fontSize: 18,
		fontWeight: "500",
		color: "#2e64e5",
		fontFamily: "Lato-Regular",
	},
});
