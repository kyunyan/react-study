import React , {Component} from "react";
import PropTypes from "prop-types"

class MyComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
            number : 0
        }
    }
    static defaultProps = {
        name : "기본이름"
    }    
    static propTypes = {
        name : PropTypes.string ,  // name props 타입을 문자열로 설정합니다.
        age : PropTypes.number.isRequired  // 필수적으로 존재해야 하며 숫자입니다.
    } 
    render(){
        // jsx  는 바벨로 변환된다
        return (
            <div>
                나의 새롭고 멋진 컴포넌트
                <p>안녕하세요, 제이름은 {this.props.name} 입니다.</p>
                <p>저는 {this.props.age} 살 입니다.</p>
                <p>숫자 : {this.state.number}</p>
                <button onClick={() => {
                    this.setState({
                        number : this.state.number + 1
                    })
                }}>더하기</button>
            </div>
        )
    }
}

/* MyComponent.PropTypes = {
    name : PropTypes.string     // name pros 타입을 문자열로 설정합니다.
} */

/* MyComponent.defaultProps = {
    name : '기본이름'
} */

export default MyComponent;