import React,{Fragment} from "react";
import {View,Text,ScrollView,Image,TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from "react-redux";
import {mapDispatchToProps,mapStateToProps} from "../../redux/mapProps";
import style from "./styles";
import {main,bg,colors} from "../../assets/css";

const Home = (props: commReactProps) => {
    return (<Fragment>
        <View style={main.container}>
            <ScrollView style={main.container}>
                <View style={style.logoBg}>
                    <Image style={style.logo} source={require('../../assets/image/public/logo.png')}></Image>
                </View>

                <View style={style.searchBg}>
                    <TextInput style={style.searchInput} placeholder={'请输入关键字搜索'} />

                    <Icon style={main.mg_l_xs} name={'ios-help-circle-outline'} size={35} color={'#ffffff'} />

                    <Icon style={main.mg_l_xs} name={'ios-arrow-redo-outline'} size={30} color={'#ffffff'} />

                    <Icon style={main.mg_l_xs} name={'chatbox-ellipses-outline'} size={30} color={'#ffffff'} />
                </View>
            </ScrollView>
        </View>
    </Fragment>)
};

export default connect(mapStateToProps,mapDispatchToProps)(Home);
