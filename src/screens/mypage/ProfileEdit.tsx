import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { BrandColor, DefaultGray, WhiteColor } from '../../utils/Colors';
import Header from '../../components/Header';
import BackButton from '../../components/BackButton';
import { getFont, getHeight, getWidth } from '../../lib/CrossDevice';

const ProfileEdit = () => {
    const navigation = useNavigation();

    const [nickname, setNickname] = React.useState('Foodfighter');

    return (
        <View style={styles.container}>
            <SafeAreaView
                style={{
                    width: '100%',
                }}
            >
                <Header headerLeft={<BackButton onPress={() => navigation.navigate('Profile')} />} headerTitle="내 정보 수정하기" />
            </SafeAreaView>
            <ScrollView style={styles.screenView} bounces={false} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                        paddingTop: getHeight(40),
                        paddingHorizontal: getWidth(14),
                    }}
                >
                    <View style={styles.editItem}>
                        <Text style={styles.categoryTitle}>닉네임</Text>
                        <TextInput value={nickname} onChangeText={(text) => setNickname(text)} style={styles.categoryValue} maxLength={30} />
                    </View>
                    <View style={styles.editItem}>
                        <Text style={styles.categoryTitle}>이름</Text>
                        <TextInput value={'홍길동'} editable={false} style={styles.categoryValueDisabled} maxLength={30} />
                    </View>
                    <View style={styles.editItem}>
                        <Text style={styles.categoryTitle}>생년월일</Text>
                        <TextInput value={'1998.**.**'} editable={false} style={styles.categoryValueDisabled} maxLength={30} />
                    </View>
                    <View style={styles.editItem}>
                        <Text style={styles.categoryTitle}>성별</Text>
                        <TextInput value={'여성'} editable={false} style={styles.categoryValueDisabled} maxLength={30} />
                    </View>
                    <View style={styles.editItem}>
                        <Text style={styles.categoryTitle}>전화번호</Text>
                        <TextInput value={'010-1234-12**'} editable={false} style={styles.categoryValueDisabled} maxLength={30} />
                    </View>
                    <View style={styles.editItem}>
                        <Text style={styles.categoryTitle}>메일</Text>
                        <TextInput value={'abc@abac.com'} editable={false} style={styles.categoryValueDisabled} maxLength={30} />
                    </View>
                    <View style={styles.editItem}>
                        <Text style={styles.categoryTitle}>계좌인증</Text>
                        <TextInput value={'인증완료'} editable={false} style={styles.categoryValueDisabled} maxLength={30} />
                    </View>
                    <View style={{ height: getHeight(60) }} />
                    <Pressable style={{ ...styles.Button, backgroundColor: '#db4437' }} onPress={() => navigation.navigate('BankVerify')}>
                        <Text style={styles.ButtonText}>출금 계좌 인증(수정)하기</Text>
                    </Pressable>
                    <View style={{ height: getHeight(40) }} />
                    <Pressable style={{ ...styles.Button, backgroundColor: BrandColor }} onPress={() => navigation.navigate('Profile')}>
                        <Text style={styles.ButtonText}>완료</Text>
                    </Pressable>
                    <View style={{ height: getHeight(140) }} />
                </View>
            </ScrollView>
        </View>
    );
};

export default ProfileEdit;

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: WhiteColor },
    screenView: {
        flex: 1,
        width: '100%',
        paddingHorizontal: getWidth(14),
        paddingVertical: getWidth(20),
    },
    editItem: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: getWidth(20),
        paddingTop: getHeight(20),
        paddingBottom: getHeight(8),
        borderBottomColor: '#eeeeee',
        borderBottomWidth: 1,
    },
    categoryTitle: {
        fontSize: getFont(19),
        color: DefaultGray,
        fontFamily: 'Medium',
    },
    categoryValue: {
        width: getWidth(200),
        fontSize: getFont(21),
        fontFamily: 'SemiBold',
        textAlign: 'right',
        color: '#000000',
    },
    categoryValueDisabled: {
        width: getWidth(200),
        fontSize: getFont(21),
        fontFamily: 'SemiBold',
        textAlign: 'right',
        color: '#e5e5e5',
    },

    Button: {
        width: '100%',
        height: getHeight(44),
        borderRadius: getWidth(14),

        justifyContent: 'center',
        alignItems: 'center',
    },
    ButtonText: {
        fontSize: getFont(16),
        fontFamily: 'Medium',
        color: WhiteColor,
    },
});
