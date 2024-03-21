import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { DefaultBlack, WhiteColor } from '../utils/Colors';
import Header from '../components/Header';
import BackButton from '../components/BackButton';
import { getFont, getHeight, getWidth } from '../lib/CrossDevice';

const data = [
    { id: 1, type: '검수', title: '신청하신 영상 검수가 완료되었습니다.', date: '2024.02.02' },
    { id: 2, type: '출금', title: '신청하신 출금이 완료되었습니다.', date: '2024.02.02' },
    { id: 3, type: '콘테스트', title: '콘테스트 점검 안내', date: '2024.02.02' },
];

const AlarmList = () => {
    const navigation = useNavigation();
    const [tab, setTab] = React.useState('전체');
    const [alarmList, setAlarmList] = React.useState(data);

    React.useEffect(() => {
        if (tab === '전체') {
            setAlarmList(data);
        } else {
            const filtered = data.filter((item) => item.type === tab);
            setAlarmList(filtered);
        }
    }, [tab]);

    return (
        <View style={styles.container}>
            <SafeAreaView
                style={{
                    flex: 1,
                    width: '100%',
                }}
            >
                <Header headerLeft={<BackButton onPress={() => navigation.goBack()} />} headerTitle={'알람내역'} />
                <View style={styles.tabs}>
                    {['전체', '검수', '출금', '콘테스트'].map((item, index) => {
                        return (
                            <Pressable
                                key={'tabs-' + index}
                                onPress={() => {
                                    setTab(item);
                                }}
                            >
                                <Text style={tab === item ? styles.tabsTextActive : styles.tabsText}>{item}</Text>
                            </Pressable>
                        );
                    })}
                </View>
                <FlatList
                    data={alarmList}
                    keyExtractor={(item) => 'alarm-item-list-' + item.id.toString()}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.alarmListItem}>
                                <Text style={styles.alarmListItemSubText}>{item.type}</Text>
                                <View style={styles.alarmListItemContent}>
                                    <Text style={styles.alarmListItemContentText}>{item.title}</Text>
                                    <Text style={styles.alarmListItemSubText}>{item.date}</Text>
                                </View>
                            </View>
                        );
                    }}
                />
            </SafeAreaView>
        </View>
    );
};

export default AlarmList;

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: WhiteColor },
    tabs: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: getWidth(46),
        marginBottom: getHeight(16),
    },
    tabsText: {
        fontSize: getFont(18),
        color: DefaultBlack,
        fontFamily: 'Medium',
        textAlign: 'center',
    },
    tabsTextActive: {
        fontSize: getFont(18),
        color: DefaultBlack,
        fontFamily: 'Bold',
        textAlign: 'center',
    },
    // 알림리스트 아이템
    alarmListItem: {
        marginHorizontal: getWidth(20),
        borderBottomColor: '#eeeeee',
        borderBottomWidth: 1,
        marginTop: getHeight(20),
    },
    alarmListItemContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: getHeight(8),
        marginTop: getHeight(10),
    },
    alarmListItemSubText: {
        fontSize: getFont(14),
        color: '#5d5d5b',
        fontFamily: 'Regular',
    },
    alarmListItemContentText: {
        fontSize: getFont(16),
        color: DefaultBlack,
        fontFamily: 'Regular',
    },
});
