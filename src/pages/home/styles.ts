import {StyleSheet} from 'react-native';
import {main,bg,colors} from '../../assets/css';

const style = StyleSheet.create({
    logoBg: Object.assign({},main.pd_sm,bg.cyan,main.flex,main.itemsC),
    logo: {
        width: 127,
        height: 62
    },
    searchBg: Object.assign({},main.flex,main.directionW,main.justifyC,main.pd_lr_sm,main.pd_b_xs,bg.cyan),
    searchInput: Object.assign({},{
        width: 240,
        height: 32,
        borderRadius: 16
    },bg.white,main.pd_lr_xs,main.pd_v_no),
});

export default style;
