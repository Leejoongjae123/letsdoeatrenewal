import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import BackButton from '../../components/BackButton';
import { BrandColor, DefaultBlack, WhiteColor } from '../../utils/Colors';
import Header from '../../components/Header';
import { getFont, getHeight, getWidth } from '../../lib/CrossDevice';

const UseTerms = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <SafeAreaView
                style={{
                    flex: 1,
                    width: '100%',
                }}
            >
                <Header headerLeft={<BackButton onPress={() => navigation.goBack()} />} />

                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingHorizontal: getWidth(20),
                    }}
                >
                    <View>
                        <Text style={styles.title}>이용약관</Text>
                        <ScrollView
                            showsHorizontalScrollIndicator={false}
                            showsVerticalScrollIndicator={false}
                            style={{
                                maxHeight: getHeight(400),
                            }}
                        >
                            <Text style={styles.content}>
                                약관내용 삽입 약관내용 삽입 약관내용 삽입 약관내용 삽입약관내용 삽입 약관내용 삽입약관내용 삽입 약관내용 삽입약관내용 삽입 약관내용 삽입약관내용 삽입 약관내용
                                삽입약관내용 삽입 약관내용 삽입약관내용 삽입 약관내용 삽입약관내용 삽입 약관내용 삽입약관내용 삽입 약관내용 삽입약관내용 삽입 약관내용 삽입약관내용 삽입 약관내용
                                삽입약관내용 삽입 약관내용 삽입약관내용 삽입 약관내용 삽입약관내용 삽입 약관내용 삽입약관내용 삽입 약관내용 삽입약관내용 삽입 약관내용 삽입약관내용 삽입 약관내용 삽입
                                약관내용 삽입 약관내용 삽입 약관내용 삽입 약관내용 삽입약관내용 삽입 약관내용 삽입약관내용 삽입 약관내용 삽입약관내용 삽입 약관내용 삽입약관내용 삽입 약관내용
                                삽입약관내용 삽입 약관내용 삽입약관내용 삽입 약관내용 삽입약관내용 삽입 약관내용 삽입약관내용 삽입 약관내용 삽입약관내용 삽입 약관내용 삽입약관내용 삽입 약관내용
                                삽입약관내용 삽입 약관내용 삽입약관내용 삽입 약관내용 삽입약관내용 삽입 약관내용 삽입약관내용 삽입 약관내용 삽입약관내용 삽입 약관내용 삽입약관내용 삽입 약관내용 삽입
                                약관내용 삽입 약관내용 삽입 약관내용 삽입 약관내용 삽입약관내용 삽입 약관내용 삽입약관내용 삽입 약관내용 삽입약관내용 삽입 약관내용 삽입약관내용 삽입 약관내용
                                삽입약관내용 삽입 약관내용 삽입약관내용 삽입 약관내용 삽입약관내용 삽입 약관내용 삽입약관내용 삽입 약관내용 삽입약관내용 삽입 약관내용 삽입약관내용 삽입 약관내용
                                삽입약관내용 삽입 약관내용 삽입약관내용 삽입 약관내용 삽입약관내용 삽입 약관내용 삽입약관내용 삽입 약관내용 삽입약관내용 삽입 약관내용 삽입약관내용 삽입 약관내용 삽입
                                약관내용 삽입 약관내용 삽입 약관내용 삽입 약관내용 삽입약관내용 삽입 약관내용 삽입약관내용 삽입 약관내용 삽입약관내용 삽입 약관내용 삽입약관내용 삽입 약관내용
                                삽입약관내용 삽입 약관내용 삽입약관내용 삽입 약관내용 삽입약관내용 삽입 약관내용 삽입약관내용 삽입 약관내용 삽입약관내용 삽입 약관내용 삽입약관내용 삽입 약관내용
                                삽입약관내용 삽입 약관내용 삽입약관내용 삽입 약관내용 삽입약관내용 삽입 약관내용 삽입약관내용 삽입 약관내용 삽입약관내용 삽입 약관내용 삽입약관내용 삽입 약관내용 삽입
                            </Text>
                        </ScrollView>
                        <View style={styles.checkView}>
                            <Image
                                source={require('../../../assets/images/common/Icon_checkbox.png')}
                                style={{
                                    width: getWidth(20),
                                    height: getWidth(20),
                                }}
                            />
                            <Text style={styles.checkText}>동의합니다.</Text>
                        </View>
                    </View>
                    <Pressable
                        style={styles.button}
                        onPress={() => {
                            navigation.navigate('PolicyTerms');
                        }}
                    >
                        <Text style={styles.buttonText}>다음</Text>
                    </Pressable>
                    <View style={{ height: getHeight(18) }} />
                </View>
            </SafeAreaView>
        </View>
    );
};

export default UseTerms;

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', backgroundColor: WhiteColor },
    title: {
        fontSize: getFont(32),
        fontFamily: 'Bold',
        color: DefaultBlack,
        marginTop: getHeight(30),
        marginBottom: getHeight(20),
    },
    content: {
        fontSize: getFont(14),
        color: '#5d5d5b',
        fontFamily: 'Regular',
        lineHeight: getHeight(20),
    },
    checkView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: getHeight(6),
    },
    checkText: {
        fontSize: getFont(12),
        marginLeft: getWidth(8),
        fontFamily: 'Medium',
        color: DefaultBlack,
    },
    button: {
        width: '100%',
        height: getHeight(48),
        borderRadius: getWidth(100),
        backgroundColor: BrandColor,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: getFont(14),
        color: WhiteColor,
        fontWeight: 'bold',
    },
});
