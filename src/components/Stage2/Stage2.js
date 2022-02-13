import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import response2 from '../../lib/FizzBuzz2';
import listNombre from '../../lib/Nombres';

const Stage2 = () => {
    const tabNombre=listNombre(100)
    return (
        <div className="container-fluid mt-4">
            <div style={{marginBottom: 10}}>
                <Link to="" className="btn btn-secondary "> BACK</Link>
            </div>
            <div className="card border-success mb-3 text-center">
                <div className="card-header">
                   <h1 className="text-success">Stage 2</h1>
                </div>
                <div className="card-body">
                    <div className="row text-center">
                        <div className="row text-center">
                                <div className="col-md-12">
                                    {
                                        tabNombre.map((i,index)=><h6 key={i.toString()}>{response2(i)}</h6>)
                                    }
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stage2;