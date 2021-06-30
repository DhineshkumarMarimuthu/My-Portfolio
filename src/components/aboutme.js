import React, { Component } from 'react';
import { Cell, Grid } from 'react-mdl';


class About extends Component {
  render() {
    return(
        <Grid>
            <Cell col={6}>
            <div ><div style={{fontSize: '30px', fontFamily: 'OpenSans', color: 'red',marginTop:50,marginBottom:0,paddingLeft:30}}>About Me..</div>
        <div style={{ padding:30,marginTop:0}}><ul style={{fontSize: '20px', fontFamily: 'OpenSans'}}>
        <li>I am Dhineshkumar from a village named Kalugumalai.</li>
        <li>Just a Computer Science Engineer who trying to be a Fullstack Developer.</li>
        <li>I like to do solve complex problems and to learn new things or new technologies which is developing around me</li>
        <li>I am a social media lover. I like to read funny and interactive memes and videos in Instagram, Facebook etc.</li>
        <li>Like to get updated everyday.</li>
        <li>Like to be with the College friends whom makes me smile always</li>
        <li>Like to travelling and a foodie</li>
        <li> I like to play games like Cricket and Mobile games like PUBG, Real Cricket etc.</li>
        </ul> 
        </div></div>
            </Cell>
            <Cell col={6}>
                <img src="About.jpg" alt="profile"></img>
            </Cell>
        
        </Grid>
      
    )
  }
}

export default About;