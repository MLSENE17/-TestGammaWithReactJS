import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import response from '../../lib/FizzBuzz1';
import listNombre from '../../lib/Nombres';

const Stage1 = () => {
    const tabNombre=listNombre(100)
    return (
        <div className="container-fluid mt-4">
            <div style={{marginBottom: 10}}>
                <Link to="" className="btn btn-secondary "> BACK</Link>
            </div>
            <div className="card border-primary mb-3 text-center">
                <div className="card-header">
                   <h1 className="text-primary">Stage 1</h1>
                </div>
                <div className="card-body">
                    <div className="row text-center">
                            <div className="col-md-12">
                                {
                                    tabNombre.map((i,index)=><h6 key={i.toString()}>{response(i)}</h6>)
                                }
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stage1;