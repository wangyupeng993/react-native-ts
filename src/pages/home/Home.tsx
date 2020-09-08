import React,{Fragment} from "react";
import {View,Text,ScrollView,Image} from 'react-native';
import {connect} from "react-redux";
import {mapDispatchToProps,mapStateToProps} from "../../redux/mapProps";
import style from "./styles";
import {main,bg} from "../../assets/css";

const Home = (props: commReactProps) => {
    return (<Fragment>
        <View style={main.container}>
            <ScrollView style={main.container}>
                <View style={Object.assign({},main.pd_ds,bg.cyan,main.flex,main.itemsC)}>
                    <Image style={style.logo} source={require('../../assets/image/public/logo.png')}></Image>
                </View>
            </ScrollView>
        </View>
    </Fragment>)
};

export default connect(mapStateToProps,mapDispatchToProps)(Home);
