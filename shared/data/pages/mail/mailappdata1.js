import dynamic from 'next/dynamic';
import React, { Component, ChangeEvent } from 'react';
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

import 'react-quill/dist/quill.snow.css';

class Editors extends Component {
  static modules = {
    toolbar: [
      [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' },
      { 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image', 'video'],
      ['clean']
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    }
  };

  static formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
  ];

  constructor(props) {
    super(props);
    this.state = {
      editorHtml: '',
      theme: 'snow'
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(html) {
    this.setState({ editorHtml: html });
  }

  handleThemeChange(newTheme) {
    this.setState({ theme: newTheme });
  }

  render() {
    return (
      <div>
        <ReactQuill
          value={this.state.editorHtml}
          onChange={this.handleChange}
          modules={Editors.modules}
          formats={Editors.formats}
          bounds={'.app'}
        />
      </div>
    );
  }
}

export default Editors;
