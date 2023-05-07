import React, { useContext, useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import AppStack from "./AppStack";

const Routes = () => {
	return (
		<NavigationContainer>
			{/* <AuthStack /> */}
			<AppStack />
		</NavigationContainer>
	);
};

export default Routes;
