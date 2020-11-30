import React, { Component } from 'react';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

class NotFound extends Component {
    render() {
        console.log(
            
          )

        return (
            <body class="four-o-four-page">
                <div class = "four-o-four-info">
                    <div>
                    <h1 class = "four-o-four-number">404</h1>
                    <h2>"Wooops! You took a wrong turn"</h2>
                    <div class = "four-o-four-button">
                    <Button href="/login" variant="contained"
                    className="btn btn-primary">Go Back to Login</Button>
                    </div>
                    </div>
                </div>
            </body>
        );
    }
}

export default NotFound;