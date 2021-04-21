import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { USER_INFO } from "../../constants/path";
import { UserInfo } from "../../components/pages";
import { StackActions } from "@react-navigation/native";
import { HeaderLeft, headerStyle, headerTintColor } from "../Header";
import { COLOR } from "../../constants/theme";

const cardStyle = {
    backgroundColor: COLOR.MAIN,
};
const Stack = createStackNavigator();

function UserInfoNavigation() {
    return (
        <Stack.Navigator initialRouteName={USER_INFO} screenOptions={{cardStyle, headerStyle, headerTintColor}} >
            <Stack.Screen
             name={USER_INFO} 
             component={UserInfo}
             options={{
                 headerLeft: () => <HeaderLeft />,
                 title: 'User info',
             }} />
        </Stack.Navigator>
    )
}

export default UserInfoNavigation;