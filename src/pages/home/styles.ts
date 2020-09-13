import {Dimensions,StyleSheet} from 'react-native';
import {main,bg,colors} from '../../assets/css';

const window = Dimensions.get('window');
const style = StyleSheet.create({
    logoBg: Object.assign({},main.pd_sm,bg.cyan,main.flex,main.itemsC),
    logo: {
        width: 127,
        height: 62
    },
    searchBg: Object.assign({},main.flex,main.directionW,main.justifyC,main.pd_lr_sm,main.pd_b_xs,bg.cyan),
    searchInput: Object.assign({
        width: 240,
        height: 32,
        borderRadius: 16
    },bg.white,main.pd_lr_xs,main.pd_v_no),
    banner: Object.assign({
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100
    },bg.cyan,main.relative),
    bannerImage: Object.assign({
        width: (window.width - 60),
        height: 180,
        borderRadius: 16,
        zIndex: 2
    },main.mg_lr_sm,main.absolute,main.top,main.left),
    bannerContent: Object.assign({
        paddingTop: 90,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        marginTop: 90
    },bg.white,main.mg_lr_xm),
    contentData: Object.assign({
       borderRadius: 16
    },main.pd_t_xm,main.flex,main.directionW,colors.cyan),
    Nav: Object.assign({
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16
    },main.flex,main.directionW,main.mg_lr_xm,bg.white,main.pd_tb_xm),
    NavItem: Object.assign({},main.flex,main.directionW,main.justifyC),
    NavItemIcon: {
        width: 36,
        height: 36
    },
    choiceTitle: Object.assign({},main.flex,main.directionW,main.itemsC,main.pd_b_xm),
    choiceIcon: Object.assign({
        width: 18,
        height: 26
    },main.mg_r_xs)
});

export default style;
