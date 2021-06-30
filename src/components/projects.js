import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          <Card shadow={3} style={{ margin: '50px'}}>
            <CardTitle style={{color:'white', height: '176px', background: 'url(keeper.jpg) center / cover'}} >React Project #1</CardTitle>
            <CardText>
              Keeper Application using reactjs is a mini project which is used to take notes. We can also delete the notes which we taken.
            </CardText>
            
          </Card>

          <Card shadow={3} style={{ margin: '50px'}}>
            <CardTitle style={{ height: '176px', background: 'url(portfolio.jpeg) center / cover'}} >React Project #2</CardTitle>
            <CardText>
              My Portfolio is just a website which contains all my information about acadamics. Ya you are just looking at it..
            </CardText>  
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 1) {
      return (
        <div>
           <Card shadow={3} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{ height: '176px', background: 'url(flutter.png) center / cover'}} >Flutter Project #1</CardTitle>
            <CardText>
              Chat Application using Flutter and Firebase so we can able to chat with our friends easily and quickly.
              <div><b>Github Link:</b><a href="https://github.com/DhineshkumarMarimuthu/Chat-Application" style={{paddingLeft: 5}}>click here</a></div>
            </CardText>
            
          </Card>
        </div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>Flutter</Tab>
        </Tabs>

          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;