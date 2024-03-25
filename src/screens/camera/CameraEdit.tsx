import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Image, Platform, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { BrandColor, DefaultBlack, WhiteColor } from '../../utils/Colors';
import Header from '../../components/Header';
import BackButton from '../../components/BackButton';
import { getFont, getHeight, getWidth } from '../../lib/CrossDevice';

const CameraEditScreen = () => {
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
                            자르기
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
                <View
                    style={{
                        flex: 1,
                        width: '100%',
                        paddingHorizontal: getWidth(25),
                        paddingVertical: getHeight(8),
                    }}
                >
                    <View style={{ backgroundColor: BrandColor, width: '100%', height: '100%' }} />
                </View>
                <View style={styles.editContainer}>
                    <View style={styles.editView}>
                        <Image
                            style={{
                                width: getWidth(40),
                                height: getWidth(40),
                                position: 'absolute',
                                left: getWidth(-9),
                            }}
                            source={require('../../../assets/images/camera/Icon_chevron_left.png')}
                        />
                        <View
                            style={{
                                width: getWidth(270),
                                height: getHeight(54),
                                backgroundColor: BrandColor,
                            }}
                        />
                        <Image
                            style={{
                                width: getWidth(40),
                                height: getWidth(40),
                                position: 'absolute',
                                right: getWidth(-9),
                            }}
                            source={require('../../../assets/images/camera/Icon_chevron_right.png')}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.bottomSection}>
                <View />
                <Pressable
                    style={styles.bottomSectionButton}
                    onPress={() => {
                        navigation.goBack();
                    }}
                >
                    <Text style={styles.bottomSectionButtonText}>적용</Text>
                </Pressable>
            </View>
        </>
    );
};

export default CameraEditScreen;

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
    editContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: getWidth(8),
        paddingTop: getHeight(20),
        borderTopWidth: 1,
        borderTopColor: WhiteColor,
    },
    editView: {
        paddingVertical: getHeight(7),
        backgroundColor: '#1d1e23',
        borderRadius: getWidth(12),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: getWidth(24),
        position: 'relative',
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
