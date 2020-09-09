import React,{Fragment} from "react";
import {View,Text,ScrollView,Image,TextInput} from 'react-native';
import {connect} from "react-redux";
import {mapDispatchToProps,mapStateToProps} from "../../redux/mapProps";
import style from "./styles";
import {main,bg} from "../../assets/css";

const Home = (props: commReactProps) => {
    return (<Fragment>
        <View style={main.container}>
            <ScrollView style={main.container}>
                <View style={style.logoBg}>
                    <Image style={style.logo} source={require('../../assets/image/public/logo.png')}></Image>
                </View>

                <View style={style.searchBg}>
                    <TextInput style={style.searchInput} placeholder={'请输入关键字搜索'} />
                </View>
            </ScrollView>
        </View>
    </Fragment>)
};

export default connect(mapStateToProps,mapDispatchToProps)(Home);
