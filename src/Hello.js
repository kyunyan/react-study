import React, {Componenet} from 'react'


class Hello extends Componenet{
    
    constructor(props){
        super(props);
        this.props.name = "";
    }
    render(){
        
        return (
            <div>Hello {this.props.name}</div>
        )
    }
}

export default Hello;