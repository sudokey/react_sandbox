import * as React from 'react';

export interface LayoutProps {
  children: React.ReactNode;
  staticVersion: number;
}

const Layout: React.FC<LayoutProps> = ({ children, staticVersion }) => (
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <link rel="stylesheet" href={`/main.css?${staticVersion}`} />
      <title>React Sandbox</title>
    </head>
    <body>
      <div className="app-container">
        {children}
      </div>

      <script src={`/client.js?${staticVersion}`} />
    </body>
  </html>
);

export default Layout;
