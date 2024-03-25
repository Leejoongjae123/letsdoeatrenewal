import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { FlatList, Image, Platform, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { BrandColor, DefaultBlack, WhiteColor } from '../../utils/Colors';
import Header from '../../components/Header';
import BackButton from '../../components/BackButton';
import { getFont, getHeight, getWidth } from '../../lib/CrossDevice';

const CameraSelectScreen = () => {
    const navigation = useNavigation();

    const [selected, setSelected] = React.useState<number[]>([]);

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
                <FlatList
                    data={Array.from({ length: 30 }).map((_, index) => index)}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={3}
                    renderItem={({ item, index }) => {
                        if (index === 0) {
                            return (
                                <Pressable
                                    style={{
                                        width: getWidth(125),
                                        height: getWidth(240),
                                        backgroundColor: DefaultBlack,
                                        borderWidth: 1,
                                        borderColor: WhiteColor,
                                        borderLeftWidth: index % 3 === 0 ? 0 : getWidth(1),
                                        borderRightWidth: index % 3 === 2 ? 0 : getWidth(1),
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                    onPress={() => {
                                        navigation.goBack();
                                    }}
                                >
                                    <Image
                                        style={{
                                            width: getWidth(40),
                                            height: getWidth(32),
                                            marginBottom: getHeight(8),
                                        }}
                                        source={require('../../../assets/images/camera/Icon_photo_camera.png')}
                                    />
                                    <Text
                                        style={{
                                            fontSize: getFont(14),
                                            color: WhiteColor,
                                            fontFamily: 'Medium',
                                            textAlign: 'center',
                                        }}
                                    >
                                        촬영하기
                                    </Text>
                                </Pressable>
                            );
                        }
                        return (
                            <Pressable
                                style={{
                                    width: getWidth(125),
                                    height: getWidth(240),
                                    backgroundColor: DefaultBlack,
                                    borderWidth: 1,
                                    borderColor: WhiteColor,
                                    borderLeftWidth: index % 3 === 0 ? 0 : getWidth(1),
                                    borderRightWidth: index % 3 === 2 ? 0 : getWidth(1),
                                }}
                                onPress={() => {
                                    if (selected.includes(index)) {
                                        setSelected(selected.filter((i) => i !== index));
                                    } else {
                                        if (selected.length < 10) {
                                            setSelected([...selected, index]);
                                        }
                                    }
                                }}
                            >
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'flex-end',
                                        paddingHorizontal: getWidth(5),
                                        paddingVertical: getHeight(10),
                                    }}
                                >
                                    <Image
                                        style={{
                                            width: getWidth(18),
                                            height: getWidth(18),
                                        }}
                                        source={selected.includes(index) ? require('../../../assets/images/camera/Icon_check_on.png') : require('../../../assets/images/camera/Icon_check_off.png')}
                                    />
                                </View>

                                <Text
                                    style={{
                                        fontSize: getFont(14),
                                        color: WhiteColor,
                                        fontFamily: 'Medium',
                                        textAlign: 'center',
                                        marginTop: getHeight(66),
                                    }}
                                >
                                    녹화된{'\n'}결과물
                                </Text>
                            </Pressable>
                        );
                    }}
                />
            </View>
            <View style={styles.bottomSection}>
                <Text style={styles.bottomSectionText}>최대 10개까지 선택할 수 있습니다.</Text>
                <Pressable
                    style={styles.bottomSectionButton}
                    onPress={() => {
                        navigation.navigate('CameraStorage');
                    }}
                >
                    <Text style={styles.bottomSectionButtonText}>완료</Text>
                </Pressable>
            </View>
        </>
    );
};

export default CameraSelectScreen;

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
