import React, { useState } from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import FieldFileInput from '../../common/upload/FieldFileInput';


function AdminArt(props) {
    return (
        <AdminForm {...props} />
    )
}

let AdminForm = props => {
    let projectsOptions = props.projects ? props.projects.map(c => <option value={c.id}>{c.name}</option>) : [];
    let categoriesOptions = props.categories ? props.categories.map(c=><option key={c.id} value={c.id}>{c.name}</option>) : [];

    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit} >
            <div>
                <label htmlFor="name">Art Title</label><br/>
                <Field name="name" component="input" type="text" />
            </div>
            <div>
                <label htmlFor="description">Description</label><br/>
                <Field name="description" component="input" type="text" />
            </div>
            <div>

                <label htmlFor="category">Category</label><br/>
                <Field name="category" component="select">
                    {categoriesOptions}
                </Field>
            </div>
            <div>
                <label htmlFor="project">Project</label><br/>
                <Field name="project" component='select'>
                    <option></option>
                    {projectsOptions}
                </Field>
            </div>
            <div>
                <label htmlFor="sepView">Treat first image as separate preview</label><br/>
                <Field name="separateView" id="sepView" component="input" type="checkbox" />
            </div>
            <div>
                <label htmlFor="col">Column size</label><br/>
                <Field name="col" component="input" type="number" />
            </div>
            <div>
                <label htmlFor="row">Row size</label><br/>
                <Field name="row" component="input" type="number" />
            </div>
            <div>
                <label htmlFor="arts">Images</label><br/>
                <Field name="arts" multiple component={FieldFileInput} />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

AdminForm = reduxForm({
    form: 'artForm',
    enableReinitialize: true,
    initialValues: {col:1,row:1}
})(AdminForm)

export default AdminArt;