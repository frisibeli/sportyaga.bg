import React from 'react';
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
                                    <button className="button is-primary">Изпрати</button>

                                </p>
                            </div>
                        </div>
                    </div>
                </fieldset>
    </div>
);

export default SendMessage;
