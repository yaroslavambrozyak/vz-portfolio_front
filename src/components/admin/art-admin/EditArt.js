import React from 'react';
import { Field, reduxForm} from 'redux-form';


function EditArtForm(props) {

    let projectsOptions = props.projects ? props.projects.map(c => <option value={c.id}>{c.name}</option>) : [];
    let categoriesOptions = props.categories ? props.categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>) : [];

    const { handleSubmit } = props
    return (
        <form onSubmit={handleSubmit} >
            <div>
                <label htmlFor="name">Art Title</label><br />
                <Field name="name" component="input" type="text" />
            </div>
            <div>
                <label htmlFor="description">Description</label><br />
                <Field name="description" component="input" type="text" />
            </div>
            <div>

                <label htmlFor="category">Category</label><br />
                <Field name="category" component="select">
                    {categoriesOptions}
                </Field>
            </div>
            <div>
                <label htmlFor="project">Project</label><br />
                <Field name="project" component='select'>
                    <option></option>
                    {projectsOptions}
                </Field>
            </div>
            <div>
                <label htmlFor="sepView">Treat first image as separate preview</label><br />
                <Field name="separateView" id="sepView" component="input" type="checkbox" />
            </div>
            <div>
                <label htmlFor="col">Column size</label><br />
                <Field name="col" component="input" type="number" />
            </div>
            <div>
                <label htmlFor="row">Row size</label><br />
                <Field name="row" component="input" type="number" />
            </div>

            <button type="submit">Submit</button>
        </form>
    )

}

export default reduxForm({form:'artEditForm', enableReinitialize:true})(EditArtForm);