import { createStackNavigator, createAppContainer } from "react-navigation";
import SignUp from "../pages/signup";
import LoginIn from "../pages/loginIn";
import Start from "../pages/start";

const SwitchNavigator = createStackNavigator(
  {
    Start: Start,
    SignUp: { screen: SignUp },
    LoginIn: { screen: LoginIn }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

const SwitchNav = createAppContainer(SwitchNavigator);

export default SwitchNav;
