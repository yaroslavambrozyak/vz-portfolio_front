import React from 'react'
import { Field, reduxForm} from 'redux-form';

function AdminCategoryForm(props) {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <label>Name</label>
                <Field name='name' component='input' type='text'/>
            </div>
            <div>
                <label>Position</label>
                <Field name='position' component='input' type='number'/>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default reduxForm({
    form: 'categoryForm',
    enableReinitialize: true,
})(AdminCategoryForm);