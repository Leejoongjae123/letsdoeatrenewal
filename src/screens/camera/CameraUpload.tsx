import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Image, Platform, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { BrandColor, DefaultBlack, WhiteColor } from '../../utils/Colors';
import Header from '../../components/Header';
import BackButton from '../../components/BackButton';
import { getFont, getHeight, getWidth } from '../../lib/CrossDevice';

const CameraUploadScreen = () => {
    const navigation = useNavigation();
    const [location, setLocation] = React.useState('');
    const [name, setName] = React.useState('');
    return (
        <>
            <View style={styles.container}>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    style={{
                        width: '100%',
                    }}
                >
                    <SafeAreaView
                        style={{
                            width: '100%',
                            paddingTop: Platform.OS === 'android' ? getHeight(36) : 0,
                        }}
                    >
                        <View style={styles.header}>
                            <Pressable
                                style={{
                                    width: getWidth(40),
                                }}
                                onPress={() => {
                                    navigation.goBack();
                                }}
                            >
                                <Image style={{ width: getWidth(22), height: getWidth(22) }} source={require('../../../assets/images/common/Icon_backbutton_arrow_left_white.png')} />
                            </Pressable>
                            <Text
                                style={{
                                    fontSize: getFont(18),
                                    color: WhiteColor,
                                    fontFamily: 'Bold',
                                }}
                            >
                                업로드
                            </Text>
                            <Pressable
                                style={{
                                    width: getWidth(40),
                                }}
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
                            width: '100%',
                            alignItems: 'center',
                        }}
                    >
                        <View
                            style={{
                                marginTop: getHeight(10),
                                width: getWidth(143),
                                height: getHeight(218),
                                backgroundColor: BrandColor,
                            }}
                        />
                    </View>
                    <View
                        style={{
                            width: '100%',
                            paddingHorizontal: getWidth(20),
                            marginTop: getHeight(80),
                        }}
                    >
                        <Text style={styles.label}>식당 위치</Text>
                        <TextInput value={location} onChangeText={setLocation} style={styles.input} />
                        <View style={{ height: getHeight(40) }} />
                        <Text style={styles.label}>음식이름</Text>
                        <TextInput value={name} onChangeText={setName} style={styles.input} />
                        <View style={{ height: getHeight(30) }} />
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <Image
                                style={{
                                    width: getWidth(23),
                                    height: getWidth(23),
                                    marginRight: getWidth(12),
                                }}
                                source={require('../../../assets/images/camera/Icon_radio.png')}
                            />
                            <Text
                                style={{
                                    fontSize: getFont(15),
                                    color: WhiteColor,
                                    fontFamily: 'Medium',
                                }}
                            >
                                영상 가이드를 준수하여 촬영했다면,{'\n'}체크박스를 클릭해주세요
                            </Text>
                        </View>
                    </View>
                    <View style={{ height: getHeight(60) }} />
                    <View style={styles.bottomSection}>
                        <Pressable style={{ ...styles.bottomSectionButton, backgroundColor: DefaultBlack, borderColor: BrandColor, borderWidth: 1 }} onPress={() => {}}>
                            <Text style={{ ...styles.bottomSectionButtonText, color: BrandColor }}>임시저장</Text>
                        </Pressable>
                        <View style={{ width: getWidth(20) }} />
                        <Pressable
                            style={styles.bottomSectionButton}
                            onPress={() =>
                                //Home params upload: true
                                navigation.navigate('Home', {
                                    upload: true,
                                })
                            }
                        >
                            <Text style={styles.bottomSectionButtonText}>완료</Text>
                        </Pressable>
                    </View>
                    <View style={{ height: getHeight(60) }} />
                </ScrollView>
            </View>
        </>
    );
};

export default CameraUploadScreen;

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'flex-start', backgroundColor: DefaultBlack },
    header: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: getWidth(20),
        backgroundColor: DefaultBlack,
        marginBottom: getHeight(10),
    },
    label: {
        fontSize: getFont(19),
        color: WhiteColor,
        fontFamily: 'Medium',
    },
    input: {
        width: '100%',
        height: getHeight(40),

        color: WhiteColor,
        fontSize: getFont(16),
        fontFamily: 'Medium',
        marginTop: getHeight(6),
        padding: 0,
        borderBottomColor: WhiteColor,
        borderBottomWidth: 1,
    },
    bottomSection: {
        width: '100%',
        height: getHeight(76),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: DefaultBlack,
        paddingHorizontal: getWidth(20),
    },
    bottomSectionText: {
        fontSize: getFont(14),
        color: WhiteColor,
        fontFamily: 'Medium',
    },
    bottomSectionButton: {
        width: getWidth(148),
        height: getHeight(41),
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
