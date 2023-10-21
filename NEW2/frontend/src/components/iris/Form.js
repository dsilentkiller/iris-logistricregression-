import React, { Component }from "react"
import PropTypes from 'prop-types';
import {addOneIris,updateOneIris,setEditedIris} from "../../actions/iris";





export class Form extends Component{
    static propTypes ={
        addOneIris :this.propTypes.func.isRequired,
        updateOneIris:this.propTypes.func.isRequired,
        setEditedIris:PropTypes.func.isRequired,
    }

    onChange= e=>{
        this.props.editedIris[e.target.name] = e.target.value;
        let editedIris ={...this.props.editedIris}
        editedIris[e.target.name] = e.target.value;
        this.props.setEditedIris(editedIris);

    }
    onSubmit = e =>{
        e.preventDefault();
        const{sepal_length,sepal_width,petal_length,petal_width,species} =this.props.editedIris;
        const iris ={sepal_length,sepal_width,petal_length,petal_width,species};

        if(this.props.editedIris.id){
            iris['id'] = this.props.editedIris.id;
            this.props.updateOneIris(iris);
        }else{
            this.props.addOneIris(iris);
        }
        this.props.setEditedIris({
            sepal_length:"",
            sepal_width:"",
            petal_length:"",
            petal_width:"",
            species:""
        })
    }
    render(){
        const{Sepal_length,sepal_width,petal_length,petal_width,species} = this.props.editedIris;
        return(
            <div className="card card-body mt-4 mb-4">
                <h2> Add One iris </h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label> sepal length</label>
                        <input className=""/>
                    </div>
                </form>
            </div>
        )
    }
}