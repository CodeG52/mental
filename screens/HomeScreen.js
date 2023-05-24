import { ScrollView, Text, View } from "react-native";

import HomeStories from "../sections/Home/HomeStories";
import HomeShare from "../sections/Home/HomeShare";
import HomeHero from "../sections/Home/HomeHero";
import HomeCategories from "../sections/Home/HomeCategories";

import { AppStyles, homeStyles as styles } from "../styles/AppStyles";
import ThoughtCard from "../components/Home/ThoughtCard";
import { windowHeight } from "../utils/Dimensions";

const HomeScreen = () => {
	return (
		<View style={[AppStyles.container, styles.container]}>
			<ScrollView>
				<View style={{ height: 0.1 * windowHeight, marginBottom: 10 }}>
					<HomeHero />
				</View>
				<View style={{ height: 0.1 * windowHeight, marginBottom: 10 }}>
					<HomeShare />
				</View>
				<HomeStories />
				<View style={{ height: 0.1 * windowHeight, marginBottom: 10 }}>
					<HomeCategories />
				</View>
				<View style={{ height: 0.3 * windowHeight, marginBottom: 10 }}>
					<ThoughtCard />
				</View>
				<View style={{ height: 0.3 * windowHeight, marginBottom: 10 }}>
					<ThoughtCard />
				</View>
			</ScrollView>
		</View>
	);
};

export default HomeScreen;

// import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
// import React, { useContext} from 'react'
// import FormButton from '../components/FormButton'
// import { useNavigation } from '@react-navigation/native'
// import { auth } from '../firebase'

// const HomeScreen = () => {
//   const navigation = useNavigation()

//   const handleSignOut = () => {
//     auth
//       .signOut()
//       .then(() => {
//         navigation.replace("Login")
//       })
//       .catch(error => alert(error.message))
//   }

//   return (
//     <View style={styles.container}>
//       <Text>Email: {auth.currentUser?.email}</Text>
//       <TouchableOpacity
//         onPress={handleSignOut}
//         style={styles.button}
//       >
//         <Text style={styles.buttonText}>Sign out</Text>
//       </TouchableOpacity>
//     </View>
//   )
// }

// export default HomeScreen

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//    button: {
//     backgroundColor: '#0782F9',
//     width: '60%',
//     padding: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//     marginTop: 40,
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: '700',
//     fontSize: 16,
//   },
// })
