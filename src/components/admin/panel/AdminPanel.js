import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import style from './AdminPanel.module.css'

function AdminPanel(props){

    return(
        <div>
            <NavLink className={style.admin_panel_link} activeClassName={style.admin_panel_link_active} to='/admin/arts/grid'>Manage Arts</NavLink>
            <NavLink className={style.admin_panel_link} activeClassName={style.admin_panel_link_active} to='/admin/arts/create'>Add New Art</NavLink>
        </div>
    )

}

export default AdminPanel;