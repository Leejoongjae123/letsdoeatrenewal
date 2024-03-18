import * as React from 'react';
import { Text, View, StatusBar, StyleSheet, Platform } from 'react-native';
import { getFont, getHeight, getWidth } from '../lib/CrossDevice';
import { WhiteColor } from '../utils/Colors';

interface Props {
    headerLeft?: React.ReactNode;
    headerTitle?: React.ReactNode | string;
    headerRight?: React.ReactNode;
    underline?: boolean;
    transparentStatus?: boolean;
}

const Header = ({ headerLeft, headerTitle, headerRight, underline, transparentStatus }: Props) => {
    return (
        <View
            style={{
                ...styles.container,
                borderBottomWidth: underline ? 1 : 0,
            }}
        >
            <View style={styles.leftContainer}>{headerLeft}</View>
            <View style={styles.centerContainer}>{typeof headerTitle === 'string' ? <Text style={styles.titleText}>{headerTitle}</Text> : headerTitle}</View>
            <View style={styles.rightContainer}>{headerRight}</View>
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: getHeight(56),
        paddingHorizontal: getWidth(20),
        backgroundColor: '#fff',
        borderColor: '#f2f2f2',
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    leftContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    centerContainer: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        fontSize: getFont(18),
        textAlign: 'center',
        color: '#000',
        fontFamily: 'Bold',
    },
    rightContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
});
