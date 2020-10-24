import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function AdminPanel(props){

    return(
        <div>
            <NavLink to='/admin/arts/grid'>Manage Arts</NavLink>
            <NavLink to='/admin/arts' >Add New Art</NavLink>
        </div>
    )

}

export default AdminPanel;