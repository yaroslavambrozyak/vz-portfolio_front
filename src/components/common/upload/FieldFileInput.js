import React, { Component } from 'react'

export default class FieldFileInput extends Component {
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
        this.state = { files: null };
    }

    onChange(e) {
        const { input: { onChange } } = this.props
        onChange(e.target.files)
        let files = e.target.files;
        let localUrls = [...files].map(f=>URL.createObjectURL(f));
        console.log(localUrls);
        this.setState({files: localUrls});
    }

    render() {
        const { input: { value } } = this.props
        const { input, label, required, meta, } = this.props  //whatever props you send to the component from redux-form Field
        return (
            <div><label>{label}</label>
                <div>
                    <input
                        type='file'
                        accept='.jpg, .png, .jpeg'
                        onChange={this.onChange}
                        multiple
                    />
                </div>
                <div>
                    {this.state.files && this.state.files.map(f=><img style={{height:100 }} src={f}/>)}
                </div>
            </div>
        )
    }
}