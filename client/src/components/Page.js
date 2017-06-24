import React from 'react';
import PropTypes from 'prop-types'

const propTypes = {};

const defaultProps = {};

const Page = props => (
    <section className="section">
        <div className="container content">
            {props.title && <h1>{props.title}</h1>}
            {props.leftColumn? props.children:(
             <div className="columns">
                <div className="column is-5">
                    <figure className="image is-4by3">
                        <img src={props.leftColumn} alt="Description"/>
                         {/*<img src="http://placehold.it/800x600" alt="Description">*/}
                    </figure>
                </div>
                <div className="column is-6 is-offset-1">
                    {props.children}
                </div>
            </div>)}
        </div>
    </section>
);

export default Page;
