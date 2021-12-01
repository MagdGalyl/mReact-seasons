import './SeasonDisplay.css'
import React from "react";

const seasonConfig = {
    summer: {
        text: "Let's hit the sun",
        iconName: 'sun'
    },
    winter: {
        text: "Burr, its chilly",
        iconName: 'snowflake'
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month <9) {
       return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ?  'winter' :'summer';
    }
}

const SeasonDisplay = (props) => {
    // const text = season === 'winter' ? 'Burr, its chilly' : 'Lets hit the beach';
    // const icon = season === 'winter' ? 'snowflake' : 'Lets hit the sun';
    // console.log(season);

    // bellow season variable will get us user season
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season];
    // then using seasonConfig[season we got from variable]
    // we destructred the config objects and used its keys bellow

    return(
        <div className = {`season-display ${season}`}>
            <i className = {`icon-left massive ${iconName} icon`} ></i>
            <h1>{ text }</h1>
            <i className = {`icon-right massive ${iconName} icon`} ></i>
        </div>
    );
};

export default SeasonDisplay;