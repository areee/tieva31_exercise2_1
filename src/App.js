import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Dialog from 'material-ui/Dialog';
import IconMenu from 'material-ui/IconMenu';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import Slider from 'material-ui/Slider';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Checkbox from 'material-ui/Checkbox'
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton'


class RaisablePaper extends Component{
  constructor(props) {
		super();
		this.state = {
			dialogOpen: false,
		};
	}

  render(){
    const actions = [
			<FlatButton label="Cancel"
			primary={true}
			onTouchTap={() => {this.handleClose(false);}}
			/>,
			<FlatButton label="Leave"
			primary={false}
			onTouchTap={() => {this.handleClose(true);}}
			/>
		];

    return (
      <div>

      </div>
    );

  }
}

class App extends Component {
  constructor(){
    super();
    this.state={
      drawerOpen: false,
      dialogOpen: false,
    }
  }

  toggleDrawer = () => {
		this.setState({
			drawerOpen: !this.state.drawerOpen,
		});
	}

  handleClose = (commit) => {
		if (commit) {
      /* here some stuff that redirects to UTA homepage!*/
			
		}
		this.setState({
			dialogOpen: false,
		});
	}

  showDialog = () => {
		this.setState({
			dialogOpen: true,
		});
	}

  
  render() {

    const actions = [
			<FlatButton label="Cancel"
			primary={true}
			onTouchTap={() => {this.handleClose(false);}}
			/>,
			<FlatButton label="Leave"
			primary={false}
			onTouchTap={() => {this.handleClose(true);}}
			/>
		];

    return (
      <MuiThemeProvider>
        <div className="App">
          <AppBar title="Exercise 2.1"
          onLeftIconButtonTouchTap={this.toggleDrawer}
          >
          </AppBar>
          <Drawer open={this.state.drawerOpen}>
					<MenuItem onTouchTap={this.toggleDrawer}>Hide drawer</MenuItem>
          <MenuItem onTouchTap={this.showDialog}>Go to UTA home page</MenuItem>
				</Drawer>

        <Dialog
					title="Confirm navigation"
					actions={actions}
					open={this.state.dialogOpen}
					onRequestClose={this.handleClose}
				>
        Do you want really leave this page?
        </Dialog>

        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
