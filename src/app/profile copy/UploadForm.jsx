import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import {Button , Image} from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faCheck, faPencil, faUpload } from '@fortawesome/free-solid-svg-icons';

const UploadForm = () => {  
  const [showIcons, setShowIcons] = useState(false);
  
  return (
    <>
      <Form>
        <Form.Group id="formFile" className="">
          <span className='closeicon' id='closeicon'>
          <FontAwesomeIcon icon={faClose} />
          </span>       
          <Form.Label className="prediticon">
              <span className="pfup">
                <FontAwesomeIcon icon={faPencil} id='editicon' style={{ display: showIcons ? 'none' : 'inline' }} />
                <FontAwesomeIcon icon={faCheck} id='checkicon' style={{ display: showIcons ? 'inline' : 'none' }} />
              </span>
          <Form.Control type="file" id='profileimg'/>
          </Form.Label>
        </Form.Group>
      </Form>
    </>
  );

};

export default UploadForm;
