import React,{Component} from "react"



export default class Triangle extends Component {
  render() {
  const {center, color, size} = this.props;
  const d = `${center.x-size},${center.y+size} ${center.x},${center.y-size} ${center.x+size},${center.y+size}`;

    return <polygon points={d} fill={color}
      onMouseOver={this.props.onMouseOver}
      onMouseLeave={this.props.onMouseLeave}
      onMouseDown={this.props.onMouseDown}
      onMouseUp={this.props.onMouseUp}
      style={{cursor:"pointer"}}
    />
  }
}
Triangle.defaultProps = {
  onMouseDown : () => {},
  onMouseLeave : () => {},
  onMouseUp : () => {},
  onMouseDown : () => {}
};