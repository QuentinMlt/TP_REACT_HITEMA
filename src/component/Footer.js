import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Footer extends Component {

    render() {
        return <footer className="text-center text-white mt-auto" style={{backgroundColor : '#212529'}}>
                    <section>
                        <div className="container p-2 pb-0" style={{backgroundColor : '#212529'}}>
                            <p className="d-flex justify-content-center align-items-center">
                                <span className="me-3">Partagez les réseaux sociaux</span>
                                <Link type="button" className="btn btn-outline-success btn-rounded">Réseaux du client</Link>
                            </p>
                        </div>

                        <div className=" text-center mb-5" style={{backgroundColor : '#212529'}}>
                        © 2021 Copyright:
                        <a className="text-white" href="https://mdbootstrap.com/"> Site-du-client.com</a>
                        </div>
                    </section>
                    
                    
                </footer>
            
    }
}