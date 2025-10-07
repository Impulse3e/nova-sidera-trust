declare module 'react-helmet' {
  import * as React from 'react';

  export interface HelmetProps {
    htmlAttributes?: Record<string, any>;
    children?: React.ReactNode;
  }

  export class Helmet extends React.Component<HelmetProps> {}
}
