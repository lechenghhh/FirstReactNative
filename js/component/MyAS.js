/**
 * Created by 乐城 on 2017/4/21.
 * AsyncStorge封装尝试
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TouchableHighlight,
    DeviceEventEmitter,
    AsyncStorage,
} from 'react-native';

export default class MyAS {
   /* saveHistory(data) {
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
    }*/
    getAS(_this,key){   //ComLogin组件中引用
        AsyncStorage.getItem(key, function (errs, result) {//读取方法
            if (!errs) {                        //TODO:错误处理
                _this.setState({
                    saveDataResult: result,
                });
                console.log('result = ' + result);
            }
            else
                console.log('读取失败');
        });
    }
    setAS(key,value){   //ComLogin组件中引用
        AsyncStorage.setItem(key,value , function (errs) {//存储方法
            if (errs)       //TODO:错误处理
                console.log('存储错误');
            else
                console.log('存储成功');
        });
    }

}
