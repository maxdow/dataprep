import React, {Component} from "react";

export default class EditableText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdited : false,
      value: props.value
    };
  }

  handleClick() {
    this.setState({
      isEdited : true
    });
  }

  handleKeyPress(event){
    if(event.charCode === 13){
      this.setState({
        isEdited : false
      });
    this.props.onChange(parseInt(event.target.value))
    }
  }
  handleOnChange(event){
    this.setState({
      value : event.target.value
    });
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      value : nextProps.value
    });
  }
  render(){
    const {x, y, text} = this.props;
    return this.state.isEdited ?
            <g><foreignObject x={x} y={y-15} width="200" height="50">

              <input type="text" value={this.state.value} onChange={this.handleOnChange.bind(this)}
              onKeyPress={this.handleKeyPress.bind(this)}
              style={{maxWidth:"50px"}}
              />
            </foreignObject></g> :
            <text x={x} y={y}
            onClick={this.handleClick.bind(this)}
            >{this.state.value}</text>
  }
}