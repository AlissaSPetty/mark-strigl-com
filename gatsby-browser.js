import React from 'react';
import { Helmet } from "react-helmet";
import './src/global.css';

// React Context in Browser
// eslint-disable-next-line react/prop-types

const MetaInformation = (props) => {
  const { title, description, image, url, twitter } = props;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <meta itemprop="name" content={title} />
      <meta itemprop="description" content={description} />
      <meta itemprop="image" content={image} />
      <meta name="twitter:card" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content={twitter} />
      <meta name="twitter:image:src" content={image} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:image" content={image} />
      <meta name="og:url" content={url} />
      <meta name="og:site_name" content={title} />
      <meta name="og:type" content="website" />
    </Helmet>
  );
};

export const wrapRootElement = ({ element }) => {
  return <div className="page"><MetaInformation title="Mark Strigl" />{element}</div>;
};