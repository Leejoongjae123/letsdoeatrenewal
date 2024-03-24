import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { BrandColor, DefaultBlack, DefaultGray, WhiteColor } from '../../utils/Colors';
import Header from '../../components/Header';
import BackButton from '../../components/BackButton';
import { getFont, getHeight, getWidth } from '../../lib/CrossDevice';

const CameraScreen = () => {
    const navigation = useNavigation();
    const [isRecording, setIsRecording] = React.useState(false);
    return (
        <>
            <View style={styles.container}>
                <SafeAreaView
                    style={{
                        width: '100%',
                    }}
                >
                    <View style={styles.header}>
                        <Image
                            style={{
                                width: getWidth(40),
                                height: getWidth(32),
                            }}
                            source={require('../../../assets/images/camera/Icon_restart_alt.png')}
                        />
                        <Image
                            style={{
                                width: getWidth(40),
                                height: getWidth(32),
                            }}
                            source={require('../../../assets/images/camera/Icon_bolt.png')}
                        />
                        <Image
                            style={{
                                width: getWidth(40),
                                height: getWidth(32),
                            }}
                            source={require('../../../assets/images/camera/Icon_center_focus_weak.png')}
                        />
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
                <View style={styles.content}>
                    <Pressable onPress={() => navigation.navigate('CameraSelect')}>
                        <Image
                            style={{
                                width: getWidth(50),
                                height: getWidth(50),
                                marginBottom: getHeight(20),
                            }}
                            source={require('../../../assets/images/camera/Icon_storage_thum.png')}
                        />
                    </Pressable>
                    <Pressable onPress={() => setIsRecording(!isRecording)}>
                        <Image
                            style={{
                                width: getWidth(84),
                                height: getWidth(66),
                                marginBottom: getHeight(12),
                            }}
                            source={isRecording ? require('../../../assets/images/camera/Icon_stop_circle.png') : require('../../../assets/images/camera/Icon_radio_button_checked.png')}
                        />
                    </Pressable>
                    <Pressable
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Image
                            style={{
                                width: getWidth(57),
                                height: getWidth(45),
                                marginBottom: getHeight(4),
                            }}
                            source={require('../../../assets/images/camera/Icon_pause_circle_filled.png')}
                        />
                        <Text
                            style={{
                                fontSize: getFont(14),
                                color: DefaultGray,
                                fontFamily: 'Medium',
                            }}
                        >
                            일시정지
                        </Text>
                    </Pressable>
                </View>
            </View>
            <View style={styles.bottomSection}>
                <Text style={styles.bottomSectionText}>00:00 / 05:00</Text>
            </View>
        </>
    );
};

export default CameraScreen;

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'space-between', backgroundColor: BrandColor },
    header: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: getWidth(20),
        backgroundColor: BrandColor,
    },
    content: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: getWidth(20),
    },
    bottomSection: { width: '100%', height: getHeight(76), alignItems: 'center', justifyContent: 'center', backgroundColor: DefaultBlack, paddingBottom: getHeight(20) },
    bottomSectionText: {
        fontSize: getFont(14),
        color: WhiteColor,
        fontFamily: 'Medium',
    },
});
