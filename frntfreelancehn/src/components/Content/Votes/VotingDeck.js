import React, {Component} from 'react';


export default class extends Component{

    constructor(){

        super();
        this.state = {
            selectedOption : ''
        }
        
        this.onVoteClick = this.onVoteClick.bind(this);
    }
    onVoteClick(e){
       const {value} = e.target;
       console.log(value);
       this.setState(
           {...this.state, selectedOption: value}
       )
    }

    render(){
        const {title}= this.props;
        var btns = (this.state.selectedOption =='')? (<section>
            <button onClick={this.onVoteClick} name="btnSi" value="Si">Si</button>
            <button onClick={this.onVoteClick} name="btnNo" value="No">No</button>
            <button onClick={this.onVoteClick} name="btnA" value="Abstener">Abstener</button>
        </section>) : null;

        var voted = (this.state.selectedOption =='')? null : (<strong>{this.state.selectedOption}</strong>)
        return(

            <section>
                <h3>{title}</h3>
                <section>
                    {btns}
                    {voted}
                </section>
            </section>
        );

    }
} 