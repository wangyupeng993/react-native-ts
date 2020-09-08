import {Dimensions,StyleSheet} from "react-native";
const window = Dimensions.get('window');
const main = StyleSheet.create({
    container: {
        width: window.width,
        height: window.height
    },
    relative: {
        position: 'relative'
    },
    absolute: {
        position: 'absolute'
    },
    top: {
        top: 0
    },
    right: {
        right: 0
    },
    left: {
        left: 0
    },
    bottom: {
        bottom: 0
    },
    hidden: {
        overflow: 'hidden'
    },
    flex: {
        display: 'flex'
    },
    directionC: {
        flexDirection: 'column'
    },
    directionCR: {
        flexDirection: 'column-reverse'
    },
    directionW: {
        flexDirection: 'row'
    },
    directionWR: {
        flexDirection: 'row-reverse'
    },
    flexW: {
        flexWrap: 'wrap'
    },
    flexNO: {
        flexWrap: 'nowrap'
    },
    flexWR: {
        flexWrap: 'wrap-reverse'
    },
    justifyE: {
        justifyContent: 'flex-end'
    },
    justifyC: {
        justifyContent: 'center'
    },
    justifySB: {
        justifyContent: 'space-between'
    },
    justifySA: {
        justifyContent: 'space-around'
    },
    itemsC: {
        alignItems: 'center'
    },
    itemsFS: {
        alignItems: 'flex-start'
    },
    itemsE: {
        alignItems: 'flex-end'
    },
    itemsB: {
        alignItems: 'baseline'
    },
    text_xs: {
        fontSize: 20
    },
    text_xm: {
        fontSize: 24
    },
    text_sm: {
        fontSize: 28
    },
    text_ds: {
        fontSize: 32
    },
    text_dm: {
        fontSize: 36
    },
    text_df: {
        fontSize: 44
    },
    text_lg: {
        fontSize: 55
    },
    text_xl: {
        fontSize: 80
    },
    text_max:{
        fontSize: 120
    },
    textCenter: {
        textAlign: 'center'
    },
    textLeft: {
        textAlign: 'left'
    },
    textRight: {
        textAlign: 'right'
    },
    pd_min:{
        padding :5
    },
    pd_xs:{
        padding: 10
    },
    pd_xm:{
        padding: 20
    },
    pd_sm:{
        padding: 30
    },
    pd_ds: {
        padding: 40
    },
    pd_dm:{
        padding: 50
    },
    pd_df:{
        padding: 60
    },
    pd_lg:{
        padding: 70
    },
    pd_xl:{
        padding: 80
    }
});
export default main;
