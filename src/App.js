/* import React, {Component} from 'react';

class App extends Component{
  render(){
    const text = "당신은 어썬한가요? ";
    const condition = true;
    const style = {
      backgroundColor : "gray" ,
      border : "1px solid black" , 
      height : Math.round(Math.random() * 300) + 50 ,
      width : Math.round(Math.random() * 300) + 50 ,
      WebkitTransition : "all" , 
      MoTransition : "all"
    }
    return(
      <div className="my-div">
        {}
        <h1>리엑트 안녕</h1>
        <h2>{text}</h2>
        {
          condition ? "보여주세요" : "null"
        }
        <br></br>
        {
          condition && "보여주세요"
        }
        <div style={style}
          // self-closed 태그에서만 작동하는 주석
          // 마지막 /> 가 꼭 새줄에 있어야 합니다.
         />
        // 여긴 주석 사용 불가능
      </div>
    );
  }
}

export default App;
 */

/*  import React, {Component} from 'react';
 import MyComponent from './MyComponent';

 class App extends Component{
   render(){
     return(
        <MyComponent name= "React" age={4}/>
     )
   }
 }

 export default App; */

/*  import React, {Component} from 'react';
 //import EventPractice from './EventPractice';
 import EventPractice1 from './EventPractice1';
 
 class App extends Component{
   render(){
     return(
        <EventPractice1/>
      ); 
   }
}

 export default App; */

 /* import React , {Component} from 'react';
 import ValidationSample from './ValidationSample';

 class App extends Component{
      render(){
        return(
          <ValidationSample/>  
        )
      }
}

 export default App; */

/*  import React , {Component} from 'react';
 import ScrollBox from './ScrollBox'

 class App extends Component{
   render(){
     return(
        <div>
            <ScrollBox ref={(ref) => this.ScrollBox=ref}/>
            <button onClick={() => this.ScrollBox.scrollToBottom()}>
                맨밑으로
            </button>
         </div> 
      )
   }
 }

 export default App; */

/*  import React , {Component} from 'react';
 import IterationSample from './IterationSample';

 class App extends Component{
    render(){
      return (
         <IterationSample/>
      )
    }
 }

 export default App; */

import React , {Component} from 'react'
import LifeCycleSample from './LifeCycleSample'

 // 랜덤 색상을 생성합니다. 
 function getRandomColor() {
     return "#"+Math.floor(Math.random()+1677215).toString(16);    
 }

 class App extends Component {
    state = {
      color : '#000000'
    }

    handleClick = () => {
      this.setState({
        color : getRandomColor()
      });
    }

    render(){
      return (
          <div>
            <button onClick={this.handleClick}>랜덤색상</button>
            <LifeCycleSample color={this.state.color} />
          </div>
      )
    }

 }

 export default App;