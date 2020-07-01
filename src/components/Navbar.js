import React, { useState } from 'react';
import { Link } from 'gatsby';
import { useTrail, animated } from 'react-spring';
import { Navbar, Modal, Button } from 'react-bootstrap';
import logo from '../img/sardius-logo.svg';

const NavBar = () => {
  const [visible, setVisible] = useState(false);
  // eslint-disable-next-line
  const [toggle, setToggle] = useState(false);

  const handleShow = () => {
    setVisible(!visible);
    setToggle(!toggle);
  };

  const items = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'About',
      link: '/about'
    },
    {
      name: 'Solutions',
      link: '/solutions'
    },
    {
      name: 'Contact Us',
      link: '/contact'
    }
  ];
  const config = {
    mass: 5,
    tension: 2000,
    friction: 200,
    duration: 500
  };

  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    delay: 200,
    x: toggle ? 0 : 20,
    height: toggle ? 50 : 0,
    from: { opacity: 0, x: 20, height: 0 }
  });

  return (
    <Navbar expand="xs">
      <Navbar.Brand href="/">
        <img src={logo} alt="Sardius Media" />
      </Navbar.Brand>

      <Button
        className={`navbar-toggler ${visible ? 'open' : 'closed'}`}
        onClick={handleShow}
      >
        <span className="icon-bar top-bar" />
        <span className="icon-bar middle-bar" />
        <span className="icon-bar bottom-bar" />
      </Button>
      <Modal
        id="navigation"
        dialogClassName="d-flex w-100 h-100 m-0"
        show={visible}
        onHide={handleShow}
      >
        <Modal.Body>
          <ul className="list-unstyled">
            {trail.map(({ x, height, ...rest }, index) => (
              <animated.div
                key={index}
                className="trails-text"
                style={{
                  ...rest,
                  transform: x.interpolate(x => `translate3d(0,${x}px,0)`)
                }}
              >
                <li>
                  <Link
                    to={items[index].link}
                    className="text-center"
                    onClick={handleShow}
                  >
                    {items[index].name}
                  </Link>
                </li>
              </animated.div>
            ))}
          </ul>
        </Modal.Body>
      </Modal>
    </Navbar>
  );
};

export default NavBar;
