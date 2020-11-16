import React from 'react'

function AdminProjectList(props){
    return props.projects ? props.projects.map(c => AdminProjectListItem(c.id, c.name, props.onEditButtonClickEvent)) : [];
}

function AdminProjectListItem(id, name, onEditEvent) {
    return <div>{name}<button onClick={() => onEditEvent(id)}>Edit</button></div>
}

export default AdminProjectList;