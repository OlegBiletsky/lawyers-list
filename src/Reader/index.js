import React, { Component } from 'react';
import { CSVReader } from 'react-papaparse';
import './index.css';

const buttonRef = React.createRef();

export default class Reader extends Component {
  handleOpenDialog = (e) => {
    // Note that the ref is set async, so it might be null at some point
    if (buttonRef.current) {
      buttonRef.current.open(e);
    }
  };

  handleOnFileLoad = (data) => {
    console.log('---------------------------');
    console.log(data);
    console.log('---------------------------');
    console.log(data[5]['data'][1]);
    console.log('---------------------------');
  };

  handleOnError = (err, file, inputElem, reason) => {
    console.log('---------------------------');
    console.log(err);
    console.log('---------------------------');
  };

  handleOnRemoveFile = (data) => {
    console.log('---------------------------');
    console.log(data);
    console.log('---------------------------');
  };

  handleRemoveFile = (e) => {
    // Note that the ref is set async, so it might be null at some point
    if (buttonRef.current) {
      buttonRef.current.removeFile(e);
    }
  };

  render() {
    return (
      <>
        <h5 className='Reader-title'>Please select <p className='title__p'>.csv</p>  file</h5>
        <CSVReader
            ref={buttonRef}
            onFileLoad={this.handleOnFileLoad}
            onError={this.handleOnError}
            noClick={false}
            noDrag={false}
            progressBarColor='#24b465'
            onRemoveFile={this.handleOnRemoveFile}
            config={{header: true }}
        >
          {({ file }) => (
            <aside className='CSVReader-aside'>

              <button 
                type="button" 
                onClick={this.handleOpenDialog} 
                className='CSVReader-buttonOpen'
                >
                Browse file
              </button>

              <div className='CSVReader-fileName'>
                {file && file.name} 
              </div>

              <button 
                className='CSVReader-buttonRemove'
                onClick={this.handleRemoveFile}
              >
                Remove
              </button>

              
            </aside>
          )}
        </CSVReader>
      </>
    );
  }
}