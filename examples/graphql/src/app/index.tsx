import React from 'react';
import { Layout } from "antd";
import Routing from "pages";
import './index.scss';

const App = () => {
  return (
    <div className="app">
      <Layout>
        <Layout.Header>
          <span className="app-title text-white">
            Todo App
          </span>
        </Layout.Header>
        <Layout.Content>
          <Routing />
        </Layout.Content>
      </Layout>
    </div>
  );
}

export default App;
