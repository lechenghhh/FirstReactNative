/**
 * Created by Cheng on 2017/3/5.
 */
/**
 * setup被index.ios.js 和 index..android.js 一同指向，作为整个项目的入口
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 * Terminal:
 * react-native run-android         //运行在安卓
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Textinput,
    Navigator,
} from 'react-native';
import Main from './js/component/Main'
import ComA from './js/component/ComA'
import ComB from './js/component/ComB'
import ComC from './js/component/ComC'
import ComHttp from './js/component/ComHttp';
import ComLifeCycle from './js/component/ComLifeCycle';
import ComListView from './js/component/ComListView';
import ComLogin from './js/component/ComLogin';
import ComWebView from './js/component/ComWebView'
import ComDParent from './js/component/ComDParent'
import ComVP from './js/component/ComVP'
import ModalDemo from './js/test/ModalDemo'
import FetchG from './js/test/FetchG'
import TableView from './js/test/TableView'
import News from './js/component/news/News'
import TabNavi from './js/component/news/TabNavi'
import Splash from './js/component/news/Splash'
import History from './js/component/news/History'
import Collect from './js/component/news/Collect'

export default class setup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            intent: '',
            intent2: '',
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Navigator
                    initialRoute={{name: "Main",}}
                    renderScene={(route, nav) => {
                        let Component = route.component;
                        switch (route.name) {
                            case 'Main':
                                return <Main navigator={nav} title="Main"/>;
                            case 'ComA':
                                return <ComA navigator={nav} title="ComA"/>;
                            case 'ComB':    //带上route.parames参数可以在界面之间传值
                                return (<ComB {...route.params} navigator={nav} title="ComB"/>);
                            case 'ComC':    //带上route.parames参数可以在界面之间传值
                                return (<ComC {...route.params} navigator={nav} title="ComC"/>);
                            case 'ComHttp':
                                return (<ComHttp navigator={nav} title="ComHttp"/>);
                            case 'ComLifeCycle':
                                return (<ComLifeCycle navigator={nav} title="ComLifeCycle"/>);
                            case 'ComListView':
                                return (<ComListView navigator={nav} title="ComListView"/>);
                            case 'ComLogin':
                                return (<ComLogin navigator={nav} title="ComLogin"/>);
                            case 'News':
                                return (<News {...route.params} navigator={nav} title="News"/>);
                            case 'ComWebView':
                                return (<ComWebView {...route.params} navigator={nav} title="ComWebView"/>);
                            case 'ModalDemo':
                                return (<ModalDemo navigator={nav} title="ModalDemo"/>);
                            case 'FetchG':
                                return (<FetchG navigator={nav} title="FetchG"/>);
                            case 'TableView':
                                return (<TableView navigator={nav} title="TableView"/>);
                            case 'ComDParent':
                                return (<ComDParent navigator={nav} title="ComDParent"/>);
                            case 'TabNavi':
                                return (<TabNavi {...route.params} navigator={nav} title="TabNavi"/>);
                            case 'Splash':
                                return (<Splash navigator={nav} title="Splash"/>);
                            case 'History':
                                return (<History navigator={nav} title="History"/>);
                            case 'Collect':
                                return (<Collect navigator={nav} title="Collect"/>);
                            case 'ComVP':
                                return (<ComVP navigator={nav} title="ComVP"/>);
                        }
                    }}
                />
            </View>
        );
    }
}
//
const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#f1f0ee',
        },
        welcome: {
            fontSize: 20,
            backgroundColor: '#1f82bb',
            textAlign: 'center',
        },
        instructions: {
            textAlign: 'center',
            color: '#333333',
        },

        contentContainer: {},

        /**/

    })
    ;

