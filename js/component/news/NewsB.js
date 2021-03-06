/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
/*      api文档地址：
 *http://wangyi.butterfly.mopaasapp.com
 * 处理一些背景透明的童鞋,可以试试这两句代码
 backgroundColor:'transparent',或者backgroundColor:'rgba(0,0,0,0)',
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView,
    ListView,
    Image,
    TextInput,
    AsyncStorage,
    TouchableHighlight,
    AlertIOS,
    DeviceEventEmitter,
} from 'react-native';
import Toast, {DURATION} from 'react-native-easy-toast'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import ComA from '../ComA'
import ComB from '../ComC'
import ComWebView from '../ComWebView'

export default class NewsB extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),                             //list数据源2
            type: 'travel',
            jsonStr: '',
            str2: new Array('war', 'tech', 'sport'),
            // , 'edu', 'ent', 'money', 'travel', 'gupiao', 'lady'),
            i2: 2,
        };
    }

    componentDidMount() {
        this.getMoviesFromApiAsync();           //每次创建的时候自动加载1次
    }

    saveHistory(data) {
        var result2 = '';
        var _this = this;
        AsyncStorage.getItem('history', function (errs, result) {//读取方法
            if (!errs) {   //TODO:错误处理
                result2 = result;
                console.log('result2 = ' + result2);
                AsyncStorage.setItem('history', result2 + ',' + data, function (errs) {//存储方法
                    if (errs)       //TODO:错误处理
                        console.log('存储错误');
                    else
                        console.log('存储成功');
                });
            }
            else
                console.log('读取失败');
        });
    }

    getMoviesFromApiAsync() {       //Http异步请求
        fetch('http://wangyi.butterfly.mopaasapp.com/news/api?type='
            + this.state.type
            + '&page=1&limit=10')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    jsonStr: JSON.stringify(responseJson),//json转化成字符串 JSON.parse(jsonstr)//json=>str
                    dataSource: this.state.dataSource.cloneWithRows(responseJson.list),
                });
                console.log(responseJson);
                // console.log(this.state.jsonStr);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    start2(data) {
        {
            this.refs.toast.show('文章内容：' + data.docurl);
            this.saveHistory(data);
            DeviceEventEmitter.emit('userNameDidChange', data.docurl);
        }
    }

    render() {                  //onReusme
        return (
            <View style={styles.container}>
                <Image style={{flex: 1,}}
                       source={{uri: 'http://appserver.m.bing.net/BackgroundImageService/TodayImageService.svc/GetTodayImage?dateOffset=0&urlEncodeHeaders=true&osName=windowsPhone&osVersion=8.10&orientation=480x800&deviceName=WP8&mkt=en-US'}}>
                    <ScrollView tabLabel="科技"
                                contentContainerStyle={styles.contentContainer}>
                        <ListView
                            style={{margin: 4}}
                            dataSource={this.state.dataSource}
                            renderRow={(rowData) =>
                                <View style={{flexDirection: 'row', margin: 2, padding: 4,}}>
                                    <Image style={{height: 60, width: 60}}
                                           source={{uri: rowData.imgurl}}>
                                    </Image>
                                    <View style={{
                                        backgroundColor: '#1b1d1d',
                                        flex: 1,
                                        marginLeft: 6,
                                        justifyContent: 'space-around'
                                    }}>
                                        <Text style={{color: "#cef4e3", flexWrap: 'wrap'}}
                                              onPress={() => this.start2(rowData)
                                              }>{rowData.title}</Text>
                                        <Text style={{flex:1,color: "#82a1a8",textAlign:'right'}}>{rowData.time}</Text>
                                    </View>
                                </View>
                            }/>
                    </ScrollView>
                </Image>
                <Toast ref="toast" style={{backgroundColor: '#e4ff31', borderRadius: 10}}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    btn: {
        height: 40,
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        padding: 2,
        backgroundColor: "#3d8afe",

    }
});
// AppRegistry.registerComponent('ComHttp', () => ComHttp);