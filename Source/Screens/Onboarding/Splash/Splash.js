import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

export default Splash = () => {
  const { reset } = useNavigation();
  const { isLogged } = useSelector(store => store.app);

  React.useEffect(() => {
    checkForUserSession();
  }, []);

  const checkForUserSession = () => {
    if (isLogged) {
      reset({
        index: 0,
        routes: [{ name: "Dashboard" }]
      });
    } else {
      reset({
        index: 0,
        routes: [{ name: "Login" }]
      });
    }
  };

  return <View></View>;
};
