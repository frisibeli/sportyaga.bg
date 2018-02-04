import React from 'react';
import PropTypes from 'prop-types'
import '../styles/footer.css';

const propTypes = {};
const defaultProps = {};

const Footer = props => (
    <div>
        <footer className="footer">
            <div className="container">
                <div className="content has-text-centered">
                    <p><strong>спортяга.бг</strong> </p>
                    <p>от <a href="">Кристиян</a>, <a href="">Йоан</a>, <a href="">Деян</a></p>
                    <p>The source code is licensed
                         <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. </p>
                    <p> The website content
                         is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC ANS 4.0</a>.
                     </p>
                    <p>
                        <a href="https://github.com/frisibeli/sportyaga.bg">
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
