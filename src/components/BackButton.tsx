import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { getWidth } from '../lib/CrossDevice';

type PropsType = {
    onPress: () => void;
    white?: boolean;
};

const BackButton = ({ onPress, white }: PropsType) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            {white ? (
                <Image style={{ width: getWidth(22), height: getWidth(22) }} source={require('../../assets/images/common/Icon_backbutton_arrow_left_white.png')} />
            ) : (
                <Image style={{ width: getWidth(22), height: getWidth(22) }} source={require('../../assets/images/common/Icon_backbutton_arrow_left.png')} />
            )}
        </TouchableOpacity>
    );
};

export default BackButton;

const styles = StyleSheet.create({
    container: {
        width: 28,
        height: 28,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
