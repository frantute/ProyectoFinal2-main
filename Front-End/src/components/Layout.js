import Head from 'next/head';
import React from 'react';
import Headercomponent from './Header';


const Layout = ({ children }) => {


  return (
  <div>
      {children}

   </div>
   
  );
};

export default Layout;