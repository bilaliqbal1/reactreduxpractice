import React from 'react';
class Season extends React.Component {
    constructor(props){
        super(props);
        //initialize state
        this.state={lat: null, errormessage:''}
        window.navigator.geolocation.getCurrentPosition(
            position=>{
                //update state through setState
                this.setState({lat: position.coords.latitude})
            },
            err=>{
                this.setState({errormessage: err.message})
            }
        )
    }
    render(){
        if (this.state.errormessage && !this.state.lat) {
            
            return <div>Latitude: {this.state.errormessage}</div>
        }
        if (!this.state.errormessage && this.state.lat) {
            
            return <div>Latitude: {this.state.lat}</div>
        }
            return <div>Loading...</div>
        


    }
}

export default Season
