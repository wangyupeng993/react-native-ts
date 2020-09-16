import React,{Fragment} from "react";
import {View,Text,ScrollView,Image,TextInput} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import {connect} from "react-redux";
import {mapDispatchToProps,mapStateToProps} from "../../redux/mapProps";
import style from "./styles";
import {main,bg,colors} from "../../assets/css";
import {choiceArr} from "./methods";

const Home = () => {
    return (<Fragment>
        <View style={Object.assign({flex: 1},bg.greyLight)}></View>
        <ScrollView>
            <View style={style.logoBg}>
                <Image style={style.logo} source={require('../../assets/image/public/logo.png')}></Image>
            </View>

            <View style={style.searchBg}>
                <TextInput style={style.searchInput} placeholder={'请输入关键字搜索'} />

                <Icon style={main.mg_l_xs} name={'ios-help-circle-outline'} size={35} color={'#ffffff'} />

                <Icon style={main.mg_l_xs} name={'ios-arrow-redo-outline'} size={30} color={'#ffffff'} />

                <Icon style={main.mg_l_xs} name={'chatbox-ellipses-outline'} size={30} color={'#ffffff'} />
            </View>

            <View style={style.banner}>
                <Image style={style.bannerImage} source={require('../../assets/image/public/147.png')}></Image>

                <View style={style.bannerContent}>
                    <View style={style.contentData}>
                        <View style={main.growMin}>
                            <View>
                                <Text style={Object.assign({},main.text_xm,colors.cyan,main.textCenter)}>
                                    66.2
                                </Text>
                            </View>

                            <View style={main.pd_tb_xs}>
                                <Text style={Object.assign({},main.text_xs,main.textCenter,colors.grey)}>众筹金额</Text>
                            </View>
                        </View>

                        <View style={main.growMin}>
                            <View>
                                <Text style={Object.assign({},main.text_xm,colors.cyan,main.textCenter)}>
                                    2788.8
                                </Text>
                            </View>

                            <View style={main.pd_tb_xs}>
                                <Text style={Object.assign({},main.text_xs,main.textCenter,colors.grey)}>支持人数</Text>
                            </View>
                        </View>

                        <View style={main.growMin}>
                            <View>
                                <Text style={Object.assign({},main.text_xm,colors.cyan,main.textCenter)}>
                                    1.5
                                </Text>
                            </View>

                            <View style={main.pd_tb_xs}>
                                <Text style={Object.assign({},main.text_xs,main.textCenter,colors.grey)}>成功项目</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>

            <View style={style.Nav}>
                <View style={main.growMin}>
                    <View style={style.NavItem}>
                        <Image style={style.NavItemIcon} source={require('../../assets/image/icon/icon_lottery.png')}></Image>
                    </View>

                    <View style={main.pd_t_xm}>
                        <Text style={Object.assign({},main.text_xs,main.textCenter,colors.black)}>一元抽奖</Text>
                    </View>
                </View>

                <View style={main.growMin}>
                    <View style={style.NavItem}>
                        <Image style={style.NavItemIcon} source={require('../../assets/image/icon/icon_member.png')}></Image>
                    </View>

                    <View style={main.pd_t_xm}>
                        <Text style={Object.assign({},main.text_xs,main.textCenter,colors.black)}>优品荟</Text>
                    </View>
                </View>

                <View style={main.growMin}>
                    <View style={style.NavItem}>
                        <Image style={style.NavItemIcon} source={require('../../assets/image/icon/icon_prepare.png')}></Image>
                    </View>

                    <View style={main.pd_t_xm}>
                        <Text style={Object.assign({},main.text_xs,main.textCenter,colors.black)}>全部众筹</Text>
                    </View>
                </View>

                <View style={main.growMin}>
                    <View style={style.NavItem}>
                        <Image style={style.NavItemIcon} source={require('../../assets/image/icon/icon_cooperate.png')}></Image>
                    </View>

                    <View style={main.pd_t_xm}>
                        <Text style={Object.assign({},main.text_xs,main.textCenter,colors.black)}>项目合作</Text>
                    </View>
                </View>
            </View>

            <View style={Object.assign({},main.mg_lr_xm,main.pd_t_sm)}>
                <View style={style.choiceTitle}>
                    <Image style={style.choiceIcon} source={require('../../assets/image/icon/icon_Memo.png')}></Image>

                    <Text style={Object.assign({},main.text_sm,colors.black)}>
                        筹易达精选
                    </Text>
                </View>

                {choiceArr.map((item,index) => {
                    return (<View style={style.choiceItem} key={index}>
                        <Image style={style.choiceItemImage} source={item.image}></Image>

                        <View style={Object.assign({},main.flex,main.directionW)}>
                            <View style={style.choiceItemData}>
                                <Text style={Object.assign({fontSize: 12},main.mg_r_xs)}>支持</Text>

                                <Text style={Object.assign({fontSize: 12},colors.cyan)}>{item.support}</Text>
                            </View>

                            <View style={style.choiceItemData}>
                                <Text style={Object.assign({fontSize: 12},main.mg_r_xs)}>已筹</Text>

                                <Text style={Object.assign({fontSize: 12},colors.cyan)}>{item.raised}</Text>
                            </View>

                            <View style={style.choiceItemData}>
                                <Text style={Object.assign({fontSize: 12},main.mg_r_xs)}>达成</Text>

                                <Text style={Object.assign({fontSize: 12},colors.cyan)}>{item.reach}%</Text>
                            </View>
                        </View>

                        <View style={Object.assign({},main.flex,main.directionW,main.mg_lr_xm)}>
                            <LinearGradient colors={['#F9B43A','#FB1C1C']} style={style.choiceProgress}
                                            start={{x: 0.1,y: 1}}>
                            </LinearGradient>
                        </View>

                        <View style={Object.assign({},main.mg_lr_xm,main.pd_tb_xs,main.flex,main.directionW)}>
                            <View style={Object.assign({},main.growMin,main.flex,main.directionW,main.itemsC)}>
                                <Text style={Object.assign({fontSize: 16})}>{item.name}</Text>
                            </View>

                            <View style={Object.assign({},main.growMin,main.flex,main.directionW,main.itemsC,main.justifyE)}>
                                <View style={{borderRadius: 20,overflow: 'hidden'}}>
                                   <Text style={Object.assign({
                                        fontSize: 12
                                   },colors.white,bg.cyan,main.pd_tb_xs,main.pd_lr_xm)}>去支持</Text>
                                </View>                      
                            </View>
                        </View>
                    </View>);
                })}
            </View>
        </ScrollView>
    </Fragment>)
};

export default connect(mapStateToProps,mapDispatchToProps)(Home);
