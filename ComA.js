/**
 * Created by 乐城 on 2017/3/6.
 */
//获取其他控件的数值的demo
/*import ComA from './ComA'
 import ComB from './ComB'
 import ComC from './ComC'
 import ComLog from './ComLog'
 import FetchG from './FetchG'
 import ComHttp from './ComHttp'*/
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import ComB from './ComB'

export default class ComA extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            position: 1,
            position2: 10,
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <ComB ref="reftest"/>
                <Text style={styles.instructions}>
                    数值{this.state.position2}
                </Text>
                <Text style={styles.instructions } onPress={()=>{
                    var position2=this.refs.reftest.state.size;
                    this.setState({
                        position:this.state.position+1,
                        position2:position2,
                    })
                }}>
                    按钮获取refs
                </Text>

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