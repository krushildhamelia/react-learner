import React, {Component} from 'react';

class Footer extends Component {
    render() {
        return (
            <footer>
                <div>
                    &copy; {new Date().getFullYear()}
                </div>
            </footer>
        )
    }
}

export default Footer;