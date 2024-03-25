import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Image, Modal, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { BrandColor, DefaultBlack, DefaultGray, PureBlack, WhiteColor } from '../../utils/Colors';
import Header from '../../components/Header';
import BackButton from '../../components/BackButton';
import { getFont, getHeight, getWidth } from '../../lib/CrossDevice';

const Withraw = () => {
    const navigation = useNavigation();
    const [filterDate, setFilterDate] = React.useState('1주일');

    const [filterDateSelect, setFilterDateSelect] = React.useState(false);

    const [modal, setModal] = React.useState(false);

    const [withrawAmount, setWithrawAmount] = React.useState<string>('');

    const [modalStatus, setModalStatus] = React.useState<string>('input');

    React.useEffect(() => {
        if (!modal) {
            setModalStatus('input');
            setWithrawAmount('');
        }
    }, [modal]);
    return (
        <View style={styles.container}>
            <SafeAreaView
                style={{
                    width: '100%',
                }}
            >
                <Header headerLeft={<BackButton onPress={() => navigation.goBack()} />} headerTitle="출금 내역" />
            </SafeAreaView>
            <ScrollView style={styles.screenView} bounces={false} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                    }}
                >
                    <Text style={styles.guideText}>누적된 리워드를 현금으로{'\n'}출금한 내역을 확인할 수 있습니다.</Text>
                    {/* 출금*/}
                    <Pressable
                        style={styles.withrawContainer}
                        onPress={() => {
                            setModal(true);
                        }}
                    >
                        <View style={styles.withrawView}>
                            <Image
                                style={{
                                    width: getWidth(80),
                                    height: getHeight(54),
                                }}
                                source={require('../../../assets/images/main/Icon_coin.png')}
                            />
                            <View
                                style={{
                                    flexDirection: 'row',
                                    marginRight: getWidth(12),
                                }}
                            >
                                <View
                                    style={{
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        marginRight: getWidth(26),
                                    }}
                                >
                                    <Text style={styles.withrawAmount}>출금 가능 금액</Text>
                                    <Text style={styles.withrawAmountPrice}>500,000</Text>
                                </View>
                                <View
                                    style={{
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Text style={styles.withrawAmount}>출금</Text>
                                    <Image
                                        style={{
                                            width: getWidth(27),
                                            height: getHeight(25),
                                            marginTop: getHeight(-4),
                                        }}
                                        source={require('../../../assets/images/common/Icon_withraw.png')}
                                    />
                                </View>
                            </View>
                        </View>
                    </Pressable>
                    {/* 출금 */}
                    <View
                        style={{
                            width: '100%',
                            height: getHeight(22),
                            backgroundColor: '#f8f8f8',
                        }}
                    />
                    {/* 내역 */}
                    <View style={styles.historyView}>
                        <View style={styles.historyItem}>
                            <Text style={styles.historyTotalText}>
                                총 <Text style={{ color: BrandColor }}> 0</Text>건
                            </Text>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                }}
                            >
                                <Pressable style={styles.historyFilter} onPress={() => setFilterDateSelect(!filterDateSelect)}>
                                    <Text style={styles.historyFilterText}>{filterDate}</Text>
                                    <Image style={styles.historyFilterArrow} source={require('../../../assets/images/common/Icon_arrow_down_gray.png')} />
                                </Pressable>
                            </View>
                        </View>
                        {/*  */}
                        <View style={{ height: getHeight(16) }} />
                        {/*  */}

                        <View style={styles.historyItem}>
                            <Text style={styles.historyDate}>2024.02.01</Text>

                            <Text style={styles.historyPrice}>500,000</Text>
                        </View>

                        <View style={styles.historyItem}>
                            <Text style={styles.historyDate}>2024.02.01</Text>
                        </View>
                        <View style={styles.historyItem}>
                            <Text style={styles.historyDate}>2024.02.01</Text>
                        </View>
                        {filterDateSelect && (
                            <View style={{ ...styles.historyItem, position: 'absolute', top: getHeight(44), right: getWidth(20), zIndex: 99999, borderBottomWidth: 0, paddingTop: 0 }}>
                                <View />
                                <View>
                                    <View style={{ height: getHeight(4) }} />
                                    <Pressable
                                        style={styles.historyFilter}
                                        onPress={() => {
                                            setFilterDate('1주일');
                                            setFilterDateSelect(false);
                                        }}
                                    >
                                        <Text style={styles.historyFilterText}>1주일</Text>
                                        <Image style={{ ...styles.historyFilterArrow, opacity: 0 }} source={require('../../../assets/images/common/Icon_arrow_down_gray.png')} />
                                    </Pressable>
                                    <View style={{ height: getHeight(4) }} />
                                    <Pressable
                                        style={styles.historyFilter}
                                        onPress={() => {
                                            setFilterDate('1개월');
                                            setFilterDateSelect(false);
                                        }}
                                    >
                                        <Text style={styles.historyFilterText}>1개월</Text>
                                    </Pressable>
                                    <View style={{ height: getHeight(8) }} />
                                    <Pressable
                                        style={styles.historyFilter}
                                        onPress={() => {
                                            setFilterDate('3개월');
                                            setFilterDateSelect(false);
                                        }}
                                    >
                                        <Text style={styles.historyFilterText}>3개월</Text>
                                    </Pressable>
                                    <View style={{ height: getHeight(8) }} />
                                    <Pressable
                                        style={styles.historyFilter}
                                        onPress={() => {
                                            setFilterDate('6개월');
                                            setFilterDateSelect(false);
                                        }}
                                    >
                                        <Text style={styles.historyFilterText}>6개월</Text>
                                    </Pressable>
                                </View>
                            </View>
                        )}
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: getHeight(12),
                            marginBottom: getHeight(20),
                        }}
                    >
                        <Pressable>
                            <Image style={{ width: getWidth(31), height: getWidth(31) }} source={require('../../../assets/images/common/Icon_arrow_left.png')} />
                        </Pressable>
                        <View style={{ width: getWidth(40) }} />
                        <Pressable>
                            <Image style={{ width: getWidth(31), height: getWidth(31) }} source={require('../../../assets/images/common/Icon_arrow_right.png')} />
                        </Pressable>
                    </View>
                    <Text
                        style={{
                            fontSize: getFont(14),
                            color: DefaultGray,
                            textAlign: 'center',
                        }}
                    >
                        출금 내역이 없습니다.
                    </Text>
                    {/* 내역 */}
                </View>
            </ScrollView>
            <Modal visible={modal} transparent>
                <View style={styles.modalView}>
                    <Pressable style={styles.modalBackground} onPress={() => setModal(false)} />

                    {/* 출금신청금액 입력 */}
                    {modalStatus === 'input' && (
                        <View style={styles.modalContent}>
                            <View style={styles.modalHeader}>
                                <Image style={{ width: getWidth(48), height: getWidth(32), opacity: 0 }} source={require('../../../assets/images/common/Icon_close_white.png')} />
                                <Text style={styles.modalTitle}>출금 신청 금액</Text>
                                <Pressable onPress={() => setModal(false)}>
                                    <Image style={{ width: getWidth(48), height: getWidth(32) }} source={require('../../../assets/images/common/Icon_close_white.png')} />
                                </Pressable>
                            </View>
                            <Text
                                style={{
                                    fontSize: getFont(15),
                                    color: BrandColor,
                                    fontFamily: 'Bold',
                                    textAlign: 'center',
                                    marginTop: getHeight(16),
                                }}
                            >
                                출금 금액을 입력해주세요
                            </Text>
                            <TextInput
                                style={styles.withrawInput}
                                value={withrawAmount}
                                onChange={(e) => {
                                    //숫자만입력,
                                    setWithrawAmount(e.nativeEvent.text.replace(/[^0-9]/g, ''));
                                }}
                                placeholder="출금 가능 금액 : 500,000원"
                                placeholderTextColor={'#c2c2c2'}
                                maxLength={10}
                            />
                            <Text
                                style={{
                                    fontSize: getFont(14),
                                    color: WhiteColor,
                                    fontFamily: 'Medium',
                                    textAlign: 'center',
                                    marginBottom: getHeight(70),
                                }}
                            >
                                출금 신청 금액은 원천세 3.3% 공제 후 제공됩니다.
                            </Text>
                            <Pressable
                                style={styles.modalButton}
                                onPress={() => {
                                    if (withrawAmount === '' || parseInt(withrawAmount) < 100000) {
                                        setModalStatus('error');
                                        return;
                                    }
                                    setModalStatus('auth');
                                }}
                            >
                                <Text style={styles.modalButtonText}>출금 신청</Text>
                            </Pressable>
                        </View>
                    )}
                    {/* 출금신청금액 입력 */}
                    {/* 출금불가 */}
                    {modalStatus === 'error' && (
                        <View style={styles.modalContent}>
                            <View style={styles.modalHeader}>
                                <Image style={{ width: getWidth(48), height: getWidth(32), opacity: 0 }} source={require('../../../assets/images/common/Icon_close_white.png')} />
                                <Text style={styles.modalTitle}>출금 불가</Text>
                                <Pressable onPress={() => setModal(false)}>
                                    <Image style={{ width: getWidth(48), height: getWidth(32) }} source={require('../../../assets/images/common/Icon_close_white.png')} />
                                </Pressable>
                            </View>
                            <Text
                                style={{
                                    marginTop: getHeight(70),
                                    fontSize: getFont(24),
                                    color: '#db4437',
                                    fontFamily: 'Bold',
                                    textAlign: 'center',
                                }}
                            >
                                출금 신청 가능 금액{'\n'}충족 미달
                            </Text>

                            <Text
                                style={{
                                    marginTop: getHeight(30),
                                    fontSize: getFont(18),
                                    color: BrandColor,
                                    fontFamily: 'Bold',
                                    textAlign: 'center',
                                }}
                            >
                                출금 가능 금액 최소 100,000원
                            </Text>
                        </View>
                    )}
                    {/* 출금불가 */}
                    {/* 본인 인증 */}
                    {modalStatus === 'auth' && (
                        <View style={styles.modalContent}>
                            <View style={styles.modalHeader}>
                                <Image style={{ width: getWidth(48), height: getWidth(32), opacity: 0 }} source={require('../../../assets/images/common/Icon_close_white.png')} />
                                <Text style={styles.modalTitle}>본인 인증</Text>
                                <Pressable onPress={() => setModal(false)}>
                                    <Image style={{ width: getWidth(48), height: getWidth(32) }} source={require('../../../assets/images/common/Icon_close_white.png')} />
                                </Pressable>
                            </View>
                            <Text style={{ marginTop: getHeight(50), fontSize: getFont(21), color: BrandColor, fontFamily: 'Bold', textAlign: 'center', marginBottom: getHeight(35) }}>
                                안전한 이용을 위해{'\n'}본인인증이 필요해요
                            </Text>
                            <Pressable
                                style={styles.modalButton}
                                onPress={() => {
                                    setModalStatus('complete');
                                }}
                            >
                                <Text style={styles.modalButtonText}>확인</Text>
                            </Pressable>
                            <View style={{ height: getHeight(12) }} />
                            <Pressable
                                style={{ ...styles.modalButton, backgroundColor: DefaultBlack, borderWidth: 1, borderColor: BrandColor }}
                                onPress={() => {
                                    setModal(false);
                                }}
                            >
                                <Text style={{ ...styles.modalButtonText, color: BrandColor }}>취소</Text>
                            </Pressable>
                        </View>
                    )}
                    {/* 본인 인증 */}
                    {/* 출금신청완료 */}
                    {modalStatus === 'complete' && (
                        <View style={styles.modalContent}>
                            <View style={styles.modalHeader}>
                                <Image style={{ width: getWidth(48), height: getWidth(32), opacity: 0 }} source={require('../../../assets/images/common/Icon_close_white.png')} />
                                <Text style={styles.modalTitle}>출금 신청 완료</Text>
                                <Pressable onPress={() => setModal(false)}>
                                    <Image style={{ width: getWidth(48), height: getWidth(32) }} source={require('../../../assets/images/common/Icon_close_white.png')} />
                                </Pressable>
                            </View>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'flex-end',
                                    marginTop: getHeight(40),
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: getFont(30),
                                        color: WhiteColor,
                                        fontFamily: 'Bold',
                                    }}
                                >
                                    홍길동
                                </Text>
                                <Text
                                    style={{
                                        fontSize: getFont(22),
                                        color: WhiteColor,
                                        fontFamily: 'Bold',
                                        lineHeight: getHeight(30),
                                    }}
                                >
                                    {'  '}님
                                </Text>
                            </View>
                            <Text
                                style={{
                                    fontSize: getFont(31),
                                    color: BrandColor,
                                    fontFamily: 'Bold',
                                    marginVertical: getHeight(6),
                                }}
                            >
                                {parseInt(withrawAmount).toLocaleString()}원
                            </Text>
                            <Text
                                style={{
                                    fontSize: getFont(23),
                                    color: WhiteColor,
                                    fontFamily: 'Bold',
                                }}
                            >
                                출금 신청이 완료됐습니다.
                            </Text>
                            <View style={{ height: getHeight(50) }} />
                            <Pressable
                                style={styles.modalButton}
                                onPress={() => {
                                    setModal(false);
                                }}
                            >
                                <Text style={styles.modalButtonText}>확인</Text>
                            </Pressable>
                        </View>
                    )}
                    {/* 출금신청완료 */}
                </View>
            </Modal>
        </View>
    );
};

export default Withraw;

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: WhiteColor },
    screenView: {
        flex: 1,
        width: '100%',
    },
    guideText: {
        fontSize: getFont(13),
        color: DefaultGray,
        textAlign: 'center',
        lineHeight: getWidth(17),
        fontFamily: 'Medium',
    },
    withrawView: {
        backgroundColor: BrandColor,
        borderRadius: getWidth(8),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: getHeight(14),
        paddingHorizontal: getWidth(14),
        marginBottom: getHeight(14),
    },
    withrawContainer: {
        width: '100%',
        paddingHorizontal: getWidth(14),
        marginTop: getHeight(14),
    },
    //출금가능금액
    withrawAmount: {
        fontSize: getFont(14),
        color: '#fdfdfd',
        fontFamily: 'Medium',
        textAlign: 'center',
    },
    withrawAmountPrice: {
        fontSize: getFont(28),
        color: WhiteColor,
        fontFamily: 'Bold',
        textAlign: 'center',
    },
    historyView: {
        width: '100%',
        paddingVertical: getHeight(6),
        paddingHorizontal: getWidth(20),
        position: 'relative',
    },
    historyItem: {
        width: '100%',
        paddingTop: getHeight(16),
        paddingBottom: getHeight(6),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: '#eeeeee',
        borderBottomWidth: 1,
    },
    historyTotalText: {
        fontSize: getFont(14),
        color: DefaultGray,
        fontFamily: 'Medium',
    },
    historyFilter: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: getWidth(6),
    },
    historyFilterText: {
        fontSize: getFont(14),
        color: DefaultGray,
        fontFamily: 'Medium',
    },
    historyFilterArrow: {
        width: getWidth(23),
        height: getHeight(23),
    },
    historyDate: {
        fontSize: getFont(16),
        color: DefaultBlack,
        fontFamily: 'Medium',
        width: getWidth(110),
    },
    historyType: {
        fontSize: getFont(16),
        color: DefaultBlack,
        fontFamily: 'Medium',
        textAlign: 'center',
        width: getWidth(115),
    },
    historyPrice: {
        fontSize: getFont(16),
        color: DefaultBlack,
        fontFamily: 'Medium',
        textAlign: 'right',
        marginRight: getWidth(16),
        width: getWidth(110),
    },
    historyPriceRed: {
        fontSize: getFont(16),
        color: '#db4437',
        fontFamily: 'Medium',
        textAlign: 'right',
        marginRight: getWidth(16),
        width: getWidth(110),
    },
    // modal

    modalView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    modalBackground: {
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        position: 'absolute',
    },
    modalHeader: {
        width: '100%',
        height: getHeight(80),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: getWidth(20),
    },
    modalTitle: {
        fontSize: getFont(22),
        color: WhiteColor,
        fontFamily: 'Bold',
        textAlign: 'center',
    },
    withrawInput: {
        width: getWidth(310),
        height: getHeight(58),
        paddingHorizontal: getWidth(36),
        fontSize: getFont(19),
        fontFamily: 'Bold',
        borderWidth: 1,
        borderColor: BrandColor,
        borderRadius: getWidth(26),
        marginVertical: getHeight(14),
        color: WhiteColor,
        textAlign: 'center',
    },
    modalContent: {
        width: getWidth(346),
        height: getHeight(406),
        backgroundColor: DefaultBlack,
        borderRadius: getWidth(26),
        justifyContent: 'flex-start',
        alignItems: 'center',
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
