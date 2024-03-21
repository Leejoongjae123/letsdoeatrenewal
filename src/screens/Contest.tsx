import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { BrandColor, DefaultBlack, DefaultGray, WhiteColor } from '../utils/Colors';
import { getFont, getHeight, getWidth } from '../lib/CrossDevice';

const ContestItem = ({ goToDetail }: { goToDetail: () => void }) => {
    return (
        <Pressable style={styles.contestItem} onPress={goToDetail}>
            <Image
                style={{
                    width: getWidth(156),
                    height: getWidth(156),
                }}
                source={require('../../assets/images/main/main_contest_1.png')}
            />
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text
                    style={{
                        fontSize: getFont(16),
                        color: WhiteColor,
                        fontFamily: 'Bold',
                    }}
                >
                    [학생전용]
                </Text>
                <Text
                    style={{
                        fontSize: getFont(24),
                        color: WhiteColor,
                        fontFamily: 'Medium',
                        textAlign: 'center',
                        lineHeight: getFont(32),
                        marginTop: getHeight(8),
                    }}
                >
                    전국 학식 배틀{'\n'}공모전
                </Text>
                <View style={styles.contestReward}>
                    <Image
                        style={{
                            width: getWidth(20),
                            height: getWidth(13),
                        }}
                        source={require('../../assets/images/main/Icon_coin.png')}
                    />
                    <Text style={styles.contestRewardText}>300 만원</Text>
                </View>
                <Text
                    style={{
                        fontSize: getFont(12),
                        color: DefaultGray,
                        fontFamily: 'Medium',
                        marginTop: getHeight(8),
                    }}
                >
                    마감 7일전
                </Text>
            </View>
        </Pressable>
    );
};

const Contest = () => {
    const navigation = useNavigation();
    const [tab, setTab] = React.useState(0);

    const goToDetail = () => {
        navigation.navigate('ContestDetail');
    };

    return (
        <View style={styles.container}>
            <SafeAreaView
                style={{
                    flex: 1,
                    width: '100%',
                    backgroundColor: DefaultBlack,
                }}
            >
                <ScrollView
                    style={{
                        flex: 1,
                        width: '100%',
                        backgroundColor: DefaultBlack,
                    }}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>콘테스트</Text>
                        <Text style={styles.subText}>콘테스트 참여를 통해{'\n'}리워드를 더 많이 받을 수 있어요!</Text>
                    </View>
                    <View style={styles.tabs}>
                        <Pressable style={tab === 0 ? styles.tabButtonActive : styles.tabButton} onPress={() => setTab(0)}>
                            <Text style={tab === 0 ? styles.tabButtonTextActive : styles.tabButtonText}>#제철음식</Text>
                        </Pressable>
                        <Pressable style={tab === 1 ? styles.tabButtonActive : styles.tabButton} onPress={() => setTab(1)}>
                            <Text style={tab === 1 ? styles.tabButtonTextActive : styles.tabButtonText}>#학생전용</Text>
                        </Pressable>
                        <Pressable style={tab === 2 ? styles.tabButtonActive : styles.tabButton} onPress={() => setTab(2)}>
                            <Text style={tab === 2 ? styles.tabButtonTextActive : styles.tabButtonText}>#직장인전용</Text>
                        </Pressable>
                    </View>
                    <ContestItem goToDetail={goToDetail} />
                    <View style={styles.adView}>
                        <Text>광고섹션</Text>
                    </View>
                    <ContestItem goToDetail={goToDetail} />
                    <ContestItem goToDetail={goToDetail} />
                    <View style={{ height: getHeight(80) }} />
                </ScrollView>
            </SafeAreaView>
        </View>
    );
};

export default Contest;

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: WhiteColor },
    adView: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: getHeight(74),
        backgroundColor: WhiteColor,
        marginTop: getHeight(20),
    },
    titleContainer: {
        paddingHorizontal: getWidth(36),
        paddingTop: getHeight(34),
        marginBottom: getHeight(20),
    },
    titleText: {
        fontSize: getFont(24),
        fontFamily: 'Bold',
        color: WhiteColor,
    },
    subText: {
        fontSize: getFont(16),
        fontFamily: 'Medium',
        color: DefaultGray,
        marginTop: getHeight(6),
        lineHeight: getFont(21),
    },
    tabs: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingHorizontal: getWidth(30),
    },
    tabButton: {
        width: getWidth(92),
        height: getHeight(42),
        borderWidth: 1,
        borderColor: BrandColor,
        borderRadius: getWidth(16),
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: getWidth(10),
    },
    tabButtonText: {
        fontSize: getFont(14),
        fontFamily: 'Bold',
        color: BrandColor,
    },
    tabButtonActive: {
        width: getWidth(92),
        height: getHeight(42),
        borderWidth: 1,
        borderColor: BrandColor,
        borderRadius: getWidth(16),
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: getWidth(10),
        backgroundColor: BrandColor,
    },
    tabButtonTextActive: {
        fontSize: getFont(14),
        fontFamily: 'Bold',
        color: DefaultBlack,
    },
    contestItem: {
        marginHorizontal: getWidth(20),
        marginTop: getHeight(20),
        borderRadius: getWidth(10),
        backgroundColor: '#1d1e23',
        paddingHorizontal: getWidth(10),
        paddingVertical: getHeight(10),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    contestReward: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: getHeight(4),
        borderRadius: getWidth(10),
        backgroundColor: DefaultBlack,
        width: getWidth(93),
        height: getHeight(22),
        paddingRight: getWidth(4),
    },
    contestRewardText: {
        fontSize: getFont(14),
        color: BrandColor,
        fontFamily: 'Bold',
    },
});
