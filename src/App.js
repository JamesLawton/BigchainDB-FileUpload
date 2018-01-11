import React, { Component } from 'react';
import './App.css';
import DropzoneComponent from 'react-dropzone-component';
import bigchain from './bigchain';
require('../src/dropzone.css')
require('../node_modules/react-dropzone-component/styles/filepicker.css')
require('../node_modules/dropzone/dist/min/dropzone.min.css')



class App extends Component {
   constructor(props) {
   super(props);
   this.componentConfig = {
    iconFiletypes: ['.stl'],
    showFiletypeIcon: true,
    postUrl: 'no-url'
};
this.djsConfig = { autoProcessQueue: false };
this.eventHandlers = { addedfile: (file) => bigchain(file)}; //Posts the file to BCDB
}
  render() {
    <div>
    <h2>Upload Your Design</h2>
    </div>
    const componentConfig = this.componentConfig;
    const djsConfig = this.djsConfig;
    const eventHandlers = this.eventHandlers;
    
    return (
      <DropzoneComponent config={componentConfig}
                       eventHandlers={eventHandlers}
                       djsConfig={djsConfig}
                       />
    );
  }
}

export default App;
