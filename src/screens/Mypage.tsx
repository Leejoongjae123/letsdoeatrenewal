import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Image, Platform, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { BrandColor, DefaultBlack, DefaultGray, WhiteColor } from '../utils/Colors';
import { getFont, getHeight, getWidth } from '../lib/CrossDevice';
import * as Progress from 'react-native-progress';
import { StatusBar } from 'expo-status-bar';

const Mypage = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ScrollView style={{ width: '100%' }} showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} contentContainerStyle={{ alignItems: 'center' }} bounces={false}>
                <View style={styles.headerContent}>
                    <SafeAreaView style={{ backgroundColor: BrandColor }}>
                        <View style={styles.profileImageContainer}>
                            <Image
                                style={{
                                    width: getWidth(88),
                                    height: getWidth(120),
                                }}
                                source={require('../../assets/images/main/main_user_image.png')}
                            />
                            <Image
                                style={{
                                    position: 'absolute',
                                    bottom: getWidth(10),
                                    right: getWidth(10),
                                    width: getWidth(36),
                                    height: getWidth(36),
                                }}
                                source={require('../../assets/images/common/Icon_crown.png')}
                            />
                        </View>
                        <Text style={styles.profileNameText}>Foodfighter</Text>
                        <Text style={styles.profileLevelText}>Lv1. 로드슈터</Text>
                    </SafeAreaView>
                </View>
                <View style={styles.mainContentView}>
                    {/* 경험치 */}
                    <View style={styles.expBarContainer}>
                        <Text
                            style={{
                                fontSize: getFont(16),
                                fontFamily: 'Bold',
                                color: WhiteColor,
                            }}
                        >
                            🔥NEXT TO Level UP 테이크슈터!🔥
                        </Text>
                        <Progress.Bar
                            progress={0.7}
                            width={getWidth(287)}
                            color={BrandColor}
                            borderColor={DefaultBlack}
                            unfilledColor="#eeeeee"
                            style={{
                                height: getHeight(8),
                                marginTop: getHeight(4),
                            }}
                        />
                        <View
                            style={{
                                alignItems: 'flex-end',
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: getFont(12),
                                    fontFamily: 'Medium',
                                    color: WhiteColor,
                                    textAlign: 'right',
                                }}
                            >
                                100/100
                            </Text>
                        </View>
                    </View>
                    {/* 경험치 */}
                    {/* 리워드 */}
                    <View style={styles.menuContainer}>
                        <View style={styles.menuTitleView}>
                            <Text style={styles.menuTitleText}>리워드</Text>
                        </View>
                        <Pressable style={styles.menuItem} onPress={() => navigation.navigate('Reward')}>
                            <Text style={styles.menuText}>누적 리워드</Text>
                            <View style={styles.menuRightView}>
                                <Image style={styles.menuRightIcon} source={require('../../assets/images/main/Icon_fig.png')} />
                                <Text style={styles.menuRightText}>1,000,000</Text>
                                <Image style={styles.menuRightArrow} source={require('../../assets/images/common/Icon_arrow_right.png')} />
                            </View>
                        </Pressable>
                        <Pressable style={styles.menuItem} onPress={() => navigation.navigate('Withraw')}>
                            <Text style={styles.menuText}>출금 가능액</Text>
                            <View style={styles.menuRightView}>
                                <Image style={styles.menuRightIcon} source={require('../../assets/images/main/Icon_coin.png')} />
                                <Text style={styles.menuRightText}>1,000,000</Text>
                                <Image style={styles.menuRightArrow} source={require('../../assets/images/common/Icon_arrow_right.png')} />
                            </View>
                        </Pressable>
                    </View>
                    {/* 리워드 */}
                    {/* 검수내역 */}
                    <View style={{ ...styles.menuContainer, paddingBottom: 0 }}>
                        <Pressable style={{ ...styles.menuItem, paddingVertical: getHeight(12), borderBottomWidth: 0 }} onPress={() => navigation.navigate('Check')}>
                            <Text style={styles.menuText}>검수내역</Text>
                            <View style={styles.menuRightView}>
                                <Text style={styles.menuRightText}>3</Text>
                                <Image style={styles.menuRightArrow} source={require('../../assets/images/common/Icon_arrow_right.png')} />
                            </View>
                        </Pressable>
                    </View>
                    {/* 검수내역 */}
                    {/* 콘테스트 */}
                    <View style={styles.menuContainer}>
                        <View style={styles.menuTitleView}>
                            <Text style={styles.menuTitleText}>콘테스트</Text>
                        </View>
                        <Pressable style={styles.menuItem} onPress={() => navigation.navigate('ProgressContest')}>
                            <Text style={styles.menuText}>진행중</Text>
                            <View style={styles.menuRightView}>
                                <Text style={styles.menuRightText}>3</Text>
                                <Image style={styles.menuRightArrow} source={require('../../assets/images/common/Icon_arrow_right.png')} />
                            </View>
                        </Pressable>
                        <Pressable style={styles.menuItem} onPress={() => navigation.navigate('CompleteContest')}>
                            <Text style={styles.menuText}>완료</Text>
                            <View style={styles.menuRightView}>
                                <Text style={styles.menuRightText}>4</Text>
                                <Image style={styles.menuRightArrow} source={require('../../assets/images/common/Icon_arrow_right.png')} />
                            </View>
                        </Pressable>
                    </View>
                    {/* 콘테스트 */}
                    {/* 설정 및 기타 */}
                    <View style={styles.menuContainer}>
                        <View style={styles.menuTitleView}>
                            <Text style={styles.menuTitleText}>설정 및 기타</Text>
                        </View>
                        <Pressable style={styles.menuItem} onPress={() => navigation.navigate('Profile')}>
                            <Text style={styles.menuText}>설정</Text>
                            <View style={styles.menuRightView}>
                                <Image style={styles.menuRightArrow} source={require('../../assets/images/common/Icon_arrow_right.png')} />
                            </View>
                        </Pressable>
                        <Pressable style={styles.menuItem} onPress={() => navigation.navigate('Notice')}>
                            <Text style={styles.menuText}>공지사항</Text>
                            <View style={styles.menuRightView}>
                                <Image style={styles.menuRightArrow} source={require('../../assets/images/common/Icon_arrow_right.png')} />
                            </View>
                        </Pressable>
                    </View>
                    {/* 설정 및 기타 */}
                </View>
                <View style={{ height: getHeight(140) }} />
            </ScrollView>
        </View>
    );
};

export default Mypage;

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'flex-start', backgroundColor: WhiteColor },
    headerContent: {
        width: '100%',
        height: getHeight(286),
        backgroundColor: BrandColor,
        alignItems: 'center',
        borderBottomLeftRadius: getWidth(8),
        borderBottomRightRadius: getWidth(8),
        padding: Platform.OS === 'android' ? getHeight(36) : 0,
    },
    profileImageContainer: {
        position: 'relative',
        width: getWidth(140),
        height: getWidth(140),
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileNameText: {
        fontSize: getFont(24),
        fontFamily: 'Bold',
        color: DefaultBlack,
        textAlign: 'center',
        marginTop: getHeight(-8),
    },
    profileLevelText: {
        fontSize: getFont(16),
        fontFamily: 'Medium',
        color: WhiteColor,
        textAlign: 'center',
    },
    mainContentView: {
        width: '100%',
        flex: 1,
        paddingHorizontal: getWidth(14),
        position: 'relative',
        paddingVertical: getHeight(40),
    },
    expBarContainer: {
        width: getWidth(335),
        height: getHeight(76),
        backgroundColor: DefaultBlack,
        borderRadius: getWidth(16),
        position: 'absolute',
        top: getHeight(-38),
        left: getWidth(20),
        paddingHorizontal: getWidth(24),
        paddingTop: getHeight(16),
    },
    menuContainer: {
        width: '100%',
        marginTop: getHeight(20),
        borderWidth: 1,
        borderColor: '#e5e5e5',
        backgroundColor: '#fdfdfd',
        borderRadius: getWidth(26),
        paddingBottom: getHeight(34),
    },
    menuTitleView: { paddingTop: getHeight(16), paddingHorizontal: getWidth(16) },
    menuTitleText: {
        fontSize: getFont(16),
        fontFamily: 'Medium',
        color: DefaultGray,
        textAlign: 'left',
    },
    menuItem: {
        paddingTop: getHeight(16),
        paddingBottom: getHeight(10),
        paddingLeft: getWidth(16),
        paddingRight: getWidth(6),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#eeeeee',
    },
    menuText: {
        fontSize: getFont(18),
        fontFamily: 'Bold',
        color: DefaultBlack,
    },
    menuRightView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    menuRightIcon: {
        width: getWidth(43),
        height: getWidth(29),
        marginRight: getWidth(-4),
        marginBottom: getHeight(6),
    },
    menuRightText: {
        fontSize: getFont(15),
        fontFamily: 'SemiBold',
        color: '#000',
    },
    menuRightArrow: {
        width: getWidth(26),
        height: getWidth(26),
        marginLeft: getWidth(4),
    },
});
