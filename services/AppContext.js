import { createContext, useState } from "react";

export const AppContext = createContext({
	username: "",
	updateUser: (data) => {},
});

const AppContextProvider = ({ children }) => {
	const [user, setUser] = useState("");

	const updateUser = (username) => {
		setUser(username);
	};

	const value = {
		username: user,
		updateUser,
	};

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
