import React from 'react';
import {Link} from 'react-router-dom';
// import Elemental from 'elemental';
// import { Button, Alert, Spinner, Modal, ModalHeader, ModalBody, ModalFooter } from 'elemental';
const propTypes = {};

const defaultProps = {};

const LandingPage = props => (
    <div>
        <img src={require('../images/landingPage_sport.jpg')} alt="Description"/>
        {/*<Button onClick={this.toggleModal}>Launch Modal</Button>*/}
        {/*<Modal isOpen={this.state.modalIsOpen} onCancel={this.toggleModal} backdropClosesModal>*/}
            {/*<ModalHeader text="Lots of text to show scroll behavior" showCloseButton onClose={this.toggleModal} />*/}
            {/*<ModalBody>[...]</ModalBody>*/}
            {/*<ModalFooter>*/}
                {/*<Button type="primary" onClick={this.toggleModal}>Close modal</Button>*/}
                {/*<Button type="link-cancel" onClick={this.toggleModal}>Also closes modal</Button>*/}
            {/*</ModalFooter>*/}
        {/*</Modal>*/}
        <p>
            Хора, имащи желание да спортуват непрофесионално, или иначе казано любителски, често срещат неудобството да
            нямат свой отбор по спорта, който практикуват. Това може да доведе до прекарване на дълго време пред
            компютъра, в гледане на телевизия или други дейности, изключващи физическа активност, което е предпоставка
            за намалено спортуване сред младежите. “Спортяга.бг” e уеб апликация за свързване на спортуващи хора помежду
            им, както и за свързване на различни
            отбори, практикуващи еднакъв спорт. Това категорично би повишило спортната активност сред подрастващите, а
            също така и сред хората от всички други възрасти. Това е важна предпоставка за едно по-здравословно
            общество.
        </p>
        <Link to={'/sport-all/0'} className="button is-primary">Преглед на всички спортове</Link>
    </div>
);

LandingPage.propTypes = propTypes;

LandingPage.defaultProps = defaultProps;

export default LandingPage;
