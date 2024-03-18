import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { getFont, getHeight, getWidth } from '../../lib/CrossDevice';
import { BrandColor, DefaultBlack } from '../../utils/Colors';
import { useNavigation } from '@react-navigation/native';

const Start = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.bottomView}>
                <Image
                    source={require('../../../assets/images/start/Image.png')}
                    style={{
                        width: getWidth(173),
                        height: getHeight(173),
                        marginTop: getHeight(58),
                        marginBottom: getHeight(32),
                    }}
                />
                <Text style={styles.title}>음식 동영상만 촬영하면{'\n'}현금처럼 바로 사용!</Text>
                <View style={styles.buttonContainer}>
                    <Pressable
                        style={styles.transparentButton}
                        onPress={() => {
                            navigation.navigate('Login');
                        }}
                    >
                        <Text style={styles.transparentButtonText}>Log in</Text>
                    </Pressable>
                    <Pressable
                        style={styles.button}
                        onPress={() => {
                            navigation.navigate('UseTerms');
                        }}
                    >
                        <Text style={styles.buttonText}>Join now</Text>
                    </Pressable>
                </View>
                <Text style={styles.bottomText}>Let's Do eat</Text>
            </View>
        </View>
    );
};

export default Start;

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'flex-end', backgroundColor: '#080a0b' },
    bottomView: {
        width: '100%',
        height: getHeight(506),
        borderTopLeftRadius: getWidth(26),
        borderTopRightRadius: getWidth(26),
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    title: {
        fontSize: getFont(32),
        textAlign: 'center',
        color: DefaultBlack,
        fontFamily: 'Bold',
        marginBottom: getHeight(37),
    },
    buttonContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: getWidth(20),
    },
    transparentButton: {
        width: getWidth(163),
        height: getHeight(48),
        borderWidth: 1,
        borderColor: BrandColor,
        borderRadius: getWidth(100),
        justifyContent: 'center',
        alignItems: 'center',
    },
    transparentButtonText: {
        fontSize: getFont(14),
        color: BrandColor,
        fontFamily: 'Bold',
    },
    button: {
        width: getWidth(163),
        height: getHeight(48),
        backgroundColor: BrandColor,
        borderRadius: getWidth(100),
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: getFont(14),
        color: '#fff',
        fontFamily: 'Bold',
    },
    bottomText: {
        fontSize: getFont(14),
        color: DefaultBlack,
        marginTop: getHeight(16),
    },
});
