import React from 'react';
import Helmet from 'react-helmet';
// import { StaticQuery, graphql } from 'gatsby';
import '../scss/main.scss';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TemplateWrapper = ({ children, mdData, contact }) => {
  const { frontmatter } = mdData.markdownRemark;

  return (
    <React.Fragment>
      <Helmet>
        <html lang="en" />
        <title>{frontmatter.meta_title}</title>
        <meta name="description" content={frontmatter.meta_description} />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={frontmatter.meta_title} />
        <meta property="og:url" content="https://sardius.media" />
        <meta property="og:image" content="/img/og-image.jpg" />
      </Helmet>
      <Navbar />

      <div>{children}</div>
      <Footer contact={contact} />
    </React.Fragment>
  );
};

export default TemplateWrapper;
