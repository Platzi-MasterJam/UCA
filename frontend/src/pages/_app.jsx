/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import '../styles/reset.css';
import '../styles/header-styles.css';
import '../styles/layout.css';
import '../styles/search-bar.css';
import '../styles/table-row-styles.css';
import '../styles/loading-spinner.styles.css';
import '../styles/air-card-styles.css';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
