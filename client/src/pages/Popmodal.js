import React from "react";
import { Modal, Button, Form  } from "react-bootstrap";

function Popup({show,hide,service}){


   return( 
        <>
            <Modal show={show}>
                <Modal.Header>
                <Modal.Title>{service.title}</Modal.Title>
                </Modal.Header>
                {/* <Modal.Body>{service.content}</Modal.Body> */}
                <Modal.Body>
                    <Form.Group >
                        {/* <Form.Label>Name: </Form.Label> */}
                        <Form.Control type="text" value="" placeholder="Name"/>           
                    </Form.Group>
                    <Form.Group >
                        {/* <Form.Label>Email: </Form.Label> */}
                        <Form.Control type="text" value="" placeholder="Email"/>           
                    </Form.Group>
                    <Form.Group >
                        {/* <Form.Label>File Upload: </Form.Label> */}
                        <Form.Control type="file" value="" placeholder="File"/>           
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Button variant="secondary" onClick={hide}>Close</Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default Popup