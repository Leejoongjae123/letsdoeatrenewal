import { Dimensions } from 'react-native';
const FIGMA_WINDOW_WIDTH = 375;
const FIGMA_WINDOW_HEIGHT = 812;
const portrait = Dimensions.get('window').width < Dimensions.get('window').height;

export function getWidth(width: number) {
    const percentage = portrait ? (width / FIGMA_WINDOW_WIDTH) * 100 : (width / FIGMA_WINDOW_HEIGHT) * 100;

    return (Dimensions.get('window').width / 100) * percentage;
}

export function getHeight(height: number) {
    const percentage = portrait ? (height / FIGMA_WINDOW_HEIGHT) * 100 : (height / FIGMA_WINDOW_WIDTH) * 100;
    return (Dimensions.get('window').height / 100) * percentage;
}

export function getFont(size: number) {
    const percentage = portrait ? (size / FIGMA_WINDOW_WIDTH) * 100 : (size / FIGMA_WINDOW_HEIGHT) * 100;
    return (Dimensions.get('window').width / 100) * percentage > size ? size : (Dimensions.get('window').width / 100) * percentage;
}
