import React, { useState } from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import FieldFileInput from '../../common/upload/FieldFileInput';


function AdminArt(props) {
    return (
        <AdminForm {...props} />
    )
}

let AdminForm = props => {
    let categoriesOptions = props.categories.map(c => <option value={c.id}>{c.name}</option>);
    let projectsOptions = props.projects.map(c => <option value={c.id}>{c.name}</option>);

    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit} >
            <div>
                <Field name="name" component="input" type="text" />
            </div>
            <div>
                <Field name="description" component="input" type="text" />
            </div>
            <div>
                <Field name="category" component="select">
                    <option></option>
                    {categoriesOptions}
                </Field>
            </div>
            <div>
                <Field name="project" component='select'>
                    <option></option>
                    {projectsOptions}
                </Field>
            </div>
            <div>
                <label htmlFor="sepView">First Image As Separate Preview</label>
                <Field name="separateView" id="sepView" component="input" type="checkbox" />
            </div>
            <div>
                <Field name="arts" multiple component={FieldFileInput}/>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

AdminForm = reduxForm({
    form: 'artForm'
})(AdminForm)

export default AdminArt;