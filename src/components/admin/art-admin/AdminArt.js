import React, { useState } from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';


function AdminArt(props) {
    return (
        <AdminForm onSubmit={values => {

        }} />
    )
}

let AdminForm = props => {
    let categories = [{ id: 'qweW', name: 'art1' }, { id: 'qweff', name: 'art2' }, { id: 'qwewwq', name: 'art3' }];
    let categoriesOptions = categories.map(c => <option value={c.id}>{c.name}</option>);

    let projects = [{ id: 'qweW', name: 'art11' }, { id: 'qweff', name: 'art21' }, { id: 'qwewwq', name: 'art31' }];
    let projectsOptions = categories.map(c => <option value={c.id}>{c.name}</option>);

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
                <Field name="separateView" id="sepView" component="input" type="file" />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

AdminForm = reduxForm({
    form: 'artForm'
})(AdminForm)

export default AdminArt;