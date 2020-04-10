class CardHeader extends Component {
    constructor(props){
        super(props);
    }

    render() {
      const { image,title } = this.props;
      var style = { 
          backgroundImage: 'url(' + image + ')',
      };
      return (
        <header style={style} id={image} className="card-header">
          <h4 className="card-header--title">{title}</h4>
        </header>
      )
    }
}

export default CardHeader;