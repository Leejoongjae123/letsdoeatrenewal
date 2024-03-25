import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Image, Platform, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { BrandColor, DefaultBlack, WhiteColor } from '../../utils/Colors';
import Header from '../../components/Header';
import BackButton from '../../components/BackButton';
import { getFont, getHeight, getWidth } from '../../lib/CrossDevice';

const CameraStorageScreen = () => {
    const navigation = useNavigation();

    return (
        <>
            <View style={styles.container}>
                <SafeAreaView
                    style={{
                        width: '100%',
                        paddingTop: Platform.OS === 'android' ? getHeight(36) : 0,
                    }}
                >
                    <View style={styles.header}>
                        <Image
                            style={{
                                width: getWidth(40),
                                height: getWidth(32),
                                opacity: 0,
                            }}
                            source={require('../../../assets/images/camera/Icon_close.png')}
                        />
                        <Text
                            style={{
                                fontSize: getFont(18),
                                color: WhiteColor,
                                fontFamily: 'Bold',
                            }}
                        >
                            보관함
                        </Text>
                        <Pressable
                            onPress={() => {
                                navigation.goBack();
                            }}
                        >
                            <Image
                                style={{
                                    width: getWidth(40),
                                    height: getWidth(32),
                                }}
                                source={require('../../../assets/images/camera/Icon_close.png')}
                            />
                        </Pressable>
                    </View>
                </SafeAreaView>
                <View style={{ width: '100%' }}>
                    <Pressable style={styles.editButton} onPress={() => navigation.navigate('CameraEdit')}>
                        <Text style={styles.editButtonText}>클립 자르기 </Text>
                        <Image
                            style={{
                                width: getWidth(20),
                                height: getWidth(25),
                            }}
                            source={require('../../../assets/images/camera/Icon_content_cut.png')}
                        />
                    </Pressable>
                    <View style={styles.selectList}>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                            <View
                                style={{
                                    alignItems: 'center',
                                    marginLeft: getWidth(12),
                                }}
                            >
                                <View style={styles.listItem} />
                                <View style={styles.listItemBorder} />
                            </View>
                            <Pressable style={styles.addItem} onPress={() => navigation.goBack()}>
                                <Image
                                    style={{
                                        width: getWidth(28),
                                        height: getWidth(28),
                                    }}
                                    source={require('../../../assets/images/tabbar/Icon_add.png')}
                                />
                            </Pressable>
                        </ScrollView>
                    </View>
                </View>
            </View>
            <View style={styles.bottomSection}>
                <Text style={styles.bottomSectionText}>최대 10개까지 선택할 수 있습니다.</Text>
                <Pressable
                    style={styles.bottomSectionButton}
                    onPress={() => {
                        navigation.navigate('CameraUpload');
                    }}
                >
                    <Text style={styles.bottomSectionButtonText}>완료</Text>
                </Pressable>
            </View>
        </>
    );
};

export default CameraStorageScreen;

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'space-between', backgroundColor: DefaultBlack },
    header: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: getWidth(20),
        backgroundColor: DefaultBlack,
        marginBottom: getHeight(10),
    },
    editButton: {
        margin: getWidth(20),
        borderRadius: getWidth(26),
        borderWidth: 1,
        borderColor: BrandColor,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: getWidth(106),
        height: getHeight(25),
    },
    editButtonText: { fontSize: getFont(14), color: BrandColor, fontFamily: 'Medium' },
    selectList: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: getWidth(8),
        marginTop: getHeight(20),
        paddingTop: getHeight(12),
        borderTopWidth: 1,
        borderTopColor: WhiteColor,
    },
    listItem: {
        width: getWidth(50),
        height: getWidth(76),
        backgroundColor: BrandColor,
        marginBottom: getHeight(10),
    },
    listItemBorder: {
        width: getWidth(20),
        height: getHeight(2),
        backgroundColor: '#c2c2c2',
        borderRadius: getWidth(2),
    },
    addItem: {
        width: getWidth(50),
        height: getWidth(76),
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: getWidth(12),
        borderWidth: 1,
        borderColor: WhiteColor,
        backgroundColor: '#1d1e23',
    },
    bottomSection: {
        width: '100%',
        height: getHeight(76),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: DefaultBlack,
        paddingBottom: getHeight(20),
        paddingHorizontal: getWidth(20),
    },
    bottomSectionText: {
        fontSize: getFont(14),
        color: WhiteColor,
        fontFamily: 'Medium',
    },
    bottomSectionButton: {
        width: getWidth(83),
        height: getHeight(40),
        backgroundColor: BrandColor,
        borderRadius: getHeight(26),
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomSectionButtonText: {
        fontSize: getFont(19),
        color: WhiteColor,
        fontFamily: 'Medium',
    },
});
