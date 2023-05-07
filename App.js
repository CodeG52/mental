import React from "react";
import Providers from "./navigation/Index";

import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const App = () => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<StatusBar style="light" backgroundColor="#000000" />
			<Providers />
		</SafeAreaView>
	);
};

export default App;
