import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container-fluid mt-4">
             <div className="card border-danger mb-3 text-center">
                <div className="card-header">
                    Home
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><Link to="stage1"   className="text-primary" > Stage 1</Link></li>
                    <li className="list-group-item"><Link to="stage2"  className="text-success"  >Stage 2</Link></li>
                </ul>
             </div>
        </div>
    );
};

export default Home;