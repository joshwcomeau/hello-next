import React from 'react';

import './styles.css';

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <footer>Copyright {new Date().getFullYear()} Josh Inc.</footer>
    </html>
  );
}

export default RootLayout;
