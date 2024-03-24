import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainTabs from './MainTabs';
import AlarmList from '../screens/AlarmList';

// 마이페이지 스크린
import Reward from '../screens/mypage/Reward';
import Withraw from '../screens/mypage/Withraw';
import ProgressContest from '../screens/mypage/ProgressContest';
import CompleteContest from '../screens/mypage/CompleteContest';
import Notice from '../screens/mypage/Notice';
import Check from '../screens/mypage/Check';
import BankVerify from '../screens/mypage/BankVerify';
// 마이페이지 스크린

// 카메라
import CameraScreen from '../screens/camera/Camera';
import CameraEditScreen from '../screens/camera/CameraEdit';
import CameraSelectScreen from '../screens/camera/CameraSelect';
import CameraStorageScreen from '../screens/camera/CameraStorage';
import CameraUploadScreen from '../screens/camera/CameraUpload';
// 카메라

const MainStack = createNativeStackNavigator();
const Main = () => {
    return (
        <MainStack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <MainStack.Screen name="MainTabs" component={MainTabs} />
            <MainStack.Screen name="AlarmList" component={AlarmList} />
            {/* 마이페이지 스크린 */}
            <MainStack.Screen name="Reward" component={Reward} />
            <MainStack.Screen name="Withraw" component={Withraw} />
            <MainStack.Screen name="ProgressContest" component={ProgressContest} />
            <MainStack.Screen name="CompleteContest" component={CompleteContest} />
            <MainStack.Screen name="Notice" component={Notice} />
            <MainStack.Screen name="Check" component={Check} />
            <MainStack.Screen name="BankVerify" component={BankVerify} />
            {/* 마이페이지 스크린 */}
            {/* 카메라 */}
            <MainStack.Screen name="Camera" component={CameraScreen} />
            <MainStack.Screen name="CameraEdit" component={CameraEditScreen} />
            <MainStack.Screen name="CameraSelect" component={CameraSelectScreen} />
            <MainStack.Screen name="CameraStorage" component={CameraStorageScreen} />
            <MainStack.Screen name="CameraUpload" component={CameraUploadScreen} />
            {/* 카메라 */}
        </MainStack.Navigator>
    );
};

export default Main;
