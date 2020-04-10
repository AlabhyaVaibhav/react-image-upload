class Button extends Component {
    constructor(props){
        super(props);
    }
    render() {
      return (
        <button className="button button-primary" onClick={this.props.handleClick}>
          <i className="fa fa-chevron-right"></i> {this.props.text}
        </button>
      )
    }
}

export default Button;
