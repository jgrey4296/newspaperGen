import { h, Component } from 'preact';
import Header from './header';
import Home from './home';
import Help from './help';
import Footer from './footer';
import { Shell } from 'JGShell';

export default class App extends Component {
    constructor(){
        super();
    }

    render() {
        return (
			    <div id="app">
			    <Header path={this.state.path} />
                {body}
                <Footer callback={(text) => { this.parseCallback(text); }} />
			    </div>
        );
    }
}
