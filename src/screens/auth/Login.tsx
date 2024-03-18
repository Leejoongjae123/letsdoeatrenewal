import React, { useContext, useState } from 'react';
import { ScrollView, TouchableOpacity, View, KeyboardAvoidingView, Image, SafeAreaView, Platform, StyleSheet, Text, TextInput, Pressable } from 'react-native';
import { supabase } from '../../initSupabase';
import { AuthStackParamList } from '../../types/navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { getFont, getHeight, getWidth } from '../../lib/CrossDevice';
import { BrandColor, DefaultBlack, WhiteColor } from '../../utils/Colors';
import { useTheme } from 'react-native-rapi-ui';
import { AuthContext } from '../../provider/AuthProvider';

export default function ({ navigation }: NativeStackScreenProps<AuthStackParamList, 'Login'>) {
    const { isDarkmode, setTheme } = useTheme();
    const { testLogin } = useContext(AuthContext);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    async function login() {
        if (testLogin) testLogin();
        // setLoading(true);
        // const { user, error } = await supabase.auth.signIn({
        //     email: email,
        //     password: password,
        // });
        // if (!error && !user) {
        //     setLoading(false);
        //     alert('Check your email for the login link!');
        // }
        // if (error) {
        //     setLoading(false);
        //     alert(error.message);
        // }
    }

    return (
        <View style={styles.container}>
            <Image source={require('../../../assets/images/bg/login_bg.png')} style={styles.backImage} />

            <View style={styles.bottomView}>
                <Text style={styles.title}>로그인</Text>
                <Text style={styles.sub}>로그인을 진행해주세요</Text>
                <Text style={styles.label}>Enter your e-mail</Text>
                <View style={styles.inputView}>
                    <TextInput style={styles.input} placeholder="Enter your e-mail" placeholderTextColor="#a3a3a3" />
                    <Image
                        source={require('../../../assets/images/common/Icon_envelope.png')}
                        style={{
                            width: getWidth(18),
                            height: getWidth(18),
                        }}
                    />
                </View>
                <View style={{ height: getHeight(16) }} />
                <Text style={styles.label}>Enter your password</Text>
                <View style={styles.inputView}>
                    <TextInput style={styles.input} placeholder="Enter your password" placeholderTextColor="#a3a3a3" secureTextEntry={true} />
                    <Image
                        source={require('../../../assets/images/common/Icon_eye_slash.png')}
                        style={{
                            width: getWidth(18),
                            height: getWidth(18),
                        }}
                    />
                </View>
                <View style={{ height: getHeight(24) }} />
                <View style={styles.loginBottomView}>
                    <View style={styles.checkView}>
                        <Image
                            source={require('../../../assets/images/common/Icon_checkbox.png')}
                            style={{
                                width: getWidth(20),
                                height: getWidth(20),
                            }}
                        />
                        <Text style={styles.autoLoginText}>자동로그인</Text>
                    </View>
                    <Text style={styles.recoverPasswordText}>Recover password</Text>
                </View>
                <View style={{ height: getHeight(28) }} />
                <Pressable style={styles.loginButton} onPress={login}>
                    <Text style={styles.loginButtonText}>로그인</Text>
                </Pressable>
                <View style={styles.lineView}>
                    <View
                        style={{
                            width: getWidth(136),
                            height: 1,
                            backgroundColor: '#eeeeee',
                        }}
                    />
                    <Text
                        style={{
                            fontSize: getFont(14),
                            color: '#5d5d5b',
                            fontFamily: 'Medium',
                        }}
                    >
                        or
                    </Text>
                    <View
                        style={{
                            width: getWidth(136),
                            height: 1,
                            backgroundColor: '#eeeeee',
                        }}
                    />
                </View>
                <Pressable style={styles.googleLoginButton} onPress={login}>
                    <Image
                        source={require('../../../assets/images/sns/Icon_google.png')}
                        style={{
                            position: 'absolute',
                            width: getWidth(51),
                            height: getHeight(16),
                            left: getWidth(31),
                        }}
                    />
                    <Text style={styles.googleLoginButtonText}>구글 연동 로그인</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        position: 'relative',
        backgroundColor: WhiteColor,
    },
    backImage: {
        position: 'absolute',
        top: 0,
        left: -2,
        width: getWidth(377),
        height: getWidth(176),
    },
    bottomView: {
        width: '100%',
        height: getHeight(632),
        borderTopLeftRadius: getWidth(26),
        borderTopRightRadius: getWidth(26),
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingHorizontal: getWidth(20),
    },
    title: {
        fontSize: getFont(32),
        color: DefaultBlack,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: getHeight(40),
        marginBottom: getHeight(8),
    },
    sub: {
        fontSize: getFont(14),
        color: '#5d5d5b',
        textAlign: 'center',
        marginBottom: getHeight(48),
    },
    label: {
        width: '100%',
        fontSize: getFont(14),
        color: DefaultBlack,
        fontWeight: '500',
        textAlign: 'left',
        marginBottom: getHeight(12),
    },
    inputView: {
        width: '100%',
        borderRadius: getWidth(100),
        height: getHeight(48),
        borderWidth: 1,
        borderColor: '#e3e3e3',
        color: DefaultBlack,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: getWidth(24),
    },
    input: {
        maxWidth: '90%',
        fontSize: getFont(14),
        fontWeight: '500',
    },
    loginBottomView: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    checkView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    autoLoginText: {
        fontSize: getFont(12),
        marginLeft: getWidth(8),
        fontFamily: 'Medium',
        color: DefaultBlack,
    },
    recoverPasswordText: {
        fontSize: getFont(12),
        color: BrandColor,
        fontFamily: 'Medium',
    },
    loginButton: {
        width: '100%',
        height: getHeight(48),
        borderRadius: getWidth(100),
        backgroundColor: BrandColor,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginButtonText: {
        fontSize: getFont(14),
        color: WhiteColor,
        fontWeight: 'bold',
    },
    lineView: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: getHeight(20),
    },
    googleLoginButton: {
        width: '100%',
        height: getHeight(48),
        borderRadius: getWidth(100),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#e3e3e3',
        position: 'relative',
    },
    googleLoginButtonText: {
        fontSize: getFont(16),
        color: DefaultBlack,
        fontWeight: 'bold',
    },
});
