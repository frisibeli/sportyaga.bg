import React from 'react';
import {Link} from 'react-router-dom';

import PropTypes from 'prop-types'

const SendMessage = props => (
    <div>
                        <fieldset className="FormField">
                    <legend><strong>Георги Николов</strong></legend>
                    <div className="column is-14 board" id="b4">
                        <div className="box is-gray">
                            <div className="items">
                                <p className="control">
                                    <textarea style={{height: "300px", width: "100%"}} disabled="disabled"></textarea>
                                    <input className="input" type="input"/>
                                    <Link className="button is-primary" to={'/team-preview/Валетата'}>Изпрати</Link>
                                    <Link className="button is-primary" to={'/team-preview/Валетата'} >Назад</Link>

                                </p>
                            </div>
                        </div>
                    </div>
                </fieldset>
    </div>
);

export default SendMessage;
