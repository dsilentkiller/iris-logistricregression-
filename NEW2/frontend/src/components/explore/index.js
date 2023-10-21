import React,{Component, Fragment} from "react";
import {connect} from "react-redux";
import PropTypes  from "prop-types";

import {getIris} from "../../actions/iris";

import C3Chart from 'react-c3js'

import 'c3/c3.css'
import {Histogram, WrappedComponent,withParentSize,PatternLines,DensitySeries,BarSeries,XAxis,YAxis}
from '@data-ui/histogram';

export class IrisExplore extends Component{
    static propTypes ={
        iris:PropTypes.array.isRequired,
        getIris:PropTypes.func.isRequired,

    };
    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.props.getIris();
    }

    getIrisSeries(irisData){
        console.log(irisData)

        let sepalLengthSeries = irisData.map((oneIris)=>oneIris.sepal_length);
        let sepalWidthSeries = irisData.map((oneIris)=>oneIris.sepal_width);
        let petalLengthSeries = irisData.map((oneIris)=>oneIris.petal_length);
        let petalWidthSeries = irisData.map((oneIris)=>oneIris.petal_width);

        return{
            sepalLengthSeries,
            sepalWidthSeries,
            petalLengthSeries,
            petalWidthSeries,
           
        }
    }

    setIrisSeries(irisData){
        this.irisSeries = this.irisSeries;
    }

    getSepalScatterData(){
        let irisSeries = this.getIrisSeries;
        let sepalLengthSeries = irisSeries.sepalLengthSeries;
        let sepalWidthSeries = irisSeries.sepalWidthSeries;
        let petalLengthSeries = irisSeries.petalLengthSeries;
        let petalWidthSeries = irisSeries.petalWidthSeries;

        let data ={
            x:'sepalLength',
            columns:[
                ["sepalLength", ...sepalLengthSeries],
                ["sepalWidth", ...sepalWidthSeries],

            ],
            type:'scatter'
        };

        console.log(data);
        return data;


    }
getSepalScatterAxis(){
    return{
        x:{
            label :'Sepal.Length',
            tick:{
                fit:false
            }
        },
        y:{
            label:'Sepal.Width'
        }
    }
}
getPetalScatterData(){
    let irisSeries = this.irisSeries;
    let petalLengthSeries = irisSeries.petalLengthSeries;
    let petalWidthSeries = irisSeries.petalWidthSeries;

    let data = {
        x:'petalLength',
        columns:[
            ["petalLen", ...petalLengthSeries],
            ["petalWidth", ...petalWidthSeries]
        ],
        type :'scatter'
    };
    console.log(data);
    return data;

}
getPetalScatterAxis(){
    return{
        x:{
            label:'Petal.Length',
            tick:{
                fit:false
            }
        },
        y:{
            label:'Petal.Width'
        }
    
//     render(){
//         this.setIrisSeries(this.props.iris);
//         let sepalData =this.getSepalScatterData();
//         let sepalAxis = this.getSepalScatterAxis();

//         }
//     }
// }
// }
// }