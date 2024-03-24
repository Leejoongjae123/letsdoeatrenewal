import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { FlatList, Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { BrandColor, DefaultBlack, DefaultGray, PureBlack, WhiteColor } from '../../utils/Colors';
import Header from '../../components/Header';
import BackButton from '../../components/BackButton';
import { getFont, getHeight, getWidth } from '../../lib/CrossDevice';

const ProgressContest = () => {
    const navigation = useNavigation();

    const [contestList, setContestList] = React.useState<any>([]);

    return (
        <View style={styles.container}>
            <SafeAreaView
                style={{
                    width: '100%',
                }}
            >
                <Header headerLeft={<BackButton onPress={() => navigation.goBack()} />} headerTitle="콘테스트" />
            </SafeAreaView>
            {contestList.length === 0 && (
                <View style={styles.noneResultScreenView}>
                    <Pressable
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                        onPress={() =>
                            setContestList([
                                { id: 1, title: '전국 학식 배틀 공모전', status: '진행중', userStatus: '참가중' },
                                { id: 2, title: '전국 학식 배틀 공모전', status: '진행중', userStatus: '참가중' },
                            ])
                        }
                    >
                        <Image
                            style={{
                                width: getWidth(255),
                                height: getWidth(255),
                            }}
                            source={require('../../../assets/images/common/Icon_none_result.png')}
                        />
                        <Text style={styles.noneResultText}>참여 내역이 없습니다</Text>
                    </Pressable>
                </View>
            )}
            {contestList.length > 0 && (
                <View style={styles.screenView}>
                    <FlatList
                        style={{ width: '100%', paddingHorizontal: getWidth(20), marginTop: getHeight(20) }}
                        data={contestList}
                        keyExtractor={(item: any) => item.id.toString()}
                        renderItem={({ item }: any) => (
                            <Pressable style={styles.contestItem} onPress={() => navigation.navigate('ContestDetail')}>
                                <Image
                                    style={{
                                        width: getWidth(156),
                                        height: getWidth(156),
                                    }}
                                    source={require('../../../assets/images/main/main_contest_1.png')}
                                />
                                <View style={styles.contestTextView}>
                                    <Text style={styles.contestTitle}>{item.title}</Text>
                                    <View style={styles.contestUserStatus}>
                                        <Text style={styles.contestUserStatusText}>{item.userStatus}</Text>
                                    </View>
                                    <Text style={styles.contestStatus}>{item.status}</Text>
                                </View>
                            </Pressable>
                        )}
                    />
                </View>
            )}
        </View>
    );
};

export default ProgressContest;

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: WhiteColor },
    screenView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    noneResultScreenView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: getHeight(156),
    },
    noneResultText: {
        fontSize: getFont(14),
        color: DefaultGray,
        fontFamily: 'Medium',
    },
    contestItem: {
        borderRadius: getWidth(10),
        backgroundColor: '#f8f8f8',
        padding: getWidth(10),
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: getHeight(20),
    },
    contestTextView: { flex: 1, marginLeft: getWidth(10), justifyContent: 'center', alignItems: 'center' },
    contestTitle: {
        fontSize: getFont(24),
        fontFamily: 'Medium',
        color: PureBlack,
        textAlign: 'center',
    },
    contestUserStatus: {
        width: getWidth(93),
        height: getHeight(22),
        borderRadius: getWidth(14),
        backgroundColor: DefaultBlack,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: getHeight(14),
        marginBottom: getHeight(18),
    },
    contestUserStatusText: {
        fontSize: getFont(14),
        fontFamily: 'Bold',
        color: BrandColor,
    },
    contestStatus: {
        fontSize: getFont(12),
        fontFamily: 'Regular',
        color: DefaultGray,
    },
});
