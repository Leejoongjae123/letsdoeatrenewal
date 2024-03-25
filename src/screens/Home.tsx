import React from 'react';
import { View, SafeAreaView, StyleSheet, Pressable, Image, Text, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { BrandColor, DefaultBlack, DefaultGray, WhiteColor } from '../utils/Colors';
import TabScreenHeader from '../components/TabScreenHeader';
import { getFont, getHeight, getWidth } from '../lib/CrossDevice';
import * as Progress from 'react-native-progress';

export default function ({ route }: any) {
    // const { isDarkmode, setTheme } = useTheme();
    const navigation = useNavigation();
    const [bottomViewState, setBottomViewState] = React.useState(false);

    const [uploadState, setUploadState] = React.useState(false);
    const [uploadFold, setUploadFold] = React.useState(false);
    const [uploadProgress, setUploadProgress] = React.useState(0);
    React.useEffect(() => {
        if (route?.params?.upload) {
            setUploadState(true);
        }
    }, [route?.params]);

    React.useEffect(() => {
        if (uploadState) {
            let progress = 0;
            const interval = setInterval(() => {
                progress += 1;
                setUploadProgress(progress);
                if (progress >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setUploadState(false);
                        setUploadProgress(0);
                    }, 5000);
                }
            }, 30);
            return () => clearInterval(interval);
        }
    }, [uploadState]);
    return (
        <View style={styles.container}>
            <SafeAreaView
                style={{
                    flex: 1,
                    width: '100%',
                    backgroundColor: BrandColor,
                    justifyContent: 'space-between',
                }}
            >
                <View>
                    <TabScreenHeader
                        headerTitle={'Foodfighter'}
                        headerRight={
                            <Pressable onPress={() => navigation.navigate('AlarmList')}>
                                <Image
                                    style={{
                                        width: getWidth(40),
                                        height: getHeight(32),
                                    }}
                                    source={require('../../assets/images/common/Icon_notifications_none.png')}
                                />
                            </Pressable>
                        }
                        level={1}
                    />
                    <View style={styles.adView}>
                        <Text>광고섹션</Text>
                    </View>
                    {/* 메인콘텐츠 캐릭터 & 버튼 */}
                    <View style={styles.mainContentView}>
                        {/* 콘텐츠 캐릭터 이미지영역 */}
                        <View
                            style={{
                                flex: 1,
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                marginHorizontal: getWidth(10),
                            }}
                        >
                            <Image
                                style={{
                                    width: getWidth(166),
                                    height: getHeight(224),
                                }}
                                source={require('../../assets/images/main/main_user_image.png')}
                            />
                        </View>
                        {/* 콘텐츠 캐릭터 이미지영역 */}
                        {/* 콘텐츠 리워드 & 보상 버튼영역 */}
                        <View
                            style={{
                                flex: 1,
                                marginLeft: getWidth(10),
                            }}
                        >
                            <Pressable style={{ ...styles.mainButton, backgroundColor: DefaultBlack, marginTop: getHeight(12) }}>
                                <Text
                                    style={{
                                        fontSize: getFont(14),
                                        fontFamily: 'Regular',
                                        color: WhiteColor,
                                        lineHeight: getHeight(18),

                                        marginTop: getHeight(6),
                                    }}
                                >
                                    누적리워드
                                </Text>
                                <Text
                                    style={{
                                        fontSize: getFont(22),
                                        color: WhiteColor,
                                        lineHeight: getHeight(32),
                                        fontFamily: 'SemiBold',
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontSize: getFont(15),
                                            fontFamily: 'Regular',
                                            lineHeight: getHeight(28),
                                        }}
                                    >
                                        ₩
                                    </Text>
                                    1,000,000
                                </Text>
                                <Image
                                    style={{
                                        position: 'absolute',
                                        width: getWidth(59),
                                        height: getWidth(39),
                                        top: getHeight(-12),
                                        left: getWidth(75) - getWidth(29.5),
                                    }}
                                    source={require('../../assets/images/main/Icon_coin.png')}
                                />
                            </Pressable>
                            <Pressable style={{ ...styles.mainButton, backgroundColor: WhiteColor, marginTop: getHeight(6) }}>
                                <Text
                                    style={{
                                        fontSize: getFont(18),
                                        fontFamily: 'SemiBold',
                                        color: DefaultBlack,
                                        lineHeight: getHeight(24),
                                        marginBottom: getHeight(4),
                                    }}
                                >
                                    2,000
                                </Text>
                                <Text
                                    style={{
                                        fontSize: getFont(14),
                                        color: '#5d5d5b',
                                        lineHeight: getHeight(18),
                                        fontFamily: 'Regular',
                                    }}
                                >
                                    A등급 기본 보상
                                </Text>
                            </Pressable>
                        </View>
                        {/* 콘텐츠 리워드 & 보상 버튼영역 */}
                    </View>
                    {/* 메인콘텐츠 캐릭터 & 버튼 */}
                    <View style={styles.levelGuideView}>
                        <Text style={styles.levelGuideTitle}>🔥NEXT TO Level UP 테이크슈터!🔥</Text>
                        <Text style={styles.levelGuideSubTitle}>100개의 영상이 완료되면 보상금 UP!</Text>
                        <View style={styles.levelGuideSubView}>
                            <Text style={styles.levelGuideSubText}>🚀 레벨업 하세요!</Text>
                            <Text style={styles.levelGuideSubText}>100/100</Text>
                        </View>
                        <Progress.Bar
                            progress={0.7}
                            width={getWidth(287)}
                            color={BrandColor}
                            borderColor="transparent"
                            unfilledColor="#eeeeee"
                            style={{
                                height: getHeight(8),
                                marginTop: getHeight(8),
                            }}
                        />
                    </View>
                </View>
                <View style={{ ...styles.bottomView, bottom: !bottomViewState ? getHeight(-545) : -1 }}>
                    <Pressable style={styles.bottomViewHeader} onPress={() => setBottomViewState(!bottomViewState)}>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <Image
                                style={{
                                    width: getWidth(43),
                                    height: getWidth(29),
                                    marginLeft: getWidth(8),
                                }}
                                source={require('../../assets/images/main/Icon_coin.png')}
                            />
                            <Text style={styles.bottomViewHeaderText}>
                                1,000,000원 상금 도착!{' '}
                                <Text
                                    style={{
                                        color: BrandColor,
                                    }}
                                >
                                    콘테스트 참여하기!
                                </Text>
                            </Text>
                        </View>
                        <Image
                            style={{
                                width: getWidth(36),
                                height: getWidth(36),
                                marginRight: getWidth(14),
                            }}
                            source={bottomViewState ? require('../../assets/images/main/Icon_arrow_down.png') : require('../../assets/images/main/Icon_arrow_up.png')}
                        />
                    </Pressable>
                    <View style={{ height: getHeight(40) }} />
                    <Pressable style={styles.contestView} onPress={() => navigation.navigate('ContestDetail')}>
                        <Image
                            style={{
                                width: getWidth(104),
                                height: getWidth(104),
                            }}
                            source={require('../../assets/images/main/main_contest_1.png')}
                        />
                        <View style={{ flex: 1, alignItems: 'center', marginLeft: getWidth(8) }}>
                            <Text style={styles.contestTitle}>전국 학식 배틀 공모전</Text>
                            <Text style={styles.contestTitleSub}>1년치 학식을 공짜로?~</Text>
                            <Text style={{ ...styles.contestTitleSub, fontSize: getFont(12), marginTop: getHeight(8) }}>총상금</Text>
                            <View style={styles.contestReward}>
                                <Image
                                    style={{
                                        width: getWidth(27),
                                        height: getWidth(18),
                                    }}
                                    source={require('../../assets/images/main/Icon_coin.png')}
                                />
                                <Text style={styles.contestRewardText}>3,000,000원</Text>
                            </View>
                        </View>
                    </Pressable>
                    <Pressable style={styles.contestView} onPress={() => navigation.navigate('ContestDetail')}>
                        <Image
                            style={{
                                width: getWidth(104),
                                height: getWidth(104),
                            }}
                            source={require('../../assets/images/main/main_contest_2.png')}
                        />
                        <View style={{ flex: 1, alignItems: 'center', marginLeft: getWidth(8) }}>
                            <Text style={styles.contestTitle}>3월은 삼겹살 데이~</Text>
                            <Text style={styles.contestTitleSub}>삼겹살 먹고 상금받을래!?</Text>
                            <Text style={{ ...styles.contestTitleSub, fontSize: getFont(12), marginTop: getHeight(8) }}>총상금</Text>
                            <View style={styles.contestReward}>
                                <Image
                                    style={{
                                        width: getWidth(27),
                                        height: getWidth(18),
                                    }}
                                    source={require('../../assets/images/main/Icon_coin.png')}
                                />
                                <Text style={styles.contestRewardText}>3,000,000원</Text>
                            </View>
                        </View>
                    </Pressable>
                    <Pressable style={styles.contestMoreButton} onPress={() => navigation.navigate('Contest')}>
                        <Text style={styles.contestMoreButtonText}>콘테스트 더보기</Text>
                    </Pressable>
                    <View style={{ height: getHeight(30) }} />
                    <View style={styles.adView}>
                        <Text>광고섹션</Text>
                    </View>
                </View>
                {uploadState && uploadFold && (
                    <Pressable style={styles.foldUploadContainer} onPress={() => setUploadFold(false)}>
                        <View style={styles.foldUploadHeader}>
                            <Text style={styles.foldUploadHeaderText}>{uploadProgress < 100 ? '영상 업로드중' : '업로드 완료'}</Text>
                            <Text
                                style={{
                                    fontSize: getFont(12),
                                    color: WhiteColor,
                                    fontFamily: 'Regular',
                                    textAlign: 'right',
                                }}
                            >
                                {uploadProgress}%
                            </Text>
                        </View>
                        <Progress.Bar
                            progress={uploadProgress / 100}
                            width={getWidth(322)}
                            color={uploadProgress < 30 ? '#db4437' : uploadProgress < 100 ? BrandColor : '#05ff62'}
                            borderColor={DefaultBlack}
                            unfilledColor="#eeeeee"
                            style={{
                                height: getHeight(8),
                                marginTop: getHeight(8),
                            }}
                        />
                    </Pressable>
                )}
            </SafeAreaView>
            <Modal visible={uploadState && !uploadFold} transparent>
                <View style={styles.uploadModal}>
                    <View style={styles.uploadModalView}>
                        <Pressable style={styles.uploadModalHeader} onPress={() => setUploadFold(true)}>
                            <Text style={styles.uploadModalHeaderText}>{uploadProgress < 100 ? '영상 업로드중' : '업로드 완료'}</Text>
                            <Image
                                style={{
                                    width: getWidth(36),
                                    height: getWidth(36),
                                }}
                                source={!uploadFold ? require('../../assets/images/main/Icon_arrow_down.png') : require('../../assets/images/main/Icon_arrow_up.png')}
                            />
                        </Pressable>
                        <Text style={styles.uploadModalContent}>{uploadProgress < 100 && '원활한 업로드를 위해 앱을 종료하지 말아주세요!'}</Text>

                        <View
                            style={{
                                paddingHorizontal: getWidth(24),
                                marginTop: getHeight(20),
                            }}
                        >
                            <View
                                style={{
                                    flexDirection: 'row',
                                    width: '100%',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: getFont(12),
                                        color: WhiteColor,
                                        fontFamily: 'Regular',
                                    }}
                                >
                                    Progress
                                </Text>
                                <Text
                                    style={{
                                        fontSize: getFont(12),
                                        color: WhiteColor,
                                        fontFamily: 'Regular',
                                        textAlign: 'right',
                                    }}
                                >
                                    {uploadProgress}%
                                </Text>
                            </View>
                            <Progress.Bar
                                progress={uploadProgress / 100}
                                width={getWidth(287)}
                                color={uploadProgress < 30 ? '#db4437' : uploadProgress < 100 ? BrandColor : '#05ff62'}
                                borderColor={DefaultBlack}
                                unfilledColor="#eeeeee"
                                style={{
                                    height: getHeight(8),
                                    marginTop: getHeight(8),
                                }}
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}
const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: WhiteColor, position: 'relative' },
    adView: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: getHeight(74),
        backgroundColor: WhiteColor,
        marginTop: getHeight(20),
    },
    mainContentView: {
        flexDirection: 'row',
        paddingHorizontal: getWidth(20),
        marginBottom: getHeight(40),
        marginTop: getHeight(20),
        alignItems: 'flex-start',
        justifyContent: 'space-between',
    },
    mainButton: {
        width: getWidth(150),
        height: getHeight(100),
        borderRadius: getWidth(26),
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
    },
    //
    levelGuideView: {
        marginHorizontal: getWidth(20),
        borderRadius: getWidth(16),
        backgroundColor: WhiteColor,
        padding: getWidth(24),
    },
    levelGuideTitle: {
        fontSize: getFont(16),
        fontFamily: 'Bold',
        color: DefaultBlack,
        lineHeight: getHeight(20),
    },

    levelGuideSubTitle: {
        fontSize: getFont(14),
        fontFamily: 'Regular',
        color: DefaultGray,
        lineHeight: getHeight(18),
    },
    levelGuideSubView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: getHeight(20),
    },
    levelGuideSubText: {
        fontSize: getFont(12),
        fontFamily: 'Regular',
        color: DefaultGray,
    },
    //bottomView
    bottomView: {
        width: getWidth(376),
        height: getHeight(605),
        backgroundColor: DefaultBlack,
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderTopLeftRadius: getWidth(26),
        borderTopRightRadius: getWidth(26),
        position: 'absolute',
        left: 0,
    },
    bottomViewHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: getHeight(60),
    },
    bottomViewHeaderText: {
        fontSize: getFont(15),
        fontFamily: 'SemiBold',
        color: WhiteColor,
    },
    contestView: {
        width: getWidth(291),
        height: getHeight(123),
        borderRadius: getWidth(16),
        backgroundColor: WhiteColor,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: getWidth(10),
        marginBottom: getHeight(30),
    },
    contestTitle: {
        fontSize: getFont(16),
        fontFamily: 'Bold',
        color: DefaultBlack,
        lineHeight: getHeight(21),
        textAlign: 'center',
    },
    contestTitleSub: {
        fontSize: getFont(14),
        fontFamily: 'Medium',
        color: DefaultGray,
        textAlign: 'center',
    },
    contestReward: {
        width: getWidth(159),
        height: getHeight(30),
        backgroundColor: DefaultBlack,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: getWidth(26),
        marginTop: getHeight(3),
        flexDirection: 'row',
    },
    contestRewardText: {
        fontSize: getFont(18),
        color: BrandColor,
        fontFamily: 'Bold',
        marginRight: getWidth(8),
    },

    // 콘테스트 더보기 버튼
    contestMoreButton: {
        width: getWidth(183),
        height: getHeight(44),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: BrandColor,
        borderRadius: getWidth(26),
    },
    contestMoreButtonText: {
        fontSize: getFont(16),
        fontFamily: 'Medium',
        color: WhiteColor,
    },

    // 업로드 프로그레스모달
    uploadModal: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    uploadModalView: {
        width: getWidth(335),
        height: getHeight(142),
        marginBottom: getHeight(70),
        backgroundColor: DefaultBlack,
        borderRadius: getWidth(16),
    },
    uploadModalHeader: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: getHeight(14),
        paddingHorizontal: getWidth(10),
    },
    uploadModalHeaderText: {
        fontSize: getFont(16),
        color: WhiteColor,
        fontFamily: 'Bold',
        marginLeft: getWidth(12),
        marginTop: getHeight(10),
    },
    uploadModalContent: {
        fontSize: getFont(14),
        color: WhiteColor,
        fontFamily: 'Regular',
        marginLeft: getWidth(22),
    },
    // 접힌 업로드 프로그레스모달
    foldUploadContainer: {
        width: getWidth(376),
        height: getHeight(60),
        backgroundColor: DefaultBlack,
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderTopLeftRadius: getWidth(26),
        borderTopRightRadius: getWidth(26),
        position: 'absolute',
        left: 0,
        bottom: 0,
        paddingHorizontal: getWidth(26),
        paddingTop: getHeight(12),
    },
    foldUploadHeader: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    foldUploadHeaderText: {
        fontSize: getFont(16),
        color: WhiteColor,
        fontFamily: 'Bold',
    },
});
