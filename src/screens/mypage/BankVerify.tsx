import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { BrandColor, DefaultBlack, WhiteColor } from '../../utils/Colors';
import Header from '../../components/Header';
import BackButton from '../../components/BackButton';
import { getFont, getHeight, getWidth } from '../../lib/CrossDevice';

const BankVerify = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <SafeAreaView
                style={{
                    width: '100%',
                }}
            >
                <Header headerLeft={<BackButton onPress={() => navigation.goBack()} />} />
            </SafeAreaView>
            <View
                style={{
                    width: '100%',
                    flex: 1,
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    paddingTop: getHeight(140),
                }}
            >
                <Image
                    source={require('../../../assets/images/bank_image.png')}
                    style={{
                        width: getWidth(120),
                        height: getWidth(120),
                        marginBottom: getHeight(32),
                    }}
                />
                <Text style={styles.title}>계좌 인증</Text>
                <Text style={styles.sub}>
                    누적된 리워드를 출금하기 위해선{'\n'}
                    본인명의의 계좌를 인증해야 합니다.
                </Text>

                <View style={{ width: '100%', paddingHorizontal: getWidth(20), marginTop: getHeight(65) }}>
                    <Pressable style={styles.button} onPress={() => {}}>
                        <Text style={styles.buttonText}>인증 시작하기</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

export default BankVerify;

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: WhiteColor },
    title: {
        fontSize: getFont(32),
        fontFamily: 'Bold',
        color: DefaultBlack,
        textAlign: 'center',
        marginBottom: getHeight(8),
    },
    sub: {
        fontSize: getFont(14),
        color: '#5d5d5b',
        fontFamily: 'Regular',
        textAlign: 'center',
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
