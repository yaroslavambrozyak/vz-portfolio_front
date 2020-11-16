import React from 'react'
import { Field, reduxForm} from 'redux-form';

function AdminProjectForm(props) {
    let categoriesOptions = props.categories ? props.categories.map(c=><option key={c.id} value={c.id}>{c.name}</option>) : [];

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <label>Name</label>
                <Field name='name' component='input' type='text'/>
            </div>
            <div>
                <label>Category</label>
                <Field name="category" component="select">
                    <option key={null}>Select...</option>
                    {categoriesOptions}
                </Field>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default reduxForm({
    form: 'projectForm',
    enableReinitialize: true,
})(AdminProjectForm);