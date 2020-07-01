import React from 'react';

import CustomersStyled from './Customers.styled';

import srcGLN from './static/global-leadership-summit.jpg';
import srcJMM from './static/jmm.png';
import srcIHOPKC from './static/customer_ihopkc.png';
import srcJB from './static/customer_jim_bakker.png';

const Customers = () => {
  const customers = [
    {
      title: 'Global Leadership Summit',
      src: srcGLN,
    },
    { title: 'Joyce Meyer Ministries', src: srcJMM },
    { title: 'International House of Prayer', src: srcIHOPKC },
    { title: 'Jim Bakker Show', src: srcJB },
  ];
  return (
    <CustomersStyled>
      <div className="shape-content">
        <h3 className="oswald">Our Customers</h3>
        <hr />
        <p>
          We are privileged to work with many large and medium-sized
          organizations.
        </p>
        <ul className="d-flex flex-wrap list-unstyled mb-0">
          {customers.map((item, key) => (
            <li
              key={key}
              className="d-md-flex align-items-center col-6 col-md-3"
            >
              <img
                // fixed={item.url.childImageSharp.fluid}
                src={item.src}
                alt={item.title}
                imgStyle={{ position: 'relative' }}
                placeholderClassName="myClass"
                className={item.title.split(' ').join('-').toLowerCase()}
              />
            </li>
          ))}
        </ul>
      </div>
    </CustomersStyled>
  );
};

export default Customers;
