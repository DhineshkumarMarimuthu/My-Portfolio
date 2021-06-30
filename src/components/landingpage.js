import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="profimage.jpg"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Welcome to My Portfolio</h1>

            <hr/>

          <p>Resume | AboutMe | Projects | Contact</p>

        
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;