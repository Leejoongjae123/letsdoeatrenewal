import { Image, Platform, Pressable, StyleSheet, View, useWindowDimensions } from 'react-native';
import { BrandColor, DefaultBlack } from '../utils/Colors';
import { getHeight, getWidth } from '../lib/CrossDevice';

const CustomTabBar = ({ state, descriptors, navigation }: any) => {
    const { width } = useWindowDimensions();
    return (
        <>
            <View style={styles.customTabContainer}>
                <Pressable style={styles.tabMenu} onPress={() => navigation.navigate('Home')}>
                    {state.index === 0 ? (
                        <Image
                            style={{
                                width: getWidth(30),
                                height: getWidth(30),
                            }}
                            source={require('../../assets/images/tabbar/Icon_home_active.png')}
                        />
                    ) : (
                        <Image
                            style={{
                                width: getWidth(30),
                                height: getWidth(30),
                            }}
                            source={require('../../assets/images/tabbar/Icon_home.png')}
                        />
                    )}
                </Pressable>
                <Pressable style={styles.tabMenu} onPress={() => navigation.navigate('Contest')}>
                    {state.index === 1 || state.index === 4 ? (
                        <Image
                            style={{
                                width: getWidth(30),
                                height: getWidth(30),
                            }}
                            source={require('../../assets/images/tabbar/Icon_emoji_events_active.png')}
                        />
                    ) : (
                        <Image
                            style={{
                                width: getWidth(30),
                                height: getWidth(30),
                            }}
                            source={require('../../assets/images/tabbar/Icon_emoji_events.png')}
                        />
                    )}
                </Pressable>
                <Pressable style={styles.tabMenu}></Pressable>
                <Pressable style={styles.tabMenu} onPress={() => navigation.navigate('Shop')}>
                    {state.index === 2 ? (
                        <Image
                            style={{
                                width: getWidth(30),
                                height: getWidth(30),
                            }}
                            source={require('../../assets/images/tabbar/Icon_local_offer_active.png')}
                        />
                    ) : (
                        <Image
                            style={{
                                width: getWidth(30),
                                height: getWidth(30),
                            }}
                            source={require('../../assets/images/tabbar/Icon_local_offer.png')}
                        />
                    )}
                </Pressable>
                <Pressable style={styles.tabMenu} onPress={() => navigation.navigate('Mypage')}>
                    {state.index === 3 ? (
                        <Image
                            style={{
                                width: getWidth(30),
                                height: getWidth(30),
                            }}
                            source={require('../../assets/images/tabbar/Icon_person_active.png')}
                        />
                    ) : (
                        <Image
                            style={{
                                width: getWidth(30),
                                height: getWidth(30),
                            }}
                            source={require('../../assets/images/tabbar/Icon_person.png')}
                        />
                    )}
                </Pressable>
                <Pressable style={{ ...styles.roundTabMenu, right: width / 2 - getWidth(28) }}>
                    <Image
                        style={{
                            width: getWidth(56),
                            height: getWidth(56),
                        }}
                        source={require('../../assets/images/tabbar/Icon_add.png')}
                    />
                </Pressable>
            </View>
        </>
    );
};

export default CustomTabBar;

const styles = StyleSheet.create({
    customTabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        backgroundColor: DefaultBlack,
        height: Platform.OS === 'ios' ? getHeight(80) : getHeight(60),
        position: 'relative',
        paddingTop: getHeight(8),
    },
    tabMenu: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    roundTabMenu: {
        position: 'absolute',
        width: getWidth(56),
        height: getWidth(56),
        borderRadius: getWidth(56),
        bottom: Platform.OS === 'ios' ? getHeight(40) : getHeight(20),
        backgroundColor: BrandColor,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
