import React from 'react';
import PropTypes from 'prop-types'

const propTypes = {};

const defaultProps = {};

const Page = props => (
    <section className="section">
    <div className="container content">
        {props.title && <h1>{props.title}</h1>}
        {props.children}
    </div>
    </section>
);

export default Page;
