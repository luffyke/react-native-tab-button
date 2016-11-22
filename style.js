import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        height: 42,
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ebf0e6'
    },
    textWrapper: {
        flex: 1,
        flexDirection: 'row',
        position: 'relative'
    },
    leftLabel: {
        flex: 1,
        fontSize: 16,
        color: "#4d4d4d",
        paddingLeft: 14
    },
    rightLabel: {
        flex: 1,
        fontSize: 16,
        color: "#a6a6a6",
        paddingRight: 12,
        textAlign: 'right'
    },
    arrow: {
        paddingRight: 14,
        justifyContent: 'center'
    }
});

export default styles;
