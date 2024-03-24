import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Image, Modal, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { BrandColor, DefaultBlack, DefaultGray, WhiteColor } from '../../utils/Colors';
import Header from '../../components/Header';
import BackButton from '../../components/BackButton';
import { getFont, getHeight, getWidth } from '../../lib/CrossDevice';

const guideData = [
    {
        category: '모집대상',
        content: '재학중인 학교의 학식을 3분 분량의\n동영상을 촬영할 수 있는 대학(원)생',
    },
    {
        category: '참가 방법',
        content: '아래 참가하기 버튼 클릭 후\n앱으로 촬영 후, 업로드하면 끝!',
    },
    {
        category: '시상 내역',
        content: '1등 100만원 / 2등 50만원 / 3등 30만원\n4~50등까지는 검수완료 기준 균등분배',
    },
    {
        category: '심사 기준',
        content: '완성도,창의성, 레퍼런스 유사성',
    },
    {
        category: '대회 기간',
        content: '2024년 4월 13일 00:00시까지',
    },
    {
        category: '수상 발표',
        content: '콘테스트 마감 후 30일 이내',
    },
];

const ContestDetail = () => {
    const navigation = useNavigation();

    const [moreGuide, setMoreGuide] = React.useState(true);

    const [modal, setModal] = React.useState(false);

    return (
        <View style={styles.container}>
            <SafeAreaView
                style={{
                    flex: 1,
                    width: '100%',
                    backgroundColor: DefaultBlack,
                }}
            >
                <Header headerLeft={<BackButton white onPress={() => navigation.goBack()} />} dark headerTitle={'전국 학식 배틀 공모전'} />
                <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                    <View
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            paddingHorizontal: getWidth(20),
                        }}
                    >
                        <Image
                            style={{
                                width: getWidth(304),
                                height: getWidth(304),
                            }}
                            source={require('../../../assets/images/main/main_contest_1.png')}
                        />
                        <Text style={styles.title}>우리 학교{'\n'}학식을 촬영해주세요!</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: getHeight(4) }}>
                            <Image
                                style={{
                                    width: getWidth(48),
                                    height: getWidth(33),
                                }}
                                source={require('../../../assets/images/main/Icon_coin.png')}
                            />
                            <Text style={styles.contestRewardText}>3,000,000원</Text>
                        </View>
                        <Text style={styles.contestExpireText}>참여신청 3월 13일까지</Text>
                        {/* 안내 상단 */}
                        <View style={styles.contestGuideView}>
                            <View style={styles.contestGuideItem}>
                                <Image
                                    style={{
                                        width: getWidth(24),
                                        height: getWidth(24),
                                    }}
                                    source={require('../../../assets/images/common/Icon_calendar_days.png')}
                                />
                                <Text style={styles.contestGuideText}>2023년 3월 13일 ~ 4월 13일까지 [30일간]</Text>
                            </View>
                            <View style={{ height: getHeight(20) }} />
                            <View style={styles.contestGuideItem}>
                                <Image
                                    style={{
                                        width: getWidth(24),
                                        height: getWidth(24),
                                    }}
                                    source={require('../../../assets/images/common/Icon_reduce_capacity.png')}
                                />
                                <Text style={styles.contestGuideText}>전국 대학생 누구나!</Text>
                            </View>
                        </View>
                        {/* 안내 상단 */}
                        {/* 안내 하단 */}
                        <View style={styles.contestGuideView}>
                            <Pressable style={styles.moreGuideTitleView} onPress={() => setMoreGuide(!moreGuide)}>
                                <Text style={styles.moreGuideTitleText}>콘테스트 참여 안내</Text>
                                <Image
                                    style={{
                                        width: getWidth(36),
                                        height: getWidth(36),
                                    }}
                                    source={moreGuide ? require('../../../assets/images/main/Icon_arrow_up.png') : require('../../../assets/images/main/Icon_arrow_down.png')}
                                />
                            </Pressable>
                            {moreGuide && <View style={{ height: getHeight(15) }} />}
                            {moreGuide &&
                                guideData.map((item, index) => (
                                    <View style={styles.moreGuideView} key={'guide-date-' + index}>
                                        <Text style={styles.moreGuideCategory}>{item.category}</Text>
                                        <Text style={styles.moreGuideContent}>{item.content}</Text>
                                    </View>
                                ))}
                        </View>
                        {/* 안내 하단 */}
                        {/* 주의사항 */}
                        <View
                            style={{
                                paddingVertical: getHeight(20),
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: getFont(18),
                                    color: WhiteColor,
                                    fontFamily: 'Bold',
                                    marginLeft: getWidth(23),
                                    marginBottom: getHeight(12),
                                }}
                            >
                                주의사항
                            </Text>
                            <Text
                                style={{
                                    fontSize: getFont(14),
                                    color: WhiteColor,
                                    fontFamily: 'Medium',
                                }}
                            >
                                - 상금 수령 시, 재학증명서를 제출해야합니다.{'\n'}
                                {'\n'}- 수상금 수령하기 위해선, 마이페이지에서 계좌인증을 해야하며, 신분인증이 완료되어야합니다.{'\n'}
                                {'\n'}- 대회 참여기간 동안 영상 업로드 갯수는 1인당 30개로 제한합니다.{'\n'}
                                {'\n'}- 기타 주의사항 추가{'\n'}
                                {'\n'}
                                {'\n'}
                            </Text>
                        </View>
                        {/* 주의사항 */}
                        <Pressable style={styles.joinButton} onPress={() => setModal(true)}>
                            <Text style={styles.joinButtonText}>학식 배틀 참여하기</Text>
                        </Pressable>
                    </View>

                    <View
                        style={{
                            height: getHeight(40),
                        }}
                    />
                </ScrollView>
            </SafeAreaView>
            <Modal visible={modal} transparent>
                <View style={styles.joinCompleteModal}>
                    <Pressable style={styles.joinCompleteModalBackground} onPress={() => setModal(false)} />
                    <View style={styles.joinCompleteModalContent}>
                        <Text style={styles.modalTitleText}>신청완료!</Text>
                        <Text style={styles.modalContentText}>가이드 영상을{'\n'}준수하여 진행해주세요</Text>
                        <Pressable style={styles.modalButton} onPress={() => setModal(false)}>
                            <Text style={styles.modalButtonText}>가이드 보기</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default ContestDetail;

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: WhiteColor },
    title: {
        fontSize: getFont(24),
        color: WhiteColor,
        fontFamily: 'Medium',
        textAlign: 'center',
        marginTop: getHeight(-27),
    },
    contestRewardText: {
        fontSize: getFont(25),
        color: BrandColor,
        fontFamily: 'Bold',
        lineHeight: getFont(33),
    },
    contestExpireText: {
        fontSize: getFont(12),
        color: DefaultGray,
        fontFamily: 'Medium',
        textAlign: 'center',
        marginTop: getHeight(20),
    },
    contestGuideView: {
        width: '100%',
        backgroundColor: '#1d1e23',
        borderRadius: getWidth(26),
        paddingHorizontal: getWidth(22),
        paddingVertical: getHeight(24),
        marginTop: getHeight(10),
    },
    contestGuideItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    contestGuideText: {
        fontSize: getFont(14),
        color: WhiteColor,
        fontFamily: 'Medium',
        marginLeft: getWidth(6),
    },
    moreGuideTitleView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    moreGuideTitleText: {
        fontSize: getFont(18),
        color: WhiteColor,
        fontFamily: 'Bold',
    },
    moreGuideView: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginTop: getHeight(15),
    },
    moreGuideCategory: {
        fontSize: getFont(16),
        color: WhiteColor,
        fontFamily: 'Bold',
    },
    moreGuideContent: {
        fontSize: getFont(14),
        color: WhiteColor,
        fontFamily: 'Medium',
        textAlign: 'right',
    },
    //참여버튼
    joinButton: {
        width: '100%',
        height: getHeight(44),
        borderRadius: getWidth(14),
        backgroundColor: BrandColor,
        justifyContent: 'center',
        alignItems: 'center',
    },
    joinButtonText: {
        fontSize: getFont(16),
        color: '#000',
        fontFamily: 'Medium',
    },
    joinCompleteModal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    joinCompleteModalBackground: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        position: 'absolute',
    },
    joinCompleteModalContent: {
        width: getWidth(346),
        height: getHeight(406),
        backgroundColor: DefaultBlack,
        borderRadius: getWidth(26),
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalTitleText: {
        fontSize: getFont(22),
        color: WhiteColor,
        textAlign: 'center',
        fontFamily: 'Bold',
    },
    modalContentText: {
        fontSize: getFont(21),
        color: BrandColor,
        textAlign: 'center',
        fontFamily: 'Bold',
        lineHeight: getFont(27),
        marginTop: getHeight(38),
        marginBottom: getHeight(75),
    },
    modalButton: {
        width: getWidth(204),
        height: getHeight(58),
        backgroundColor: BrandColor,
        borderRadius: getWidth(26),
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalButtonText: {
        fontSize: getFont(22),
        color: WhiteColor,
        textAlign: 'center',
        fontFamily: 'Bold',
    },
});
