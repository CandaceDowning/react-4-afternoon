import React, { Component } from 'react';
import {Link, Switch, Route} from "react-router-dom";
import History from "../History/History"
import Contact from "../Contact/Contact"


export default class About extends Component {
  render() {
    return (
      <div>
        <div className='subnav'>
          <Link to="/about" className="subnav_links"><h3>About</h3></Link>
          <Link to="/about/history" className="subnav_links"><h3>History</h3></Link>
          <Link to="/about/contact" className="subnav_links"><h3>Contact</h3></Link>
        </div>
        <div className='box'>
        <Switch>
          <Route path="/about/history" component={History}/>
          <Route path="/about/contact" component={Contact}/>
          <Route path="/about" render={()=>(
              <div>
                <h1 className='title'>About WestSide Univerity</h1>
                <p>
                  Helping marketers serve unmatched cross-phase personalized experiences at every step of the FirstSpriti Digital Experience Platform. Helping marketers serve unmatched cross-phase personalized experiences at every step of the FirstSpriti Digital Experience Platform. Spriti today introduced new capabilities of the FirstSpriti Digital Experience Platform (DXP). Helping marketers serve unmatched cross-phase personalized experiences at every step of the FirstSpriti Digital Experience Platform. Helping marketers serve unmatched cross-phase personalized experiences at every step of the FirstSpriti Digital Experience Platform powers enterprise-class. Spriti introduced new capabilities of the FirstSpriti Digital Experience Platform. 
                </p>              
              </div>
            )}
          />
        </Switch>
        </div>
      </div>
    )
  }
}