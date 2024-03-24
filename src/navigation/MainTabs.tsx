import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { themeColor, useTheme } from 'react-native-rapi-ui';
import TabBarIcon from '../components/utils/TabBarIcon';
import TabBarText from '../components/utils/TabBarText';

import Home from '../screens/Home';

import CustomTabBar from '../components/CustomTabBar';
import Contest from '../screens/Contest';
import Shop from '../screens/Shop';
import Mypage from '../screens/Mypage';
import ContestDetail from '../screens/contest/ContestDetail';
import Profile from '../screens/mypage/Profile';
import ProfileEdit from '../screens/mypage/ProfileEdit';

const Tabs = createBottomTabNavigator();
const MainTabs = () => {
    const { isDarkmode } = useTheme();
    return (
        <Tabs.Navigator
            screenOptions={{
                headerShown: false,
            }}
            tabBar={(props) => <CustomTabBar {...props} />}
        >
            <Tabs.Screen name="Home" component={Home} />
            <Tabs.Screen name="Contest" component={Contest} />
            <Tabs.Screen name="Shop" component={Shop} />
            <Tabs.Screen name="Mypage" component={Mypage} />
            <Tabs.Screen name="ContestDetail" component={ContestDetail} />
            <Tabs.Screen name="Profile" component={Profile} />
            <Tabs.Screen name="ProfileEdit" component={ProfileEdit} />
        </Tabs.Navigator>
    );
};

export default MainTabs;
