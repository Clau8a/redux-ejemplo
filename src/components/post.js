import React, { Component } from 'react';

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deleted: false,
            editing: false,
            title: this.props.title,
            body: this.props.body
        };
    }

    hanldeChange(event) {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [`${name}`]: value });
    }

    handleCancel() {
        this.setState({
            editing: false,
            title: this.props.title,
            body: this.props.body
        })
    }

    handleSave() {
        this.setState({
            editing: false
        })
    }

    handleEdit(event) {
        this.setState({ editing: true });
    }

    handleDelete(){
        this.setState({ deleted: true });
    }

    componentWillReceiveProps(newProps) {
        this.setState({ title: newProps.title || "", body: newProps.body });
    }

    render() {
        return (
            this.state.editing ?
                <div className="col-xs-12 post">
                    <input name="title" className="form-control" value={this.state.title} onChange={this.hanldeChange.bind(this)} />
                    <textarea name="body" className="form-control" onChange={this.hanldeChange.bind(this)}>{this.state.body}</textarea>
                    <div className="col-xs-12 button tar">
                        <button className="btn btn-default" onClick={this.handleCancel.bind(this)}>Cancelar</button>
                        <button className="btn btn-success" onClick={this.handleSave.bind(this)}>Guardar</button>
                    </div>
                </div>

                :
                <div className={"col-xs-12 post " + (this.state.deleted ? " hide" : "")}>
                    <div className="col-xs-11" title="click para editar" onClick={this.handleEdit.bind(this)}>
                        <h2>{this.state.title}</h2>
                        <p>{this.state.body}</p>
                    </div>
                    <div className="col-xs-1 button">
                        <button className="btn btn-danger" onClick={this.handleDelete.bind(this)}>Eliminar</button>
                    </div>
                </div>
        )
    }
}

export default Post;