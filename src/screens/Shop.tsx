import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { BrandColor, DefaultBlack, WhiteColor } from '../utils/Colors';
import TabScreenHeader from '../components/TabScreenHeader';
import { getFont, getHeight, getWidth } from '../lib/CrossDevice';

const Shop = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <SafeAreaView
                style={{
                    flex: 1,
                    width: '100%',
                }}
            >
                <TabScreenHeader
                    headerRight={
                        <Pressable onPress={() => navigation.navigate('AlarmList')}>
                            <Image
                                style={{
                                    width: getWidth(40),
                                    height: getHeight(32),
                                }}
                                source={require('../../assets/images/common/Icon_notifications_none.png')}
                            />
                        </Pressable>
                    }
                />
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Text style={styles.mainText}>서비스 준비중</Text>
                </View>
            </SafeAreaView>
        </View>
    );
};

export default Shop;

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: BrandColor },
    mainText: {
        fontSize: getFont(32),
        color: DefaultBlack,
        fontFamily: 'Bold',
    },
});
