import React from 'react';
import PropTypes from 'prop-types'

const propTypes = {};

const defaultProps = {};

const Footer = props => (
    <div>
        <footer className="footer">
        <div className="container">
            <div className="content has-text-centered">
            <p>
                <strong>спортяга.бг</strong> от <a href="http://facebook.com">Кристиян</a>, <a href="http://facebook.com">Йоан</a>, <a href="http://facebook.com">Деян</a>, <a href="http://facebook.com">Владимир</a>. The source code is licensed
                <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
                is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC ANS 4.0</a>.
            </p>
            <p>
                <a  href="https://github.com/frisibeli/sportyaga.bg">
                <img width={100} src={require('../images/logo.png')} />
                </a>
            </p>
            </div>
        </div>
        </footer>
    </div>
);

Footer.propTypes = propTypes;

Footer.defaultProps = defaultProps;

export default Footer;
