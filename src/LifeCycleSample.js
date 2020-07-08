import React , {Component} from 'react';

class LifeCycleSample extends Component{
    state = {
        number : 0 , 
        color : null 
    }

    myRef = null;       // ref를 설정할 부분

    constructor(props){ debugger;
        super(props);
        console.log("constructor");
    }

    static getDerivedStateFromProps(nextProps, prevState){ debugger;
        if(nextProps.color !== prevState.color){
            return {color : nextProps.color};
        }
        return null;
    }

    componentDidMount(){ debugger;
        console.log("componentDidMount");
    }

    shouldComponentUpdate(nextProps, nextState){ debugger;
        console.log("shouldComponenetUpdate", nextProps, nextState);
        // 숫자의 마지막 자리가 4면 리렌더링하지 않습니다. 
        return nextState.number % 10 !== 4;
    }

    componenetWillUnmount(){ debugger;
        console.log("componenetWillUnmount");
    }

    handleClick = () => {
        this.setState({
            number : this.state.number + 1
        })
    }

    getSnapshotBeforeUpdate(prevProps , prevState){ debugger;
        console.log("getSnapshotBeforeUpdate");
        if(prevProps.color !== this.props.color){
            return this.myRef.style.color;
        }
        return null;
    }

    componentDidUpdate(prevProps, preState, snapshot){ debugger;
        console.log("componenetDidUpdate", prevProps, preState);
        if(snapshot){
            console.log("업데이트 되기 직전 색상" , snapshot);
        }
    }

    render(){
        console.log("render");
        const style = {
            color : this.props.color
        }
        return (
            <div>
                <h1 style={style} ref={ref => this.myRef = ref}>
                    {this.state.number}
                </h1>
                <p>color : {this.state.color}</p>
                <button onClick={this.handleClick}>
                    더하기
                </button>
            </div>
        )
            
    }
}

export default LifeCycleSample;