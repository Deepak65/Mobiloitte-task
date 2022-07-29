import React from 'react';
import {Router, Route} from 'react-router-dom';
import {Redirect, Switch} from "react-router";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {history} from "./managers/history";
import BaseComponent from "./modules/baseComponent";
import PaintlessRepair from './modules/paintlessRepair';
import VehicleService from "./modules/vehicleServiceAggrement"
import BatteryAggrement from "./modules/batteryAggrement"
import ClaimNew from "./modules/claimNew"
import Blogs from './modules/blogs';
import AddRoom from './modules/chatRoom';
import CongratsRoom from './modules/chatRoomCongralutions';
import ChatBox from './modules/chatBox';

class Routes extends BaseComponent {
    componentDidMount() {
   
    }
    
    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <Router history={history}>
                    <Switch>
                    <Route exact path={'/'} component={ClaimNew}/>
                        <Route exact path={'/paintless-dentless-repair'} component={PaintlessRepair}/>
                        <Route exact path={'/paintless-dent-repair'} component={VehicleService}/>
                        <Route exact path={'/battery-aggrement'} component={BatteryAggrement}/>
                        <Route exact path={'/blogs'} component={Blogs}/>
                        <Route exact path={'/add-room'} component={AddRoom} />
                        <Route exact path={'/congrats-room'} component={CongratsRoom} />
                        <Route exact path={'/chat-box'} component={ChatBox} />



                        <Redirect exact from='*' to="/"/>
                    </Switch>
                </Router>
            </MuiThemeProvider>);
    }
}

export default Routes;
