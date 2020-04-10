class CardBody extends Component {
    constructor(props){
        super(props)
    }

    render() {
      return (
        <div className="card-body">
          <h2>{this.props.title}</h2>
          <p className="body-content">{this.props.text}</p>
        </div>
      )
    }
}

export default CardBody;