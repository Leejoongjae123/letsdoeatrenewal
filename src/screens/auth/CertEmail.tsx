import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { BrandColor, DefaultBlack, WhiteColor } from '../../utils/Colors';
import Header from '../../components/Header';
import BackButton from '../../components/BackButton';
import { getFont, getHeight, getWidth } from '../../lib/CrossDevice';

const CertEmail = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <SafeAreaView
                style={{
                    flex: 1,
                    width: '100%',
                    alignItems: 'center',
                }}
            >
                <Header headerLeft={<BackButton onPress={() => navigation.goBack()} />} />
                <Image
                    source={require('../../../assets/images/cert_email_image.png')}
                    style={{
                        width: getWidth(120),
                        height: getWidth(120),
                        marginTop: getHeight(30),
                        marginBottom: getHeight(48),
                    }}
                />
                <Text style={styles.title}>이메일 인증</Text>
                <Text style={styles.sub}>가입하신 이메일 주소로 발송된{'\n'}이메일 인증을 진행해주시길 바랍니다.</Text>

                <View style={{ width: '100%', paddingHorizontal: getWidth(20), marginTop: getHeight(235) }}>
                    <Pressable style={styles.button} onPress={() => navigation.navigate('RegisterComplete')}>
                        <Text style={styles.buttonText}>이메일 다시 보내기</Text>
                    </Pressable>
                </View>
            </SafeAreaView>
        </View>
    );
};

export default CertEmail;

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
