import React from "react";
import Providers from "./navigation/Index";

import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import AppContextProvider from "./services/AppContext";

const App = () => {
	return (
		<AppContextProvider>
			<SafeAreaView style={{ flex: 1 }}>
				<StatusBar style="light" backgroundColor="#000000" />
				<Providers />
			</SafeAreaView>
		</AppContextProvider>
	);
};

export default App;
