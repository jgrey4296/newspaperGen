import { h, Component } from 'preact';
import Router from 'preact-router';
import Header from './header';
import FrontPage from './frontpage';
import Obits from './obits';
import Ads from './ads';
import Sports from './sports';

export default class App extends Component {
    constructor(){
        super();
    };

    handleRoute = (e) => {
        this.currentUrl = e.url;
    };
    
    render() {
        return (
            <div id="app">
			<Header />
            <Router onChange={this.handleRoute}>
            <FrontPage path="/" data={[]} />
            <Obits path="/obits/" data={[]} />
            <Ads path="/ads/" data={[]} />
            <Sports path="/sports/" data={[]} />            
            </Router>
            </div>
        );
    }

}
