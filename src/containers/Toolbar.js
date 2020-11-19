import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Link } from 'react-router-dom' 
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from '@material-ui/core/Tab';


class Toolbar extends Component {
    render() {
        return (
            <div>
                <AppBar>
                    <Tabs>
                        <TabPanel>
                        <Link to='/welcome'> WELCOME </Link>
                        </TabPanel>
                 
                        <Link to='/home'> HOME </Link>
                   
                        <Link to='/events'> EVENTS </Link>
              
                    </Tabs>
                </AppBar>
                
            </div>
        );
    }
}

export default Toolbar;