import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { BrandColor, DefaultBlack, DefaultGray, PureBlack, WhiteColor } from '../../utils/Colors';
import Header from '../../components/Header';
import BackButton from '../../components/BackButton';
import { getFont, getHeight, getWidth } from '../../lib/CrossDevice';

const Reward = () => {
    const navigation = useNavigation();

    const [filterDate, setFilterDate] = React.useState('1주일');
    const [filterType, setFilterType] = React.useState('적립');

    const [filterDateSelect, setFilterDateSelect] = React.useState(false);
    const [filterTypeSelect, setFilterTypeSelect] = React.useState(false);

    return (
        <View style={styles.container}>
            <SafeAreaView
                style={{
                    width: '100%',
                }}
            >
                <Header headerLeft={<BackButton onPress={() => navigation.goBack()} />} headerTitle="누적 리워드" />
            </SafeAreaView>
            <ScrollView style={styles.screenView} bounces={false} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'flex-start',
                    }}
                >
                    <Text style={styles.guideText}>보상 리워드와 쿠폰 교환 내역을{'\n'}확인할 수 있습니다.</Text>
                    {/* 리워드*/}
                    <View
                        style={{
                            width: '100%',
                            paddingHorizontal: getWidth(14),
                            marginTop: getHeight(14),
                        }}
                    >
                        <View style={styles.rewardView}>
                            <Image
                                style={{
                                    width: getWidth(87),
                                    height: getHeight(58),
                                }}
                                source={require('../../../assets/images/main/Icon_fig.png')}
                            />
                            <View
                                style={{
                                    marginRight: getWidth(12),
                                }}
                            >
                                <Text style={{ fontSize: getFont(14), color: '#fdfdfd', fontFamily: 'Medium', textAlign: 'center' }}>현재까지 누적 리워드</Text>
                                <Text style={{ fontSize: getFont(28), color: BrandColor, fontFamily: 'SemiBold', textAlign: 'center' }}>1,000,000</Text>
                            </View>
                        </View>
                    </View>
                    {/* 리워드 */}
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
                                <Pressable style={styles.historyFilter} onPress={() => setFilterTypeSelect(!filterTypeSelect)}>
                                    <Text style={styles.historyFilterText}>{filterType}</Text>
                                    <Image style={styles.historyFilterArrow} source={require('../../../assets/images/common/Icon_arrow_down_gray.png')} />
                                </Pressable>
                            </View>
                        </View>
                        {/*  */}
                        <View style={{ height: getHeight(16) }} />
                        {/*  */}
                        <View style={styles.historyItem}>
                            <Text style={styles.historyDate}>2024.02.01</Text>
                        </View>
                        <View style={styles.historyItem}>
                            <Text style={styles.historyDate}>2024.02.01</Text>
                        </View>
                        <View style={styles.historyItem}>
                            <Text style={styles.historyDate}>2024.02.01</Text>
                            <Text style={styles.historyType}>보상 리워드</Text>
                            <Text style={styles.historyPrice}>2,000</Text>
                        </View>
                        <View style={styles.historyItem}>
                            <Text style={styles.historyDate}>2024.02.01</Text>
                            <Text style={styles.historyType}>콘테스트 상금</Text>
                            <Text style={styles.historyPrice}>500,000</Text>
                        </View>
                        <View style={styles.historyItem}>
                            <Text style={styles.historyDate}>2024.02.01</Text>
                            <Text style={styles.historyType}>쿠폰 교환</Text>
                            <Text style={styles.historyPriceRed}>-20,000</Text>
                        </View>
                        <View style={styles.historyItem}>
                            <Text style={styles.historyDate}>2024.02.01</Text>
                        </View>
                        <View style={styles.historyItem}>
                            <Text style={styles.historyDate}>2024.02.01</Text>
                        </View>
                        {filterDateSelect && (
                            <View style={{ ...styles.historyItem, position: 'absolute', top: getHeight(30), right: getWidth(72), zIndex: 999, borderBottomWidth: 0 }}>
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
                        {filterTypeSelect && (
                            <View style={{ ...styles.historyItem, position: 'absolute', top: getHeight(30), right: getWidth(20), zIndex: 999, borderBottomWidth: 0 }}>
                                <View />
                                <View>
                                    <View>
                                        <View style={{ height: getHeight(5) }} />
                                        <Pressable
                                            style={styles.historyFilter}
                                            onPress={() => {
                                                setFilterType('적립');
                                                setFilterTypeSelect(false);
                                            }}
                                        >
                                            <Text style={styles.historyFilterText}>적립</Text>
                                            <Image style={{ ...styles.historyFilterArrow, opacity: 0 }} source={require('../../../assets/images/common/Icon_arrow_down_gray.png')} />
                                        </Pressable>
                                        <View style={{ height: getHeight(8) }} />
                                        <Pressable
                                            style={styles.historyFilter}
                                            onPress={() => {
                                                setFilterType('사용');
                                                setFilterTypeSelect(false);
                                            }}
                                        >
                                            <Text style={styles.historyFilterText}>사용</Text>
                                        </Pressable>
                                    </View>
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
                        적립 내역이 없습니다.
                    </Text>
                    {/* 내역 */}
                    <View style={{ height: getHeight(140) }} />
                </View>
            </ScrollView>
        </View>
    );
};

export default Reward;

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
    rewardView: {
        backgroundColor: PureBlack,
        borderRadius: getWidth(8),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: getHeight(14),
        paddingHorizontal: getWidth(14),
        marginBottom: getHeight(14),
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
});
