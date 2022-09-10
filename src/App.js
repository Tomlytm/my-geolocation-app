import React from "react";


class App extends React.Component {
state = {lat: null, errorMessage: ''}
    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}), err => this.setState({errorMessage: err.message})
        )
    }
render(){
    
    if(this.state.lat && !this.state.errorMessage){
        return(
            <div>
                Your current latitude is <span style={{color: 'green', fontWeight: '900', textAlign: 'center'}}>{this.state.lat}</span>
            </div>
        )
    }
    if (!this.state.lat && this.state.errorMessage){
        return (
            <div style={{color: 'red', textAlign: 'center'}}>
                {this.state.errorMessage}
            </div>
        )

    }
    return(
        <div>
            loading...
        </div>
    )
}

}
export default App;