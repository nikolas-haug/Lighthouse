import React from 'react';
import Assessment from './pages/Assessment/Assessment';
import { Redirect } from 'react-router'
import Entry from './pages/Entry/Entry';
import Journal from './pages/Journal/Journal';

const Middleware = props=> {
        return ( 
            <div>   
                {localStorage.getItem('litH@user') &&
                props.match.path === "/assessment"? <Assessment/>:
                localStorage.getItem('litH@user') && 
                props.match.path === "/entries"? <Entry {...props}/>:
                localStorage.getItem('litH@user') && 
                props.match.path === "/new_entry"? <Entry {...props}/>:
                localStorage.getItem('litH@user') && 
                props.match.path === "/my_journals"? <Journal/>:
                <Redirect to='/'/>
                }
            </div>
         );
}
 
export default Middleware;