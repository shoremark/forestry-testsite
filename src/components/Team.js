import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Modal, Button } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown/with-html';

const Team = ({ data }) => {
  const [show, setShow] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [item, setItem] = useState(null);

  const showModal = (e, index, newItem) => {
    setShow(!show);
    setItem(newItem);
    setActiveModal(index);
  };

  const hideModal = () => {
    setShow(!show);
    setItem(null);
    setActiveModal(null);
  };

  const truncateText = text => {
    const originalString = text;
    const length = 150;
    const ending = '...';
    let string = '';
    if (originalString.length > length) {
      string = `${originalString.substring(0, length)} ${ending}`;
    } else {
      string = originalString;
    }
    return string;
  };

  return (
    <React.Fragment>
      {data.members.map((member, key) => (
        <React.Fragment key={key}>
          <Col md={6} className="mb-5">
            <Row>
              <Col sm={4}>
                <img
                  className="circle mb-4"
                  src={member.src}
                  alt={member.name}
                />
              </Col>
              <Col sm={8}>
                <h5>{member.name}</h5>
                <h6>{member.title}</h6>
                <ReactMarkdown
                  className="mt-3"
                  source={truncateText(member.bio)}
                  escapeHtml={false}
                />

                <Button
                  variant="link"
                  className="px-0 text-uppercase oswald"
                  onClick={e => showModal(e, activeModal, member)}
                >
                  Read Full Bio
                </Button>
              </Col>
            </Row>
          </Col>
        </React.Fragment>
      ))}
      {show !== false ? (
        <Modal show={show} onHide={hideModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>{item.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col sm={4}>
                <img className="circle mb-4" src={item.src} alt={item.name} />
              </Col>
              <Col sm={8}>
                <h6 style={{ color: '#aaa' }}>{item.title}</h6>
                <ReactMarkdown
                  className="mt-3"
                  source={item.bio}
                  escapeHtml={false}
                />
              </Col>
            </Row>
          </Modal.Body>
        </Modal>
      ) : null}
    </React.Fragment>
  );
};

Team.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      members: PropTypes.array
    })
  )
};

export default Team;
