import {Dimensions,StyleSheet} from "react-native";
const window = Dimensions.get('window');
const main = StyleSheet.create({
    container: {
        width: window.width,
        height: window.height
    },
    containerW: {
        width: window.width
    },
    containerH: {
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
    pd_v_no: {
        paddingVertical: 0
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
    },
    pd_lr_xs: {
        paddingLeft: 10,
        paddingRight:10,
    },
    pd_lr_xm: {
        paddingLeft: 20,
        paddingRight:20,
    },
    pd_lr_sm: {
        paddingLeft: 30,
        paddingRight:30,
    },
    pd_lr_ds: {
        paddingLeft: 40,
        paddingRight:40,
    },
    pd_lr_dm: {
        paddingLeft: 50,
        paddingRight:50,
    },
    pd_lr_df: {
        paddingLeft: 60,
        paddingRight: 60,
    },
    pd_lr_lg: {
        paddingLeft: 70,
        paddingRight:70,
    },
    pd_lr_xl: {
        paddingLeft: 80,
        paddingRight: 80
    },
    pd_tb_xs: {
        paddingTop: 10,
        paddingBottom: 10
    },
    pd_tb_xm: {
        paddingTop: 20,
        paddingBottom: 20
    },
    pd_tb_sm: {
        paddingTop: 30,
        paddingBottom: 30
    },
    pd_tb_ds: {
        paddingTop: 40,
        paddingBottom: 40
    },
    pd_tb_dm: {
        paddingTop: 50,
        paddingBottom: 50
    },
    pd_tb_df: {
        paddingTop: 60,
        paddingBottom: 60
    },
    pd_tb_lg: {
        paddingTop: 70,
        paddingBottom: 70
    },
    pd_tb_xl: {
        paddingTop: 80,
        paddingBottom: 80
    },
    pd_l_xs: {
        paddingLeft:10,
    },
    pd_l_xm: {
        paddingLeft:20,
    },
    pd_l_sm: {
        paddingLeft: 30,
    },
    pd_l_ds: {
        paddingLeft:40,
    },
    pd_l_dm: {
        paddingLeft:50,
    },
    pd_l_df: {
        paddingLeft:60,
    },
    pd_l_lg: {
        paddingLeft:70,
    },
    pd_l_xl: {
        paddingLeft:80,
    },
    pd_r_xs:{
        paddingRight:10,
    },
    pd_r_xm:{
        paddingRight:20,
    },
    pd_r_sm:{
        paddingRight: 30,
    },
    pd_r_ds:{
        paddingRight:40,
    },
    pd_r_dm:{
        paddingRight:50,
    },
    pd_r_df:{
        paddingRight:60,
    },
    pd_r_lg:{
        paddingRight:70,
    },
    pd_r_xl:{
        paddingRight:80,
    },
    pd_t_xs: {
        paddingTop: 10,
    },
    pd_t_xm: {
        paddingTop: 20,
    },
    pd_t_sm: {
        paddingTop:  30,
    },
    pd_t_ds: {
        paddingTop: 40,
    },
    pd_t_dm: {
        paddingTop: 50,
    },
    pd_t_df: {
        paddingTop: 60,
    },
    pd_t_lg: {
        paddingTop: 70,
    },
    pd_t_xl: {
        paddingTop: 80,
    },
    pd_b_xs: {
        paddingBottom: 10
    },
    pd_b_xm: {
        paddingBottom: 20
    },
    pd_b_sm: {
        paddingBottom: 30
    },
    pd_b_ds: {
        paddingBottom: 40
    },
    pd_b_dm: {
        paddingBottom: 50
    },
    pd_b_df: {
        paddingBottom: 60
    },
    pd_b_lg: {
        paddingBottom: 70
    },
    pd_b_xl: {
        paddingBottom: 80
    },
    mg_xs: {
        margin: 10
    },
    mg_xm: {
        margin: 20
    },
    mg_sm: {
        margin: 30
    },
    mg_ds: {
        margin: 40
    },
    mg_dm: {
        margin: 50
    },
    mg_df: {
        margin: 60
    },
    mg_lg: {
        margin: 70
    },
    mg_xl: {
        margin: 80
    },
    mg_lr_xs: {
        marginLeft: 10,
        marginRight: 10,
    },
    mg_lr_xm: {
        marginLeft: 20,
        marginRight: 20,
    },
    mg_lr_sm: {
        marginLeft: 30,
        marginRight: 30,
    },
    mg_lr_ds: {
        marginLeft: 40,
        marginRight: 40,
    },
    mg_lr_dm: {
        marginLeft: 50,
        marginRight: 50,
    },
    mg_lr_df: {
        marginLeft: 60,
        marginRight: 60,
    },
    mg_lr_lg: {
        marginLeft: 70,
        marginRight: 70,
    },
    mg_lr_xl: {
        marginLeft: 80,
        marginRight: 80,
    },
    mg_tb_xs: {
        marginTop: 10,
        marginBottom: 10,
    },
    mg_tb_xm: {
        marginTop: 20,
        marginBottom: 20,
    },
    mg_tb_sm: {
        marginTop: 30,
        marginBottom: 30,
    },
    mg_tb_ds: {
        marginTop: 40,
        marginBottom: 40,
    },
    mg_tb_dm: {
        marginTop: 50,
        marginBottom: 50,
    },
    mg_tb_df: {
        marginTop: 60,
        marginBottom: 60,
    },
    mg_tb_lg: {
        marginTop: 70,
        marginBottom: 70,
    },
    mg_tb_xl: {
        marginTop: 80,
        marginBottom: 80,
    },
    mg_l_xs: {
        marginLeft: 10
    },
    mg_l_xm: {
        marginLeft: 20
    },
    mg_l_sm: {
        marginLeft: 30
    },
    mg_l_ds: {
        marginLeft: 40
    },
    mg_l_dm: {
        marginLeft: 50
    },
    mg_l_df: {
        marginLeft: 60
    },
    mg_l_lg: {
        marginLeft: 70
    },
    mg_l_xl: {
        marginLeft: 80
    },
    mg_r_xs: {
        marginRight: 10
    },
    mg_r_xm: {
        marginRight: 20
    },
    mg_r_sm: {
        marginRight: 30
    },
    mg_r_ds: {
        marginRight: 40
    },
    mg_r_dm: {
        marginRight: 50
    },
    mg_r_df: {
        marginRight: 60
    },
    mg_r_lg: {
        marginRight: 70
    },
    mg_r_xl: {
        marginRight: 80
    },
    mg_t_xs: {
        marginTop: 10
    },
    mg_t_xm: {
        marginTop: 20
    },
    mg_t_sm: {
        marginTop: 30
    },
    mg_t_ds: {
        marginTop: 40
    },
    mg_t_dm: {
        marginTop: 50
    },
    mg_t_df: {
        marginTop: 60
    },
    mg_t_lg: {
        marginTop: 70
    },
    mg_t_xl: {
        marginTop: 80
    },
    mg_b_xs: {
        marginBottom: 10
    },
    mg_b_xm: {
        marginBottom: 20
    },
    mg_b_sm: {
        marginBottom: 30
    },
    mg_b_ds: {
        marginBottom: 40
    },
    mg_b_dm: {
        marginBottom: 50
    },
    mg_b_df: {
        marginBottom: 60
    },
    mg_b_lg: {
        marginBottom: 70
    },
    mg_b_xl: {
        marginBottom: 80
    },
    mg_b_xsl:{
        marginBottom: 90
    },
    mg_b_xml: {
        marginBottom: 100
    },
    mg_b_xfl: {
        marginBottom: 110
    },
    mg_b_xxl: {
        marginBottom: 120
    }
});
export default main;
