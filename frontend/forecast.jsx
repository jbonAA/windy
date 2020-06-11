import React from 'react';

class Forecast extends React.Component {
    constructor(props){
        super(props)

    }


    componentDidMount(){
        console.log(this.props)
    }




    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps)
        if(nextProps.weatherStation !== this.props.weatherStation){
            return true
        }else{
            return false
        }
    }

    render() {
        return (
            <div id="forecastDiv">
                <div id="forecastTitle">
                    <h3>Local Forecast</h3>
                </div>

                {/* forecast items should turn into forecast index */}
                {/* props passed through root component */}

                <div id="forecastItem">

                </div>
                <div id="forecastItem">

                </div>
                <div id="forecastItem">

                </div>



                <div id="links">
                    <div id="icons">

                    </div>
                    <p>Repo Available on Github and LinkedIn</p>
                    <div id="icons">

                    </div>
                </div>
            </div>
        )
    }
}

export default Forecast