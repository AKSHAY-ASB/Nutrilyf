import React from 'react'
import "../../App.css" 
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';

import Packages from '../Packages'
import SideNav from '../SideNav'

import CarCard from '../CarCard';
import NewTable from '../NewTable';
import Cards1 from '../Cards';
import TicketBook from '../TicketBook'

function Services({match}) {


    return (
        <div style={{backgroundColor:' #fff'}}>
    <SideNav/>
      
    <Switch>
        <Route path={`${match.path}/`} exact component={Cards1} />
        <Route path={`${match.path}/packages`} component={Packages} />
        <Route path={`${match.path}/Rents`} component={CarCard} />
        <Route path={`${match.path}/pickup-drop`} component={NewTable} />
        <Route path={`${match.path}/TicketBook`} component={TicketBook} />
    </Switch>
        
    </div>
    )
}

export default Services


