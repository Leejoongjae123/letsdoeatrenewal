import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { FlatList, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { DefaultBlack, WhiteColor } from '../../utils/Colors';
import Header from '../../components/Header';
import BackButton from '../../components/BackButton';
import { getFont, getHeight, getWidth } from '../../lib/CrossDevice';

const data = [
    { id: 1, type: '서비스', title: '콘테스트 점검 안내', date: '2024.02.02' },
    { id: 2, type: '업데이트', title: '콘테스트 점검 안내', date: '2024.02.02' },
    { id: 3, type: '약관', title: '콘테스트 점검 안내', date: '2024.02.02' },
];

const Notice = () => {
    const navigation = useNavigation();

    const [tab, setTab] = React.useState('전체');
    const [noticeList, setNoticeList] = React.useState(data);

    React.useEffect(() => {
        if (tab === '전체') {
            setNoticeList(data);
        } else {
            const filtered = data.filter((item) => item.type === tab);
            setNoticeList(filtered);
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
                <Header headerLeft={<BackButton onPress={() => navigation.goBack()} />} headerTitle={'공지사항'} />
                <View style={styles.tabs}>
                    {['전체', '서비스', '업데이트', '약관'].map((item, index) => {
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
                    data={noticeList}
                    keyExtractor={(item) => 'notice-item-list-' + item.id.toString()}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.noticeListItem}>
                                <Text style={styles.noticeListItemSubText}>{item.type}</Text>
                                <View style={styles.noticeListItemContent}>
                                    <Text style={styles.noticeListItemContentText}>{item.title}</Text>
                                    <Text style={styles.noticeListItemSubText}>{item.date}</Text>
                                </View>
                            </View>
                        );
                    }}
                />
            </SafeAreaView>
        </View>
    );
};

export default Notice;

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
    noticeListItem: {
        marginHorizontal: getWidth(20),
        borderBottomColor: '#eeeeee',
        borderBottomWidth: 1,
        marginTop: getHeight(20),
    },
    noticeListItemContent: {
        paddingBottom: getHeight(8),
        marginTop: getHeight(10),
    },
    noticeListItemSubText: {
        fontSize: getFont(14),
        color: '#5d5d5b',
        fontFamily: 'Regular',
        marginTop: getHeight(8),
    },
    noticeListItemContentText: {
        fontSize: getFont(16),
        color: DefaultBlack,
        fontFamily: 'Regular',
    },
});
