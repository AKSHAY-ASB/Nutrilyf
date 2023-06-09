import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ProductModel(props) {
  const { data } = props;

  return (
    <Modal 
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className="model_card">
        <Modal.Title id="contained-modal-title-vcenter">
          {data.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="model_card">
        <p>{data.infomation}</p>
      </Modal.Body>
      <Modal.Footer className="model_card">
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProductModel;
