import * as React from 'react';
import { Text, View, StatusBar, StyleSheet, Platform } from 'react-native';
import { getFont, getHeight, getWidth } from '../lib/CrossDevice';
import { BrandColor, DefaultBlack, WhiteColor } from '../utils/Colors';

interface Props {
    headerLeft?: React.ReactNode;
    headerTitle?: React.ReactNode | string;
    headerRight?: React.ReactNode;
    underline?: boolean;
    transparentStatus?: boolean;
}

const TabScreenHeader = ({ headerLeft, headerTitle, headerRight, underline, transparentStatus }: Props) => {
    return (
        <View
            style={{
                ...styles.container,
                borderBottomWidth: underline ? 1 : 0,
            }}
        >
            <View style={styles.leftContainer}>
                {typeof headerTitle === 'string' ? <Text style={styles.titleText}>{headerTitle}</Text> : headerTitle}
                <View style={styles.levelView}>
                    <Text style={styles.levelText}>Lv1.로드슈터</Text>
                </View>
            </View>
            <View style={styles.rightContainer}>{headerRight}</View>
        </View>
    );
};

export default TabScreenHeader;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: getWidth(20),
        backgroundColor: BrandColor,
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    leftContainer: {
        flex: 3,

        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    titleText: {
        fontSize: getFont(32),
        textAlign: 'left',
        color: DefaultBlack,
        fontFamily: 'Bold',
    },
    rightContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    levelView: {
        width: getWidth(102),
        height: getHeight(21),
        backgroundColor: WhiteColor,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: getHeight(4),
        borderRadius: getWidth(26),
    },
    levelText: {
        fontSize: getFont(14),
        color: DefaultBlack,
        textAlign: 'center',
        fontFamily: 'Regular',
    },
});
