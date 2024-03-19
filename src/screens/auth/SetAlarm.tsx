import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { BrandColor, DefaultBlack, WhiteColor } from '../../utils/Colors';
import Header from '../../components/Header';
import BackButton from '../../components/BackButton';
import { getFont, getHeight, getWidth } from '../../lib/CrossDevice';
import { AuthContext } from '../../provider/AuthProvider';

const SetAlarm = () => {
    const navigation = useNavigation();
    const { testLogin } = React.useContext(AuthContext);
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
                    source={require('../../../assets/images/set_alarm_image.png')}
                    style={{
                        width: getWidth(120),
                        height: getWidth(120),
                        marginTop: getHeight(30),
                        marginBottom: getHeight(48),
                    }}
                />
                <Text style={styles.title}>알람 설정</Text>
                <Text style={styles.sub}>
                    각종 콘테스트 및 보상 내역, 이벤트 정보를{'\n'}
                    받기 위해선 알람 설정을 해주세요!
                </Text>

                <View style={{ width: '100%', paddingHorizontal: getWidth(20), marginTop: getHeight(188) }}>
                    <Pressable style={styles.button} onPress={testLogin}>
                        <Text style={styles.buttonText}>Yes, notify me</Text>
                    </Pressable>
                    <Pressable style={styles.transparentButton} onPress={testLogin}>
                        <Text style={styles.transparentButtonText}>No, thanks</Text>
                    </Pressable>
                </View>
            </SafeAreaView>
        </View>
    );
};

export default SetAlarm;

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
    transparentButton: {
        width: '100%',
        height: getHeight(48),
        borderWidth: 1,
        borderColor: BrandColor,
        borderRadius: getWidth(100),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: getHeight(12),
    },
    transparentButtonText: {
        fontSize: getFont(14),
        color: BrandColor,
        fontFamily: 'Bold',
    },
});
