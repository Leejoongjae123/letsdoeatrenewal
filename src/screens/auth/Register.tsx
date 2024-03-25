import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, TouchableOpacity, View, KeyboardAvoidingView, Image, StyleSheet, Pressable, Text, TextInput, SafeAreaView } from 'react-native';
import { supabase } from '../../initSupabase';
import { AuthStackParamList } from '../../types/navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { getFont, getHeight, getWidth } from '../../lib/CrossDevice';
import { BrandColor, DefaultBlack, WhiteColor } from '../../utils/Colors';

export default function ({ navigation }: NativeStackScreenProps<AuthStackParamList, 'Register'>) {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    // async function register() {
    //   setLoading(true);
    //   const { user, error } = await supabase.auth.signUp({
    //     email: email,
    //     password: password,
    //   });
    //   if (!error && !user) {
    //     setLoading(false);
    //     alert("Check your email for the login link!");
    //   }
    //   if (error) {
    //     setLoading(false);
    //     alert(error.message);
    //   }
    // }
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <ScrollView
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                style={{
                    width: '100%',
                }}
            >
                <Image source={require('../../../assets/images/bg/register_bg.png')} style={styles.backImage} />

                <View style={styles.bottomView}>
                    <Text style={styles.title}>회원가입</Text>
                    <Text style={styles.sub}>회원가입을 진행해주세요</Text>

                    <Text style={styles.label}>이름</Text>
                    <View style={styles.inputView}>
                        <TextInput style={styles.input} placeholder="이름을 입력해주세요." placeholderTextColor="#a3a3a3" />
                        <Image
                            source={require('../../../assets/images/common/Icon_id_card.png')}
                            style={{
                                width: getWidth(18),
                                height: getWidth(18),
                            }}
                        />
                    </View>
                    <View style={{ height: getHeight(16) }} />
                    <Text style={styles.label}>아이디 : 이메일주소</Text>
                    <View style={styles.inputView}>
                        <TextInput style={styles.input} placeholder="이메일을 입력해주세요." placeholderTextColor="#a3a3a3" />
                        <Image
                            source={require('../../../assets/images/common/Icon_envelope.png')}
                            style={{
                                width: getWidth(18),
                                height: getWidth(18),
                            }}
                        />
                    </View>
                    <View style={{ height: getHeight(16) }} />
                    <Text style={styles.label}>닉네임</Text>
                    <View style={styles.inputView}>
                        <TextInput style={styles.input} placeholder="닉네임을 입력해주세요." placeholderTextColor="#a3a3a3" />
                        <Image
                            source={require('../../../assets/images/common/Icon_user_alt.png')}
                            style={{
                                width: getWidth(18),
                                height: getWidth(18),
                            }}
                        />
                    </View>
                    <View style={{ height: getHeight(16) }} />
                    <Text style={styles.label}>비밀번호</Text>
                    <View style={styles.inputView}>
                        <TextInput style={styles.input} placeholder="비밀번호를 입력해주세요." placeholderTextColor="#a3a3a3" secureTextEntry={true} />
                        <Image
                            source={require('../../../assets/images/common/Icon_key.png')}
                            style={{
                                width: getWidth(18),
                                height: getWidth(18),
                            }}
                        />
                    </View>
                    <View style={{ height: getHeight(16) }} />
                    <Text style={styles.label}>비밀번호 확인</Text>
                    <View style={styles.inputView}>
                        <TextInput style={styles.input} placeholder="비밀번호를 한번 더 입력해주세요." placeholderTextColor="#a3a3a3" secureTextEntry={true} />
                        <Image
                            source={require('../../../assets/images/common/Icon_lock.png')}
                            style={{
                                width: getWidth(18),
                                height: getWidth(18),
                            }}
                        />
                    </View>
                    <View style={{ height: getHeight(20) }} />

                    <Pressable style={styles.button} onPress={() => navigation.navigate('CertEmail')}>
                        <Text style={styles.buttonText}>Sign up</Text>
                    </Pressable>
                    <View style={{ height: getHeight(18) }} />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        position: 'relative',
        backgroundColor: WhiteColor,
    },
    backImage: {
        width: getWidth(375),
        height: getWidth(176),
    },
    bottomView: {
        width: '100%',
        backgroundColor: WhiteColor,
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
        flex: 1,
        maxWidth: '90%',
        fontSize: getFont(14),
        fontWeight: '500',
    },

    button: {
        width: '100%',
        height: getHeight(48),
        borderRadius: getWidth(100),
        backgroundColor: BrandColor,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: getFont(14),
        color: WhiteColor,
        fontWeight: 'bold',
    },
});
