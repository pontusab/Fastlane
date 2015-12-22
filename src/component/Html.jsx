import React from 'react';
import config from '../config';

const { APP_CONFIG_PROPERTY, APP_STATE_PROPERTY, APP_MOUNT_ID } = config;

export default class Html extends React.Component {
  render() {
    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <script dangerouslySetInnerHTML={{ __html: `window['${APP_STATE_PROPERTY}']=${JSON.stringify(this.props.state)};` }}></script>
          <script dangerouslySetInnerHTML={{ __html: `window['${APP_CONFIG_PROPERTY}']=${JSON.stringify(this.props.config)};` }}></script>
          <script src="https://maps.googleapis.com/maps/api/js?libraries=places"></script>
          <script src="/static/bundle.js"></script>
        </head>
        <body>
          <div id={APP_MOUNT_ID} dangerouslySetInnerHTML={{ __html: this.props.markup }}></div>
        </body>
      </html>
    );
  }
}

Html.propTypes = {
  state: React.PropTypes.object.isRequired,
  config: React.PropTypes.object.isRequired,
  markup: React.PropTypes.string.isRequired,
};
