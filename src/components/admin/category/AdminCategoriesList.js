import React from 'react';

function AdminCategoriesList(props) {
    return props.categories ? props.categories.map(c => AdminCategoryListItem(c.id, c.name, props.onEditButtonClickEvent)) : [];
}


function AdminCategoryListItem(id, name, onEditEvent) {
    return <div>{name}<button onClick={() => onEditEvent(id)}>Edit</button></div>
}

export default AdminCategoriesList;