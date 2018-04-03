import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import { Footer } from '../../components';

const styles = theme => ({
   root: {
       marginTop: 100
   },
   filler: {
       height: 500
   }
});

class Services extends Component {
    render(){
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <h1>Services</h1>
                <div className={classes.filler}>

                </div>
                <Footer />
            </div>
        );
    }
}

export default withStyles(styles)(Services);