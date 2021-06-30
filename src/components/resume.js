import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div className="show1">
        <Grid>
            
          <Cell col={5}>
            <div class="move">
              <img
                src="myphoto.jpeg"
                alt="mine"
                 />
            </div>
            <div class="move">
            <h2>Dhineshkumar M</h2>
            <h4 style={{color: 'grey'}}>Computer Science Engineer</h4>
            <hr style={{borderTop: '3px solid blue', width: '50%'}}/>
            <p>To secure a challenging position in a reputable organization to expand my learnings, knowledge, and skills.</p>
            <hr style={{borderTop: '3px solid blue', width: '50%'}}/>
            <h5><b>D.O.B.</b></h5>
            <p>27-10-2000</p>
            <h5><b>Address</b></h5>
            <p>17 A, Indhira Gandhi Street. Arumuganagar, Kalugumalai-628552</p>
            <h5><b>Phone</b></h5>
            <p>9940769130</p>
            <h5><b>Email</b></h5>
            <p>dhineshkumarmarimuthu2k@gmail.com</p>
            <h5><b>Github</b></h5>
            <p><a href="https://github.com/DhineshkumarMarimuthu/">Github Link</a></p>
            <h5><b>Linkedin</b></h5>
            <p><a href="https://www.linkedin.com/in/dhineshkumar-m-87a022203/">Linkedin Link</a></p>
            </div>
            
            <hr style={{borderTop: '3px solid bluw', width: '50%'}}/>
          </Cell>
          <Cell col={6}>
              <div className="resume-right-col" >
              <h2>Education</h2>


<Education
  startYear={2018}
  endYear={"present"}
  schoolName="Bachelor of Engineering(CSE)"
  schoolDescription='National Engineering College, Kovilpatti'
   />

   <Education
     startYear={2017}
     endYear={2018}
     schoolName="Higher Secondary"
     schoolDescription="S.H.N. Edward Higher Secondary School, Sattur"
      />
      <Education
     startYear={2015}
     endYear={2016}
     schoolName="Secondary"
     schoolDescription="R.C. Susai Higher Secondary School, Kalugumalai"
      />
    <hr style={{borderTop: '3px solid #e22947'}} />

  <h2>Skills</h2>
  <Skills
    skill="  C"
    progress={90}
    />
    <Skills
      skill="  C++"
      progress={90}
      />
      <Skills
        skill="Python"
        progress={70}
        />
        <Skills
          skill="Flutter"
          progress={60}
          />
           <Skills
          skill="React"
          progress={60}
          />
              </div>
            


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;