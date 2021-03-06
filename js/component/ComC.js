/**
 * Created by 乐城 on 2017/3/7.
 */
/*此组件用于测试布局*/
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import ComB from './ComB'

export default class ComC extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            position: 1,
            position2: 10,
            getIntent: '',
        })
    }

    componentDidMount() {           //获取上个界面的传值
        this.setState({
            getIntent: this.props.intentA,
        });
    }

    render() {
        return (
            <View>
                <View style={{flexDirection: 'row',}}>
                    <Text style={{backgroundColor: '#F43E06', flex: 1, color: "#ffffff", padding: 2,}}
                          onPress={() => {
                              const {navigator} = this.props;
                              if (navigator) {
                                  navigator.pop();
                              }
                          }}>{' <- 返回首页'}</Text>
                </View>
                <View style={ {flexDirection: 'row', backgroundColor: "darkgray", marginTop: 20}}>
                    <View style={ {width: 40, height: 40, backgroundColor: "darkcyan", margin: 5}}>
                        <Text style={ {fontSize: 16}}>1</Text>
                    </View>
                    <View style={ {width: 40, height: 40, backgroundColor: "darkcyan", margin: 5}}>
                        <Text style={ {fontSize: 16}}>2</Text>
                    </View>
                    <View style={ {width: 40, height: 40, backgroundColor: "darkcyan", margin: 5}}>
                        <Text style={ {fontSize: 16}}>3</Text>
                    </View>
                    <View style={ {width: 40, height: 40, backgroundColor: "darkcyan", margin: 5, flex: 1}}>
                        <Text style={ {fontSize: 16}}>4</Text>
                    </View>

                </View>
                <Text style={{marginTop: 80,}}>收到的值： {this.state.getIntent}</Text>
                <Text style={{backgroundColor: '#80ff5d',}} onPress={() => {
                    const {navigator} = this.props;
                    if (navigator) {
                        navigator.push({
                            name: 'ComB'
                        })
                    }
                }}>跳转按钮，与上面无关</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        backgroundColor: '#8892d4',
        fontSize: 22,
        textAlign: 'center',
        color: '#f4003c',
        marginBottom: 5,
    },
});