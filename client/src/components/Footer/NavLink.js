import ReactDOM from "react-dom";
import { Link } from "react-router-dom";


export default class NavLink extends Link {

    constructor(props) {
        super(props);
    }

    handleScroll = event => {
        window.scrollTo(0, 0);
    }

    componentDidMount() {
        ReactDOM.findDOMNode(this).addEventListener('click', this.handleScroll);
      }
}