import React from 'react';
import { Button } from 'react-bootstrap';

const Server = ({ name, endpoints, status }) => (
  <div className="server">
    <div className="container">
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">{name}</h3>
        </div>
        <div className="panel-body">
          {Object.keys(endpoints).map(key => (
            <div key={key}>
              <p>Name: {key}</p>
              <p>Address: {endpoints[key]}</p>
            </div>
          ))}
          <pre>{JSON.stringify(status)}</pre>
          <Button bsStyle="danger">Delete</Button>
          <div />
        </div>
      </div>
    </div>
  </div>
);

export default Server;
