import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { BrandColor, DefaultBlack, DefaultGray, WhiteColor } from '../../utils/Colors';
import Header from '../../components/Header';
import BackButton from '../../components/BackButton';
import { getFont, getHeight, getWidth } from '../../lib/CrossDevice';

const Profile = () => {
    const navigation = useNavigation();
    const [auth, setAuth] = React.useState(false);

    return (
        <View style={styles.container}>
            <SafeAreaView
                style={{
                    width: '100%',
                }}
            >
                <Header
                    headerLeft={
                        <BackButton
                            onPress={() => {
                                //reset to Mypage
                                navigation.reset({
                                    index: 0,
                                    routes: [{ name: 'Mypage' }],
                                });
                            }}
                        />
                    }
                    headerTitle="내 정보"
                />
            </SafeAreaView>
            <ScrollView style={styles.screenView} bounces={false} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                    }}
                >
                    {/* 프로필이미지 */}
                    <View style={styles.profileImageContainer}>
                        <Image
                            style={{
                                width: getWidth(88),
                                height: getWidth(120),
                            }}
                            source={require('../../../assets/images/main/main_user_image.png')}
                        />
                        <Image
                            style={{
                                position: 'absolute',
                                bottom: getWidth(-10),
                                right: getWidth(-10),
                                width: getWidth(36),
                                height: getWidth(36),
                            }}
                            source={require('../../../assets/images/common/Icon_add.png')}
                        />
                    </View>
                    {/* 프로필이미지 */}
                    <Pressable onPress={() => navigation.navigate('ProfileEdit')}>
                        <Text
                            style={{
                                fontSize: getFont(19),
                                color: DefaultBlack,
                                fontFamily: 'Medium',
                                textAlign: 'center',
                                marginTop: getHeight(16),
                                marginBottom: getHeight(7),
                            }}
                        >
                            정보 수정하기
                        </Text>
                    </Pressable>
                    <Text
                        style={{
                            fontSize: getFont(15),
                            color: '#db4437',
                            fontFamily: 'Medium',
                            textAlign: 'center',
                            lineHeight: getHeight(20),
                            marginBottom: getHeight(14),
                        }}
                    >
                        리워드를 출금하기 위해선,{'\n'}반드시 본인 인증이 진행되야 합니다.
                    </Text>
                    <Pressable style={{ ...styles.authButton, backgroundColor: auth ? BrandColor : '#db4437' }} onPress={() => setAuth(!auth)}>
                        <Text style={styles.authButtonText}>{auth ? '본인 인증 완료' : '본인인증 진행하기'}</Text>
                    </Pressable>
                    {/* 정보 */}
                    <View style={styles.infoContainer}>
                        <View style={styles.infoItem}>
                            <Text style={styles.category}>닉네임</Text>
                            <Text style={styles.content}>Foodfighter</Text>
                        </View>
                        <View style={styles.infoItem}>
                            <Text style={styles.category}>이름</Text>
                            <Text style={styles.content}>홍길동</Text>
                        </View>
                        <View style={styles.infoItem}>
                            <Text style={styles.category}>생년월일</Text>
                            <Text style={styles.content}>1998.**.**</Text>
                        </View>
                        <View style={styles.infoItem}>
                            <Text style={styles.category}>성별</Text>
                            <Text style={styles.content}>여성</Text>
                        </View>
                        <View style={styles.infoItem}>
                            <Text style={styles.category}>전화번호</Text>
                            <Text style={styles.content}>010-1234-12**</Text>
                        </View>
                        <View style={styles.infoItem}>
                            <Text style={styles.category}>메일</Text>
                            <Text style={styles.content}>abc@abac.com</Text>
                        </View>
                        <View style={styles.infoItem}>
                            <Text style={styles.category}>계좌인증</Text>
                            <Text style={styles.content}>인증완료</Text>
                        </View>
                    </View>
                    {/* 정보 */}
                    <View style={{ height: getHeight(120) }} />
                </View>
            </ScrollView>
        </View>
    );
};

export default Profile;

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: WhiteColor },
    screenView: {
        flex: 1,
        width: '100%',
        paddingHorizontal: getWidth(14),
        paddingVertical: getWidth(20),
    },
    profileImageContainer: {
        position: 'relative',
        width: getWidth(120),
        height: getWidth(136),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: BrandColor,
        borderRadius: getWidth(8),
    },
    authButton: {
        width: '100%',
        height: getHeight(44),
        borderRadius: getWidth(14),

        justifyContent: 'center',
        alignItems: 'center',
    },
    authButtonText: {
        fontSize: getFont(16),
        fontFamily: 'Medium',
        color: WhiteColor,
    },
    infoContainer: {
        width: '100%',
        marginTop: getHeight(20),
        borderWidth: 1,
        borderColor: '#e5e5e5',
        backgroundColor: '#fdfdfd',
        borderRadius: getWidth(26),
        paddingBottom: getHeight(34),
    },
    infoItem: {
        paddingTop: getHeight(22),
        paddingBottom: getHeight(10),
        paddingHorizontal: getWidth(20),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#eeeeee',
    },
    category: {
        fontSize: getFont(19),
        fontFamily: 'Medium',
        color: DefaultGray,
    },
    content: {
        fontSize: getFont(21),
        fontFamily: 'SemiBold',
        color: DefaultBlack,
    },
});
