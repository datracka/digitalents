import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Button from 'ui/Button';
import Svg from 'ui/Svg';
import Input from 'ui/Input';

const Box = styled(Button)`
  box-sizing: border-box;
  justify-content: flex-start;
  input {
    display: none;
  }
  span {
    margin-left: 2.2em;
  }
`;

const UploadCv = ({ children, resumeUrl }) => (
  <Box bgColor="primary" element="label">
    <Svg viewBox="0 0 20 20" size={20}>
      <path d="M8 12h4V6h3l-5-5-5 5h3v6zm11.338 1.532c-.21-.224-1.611-1.723-2.011-2.114A1.503 1.503 0 0 0 16.285 11h-1.757l3.064 2.994h-3.544a.274.274 0 0 0-.24.133L12.992 16H7.008l-.816-1.873a.276.276 0 0 0-.24-.133H2.408L5.471 11H3.715c-.397 0-.776.159-1.042.418-.4.392-1.801 1.891-2.011 2.114-.489.521-.758.936-.63 1.449l.561 3.074c.128.514.691.936 1.252.936h16.312c.561 0 1.124-.422 1.252-.936l.561-3.074c.126-.513-.142-.928-.632-1.449z" />
    </Svg>
    {/* <input type="file" /> */}
    <Input name="resumeUrl" type="hidden" defaultValue={resumeUrl} />
    <span>{children}</span>
  </Box>
);

UploadCv.propTypes = {
  children: PropTypes.node.isRequired,
  resumeUrl: PropTypes.string.isRequired,
};

export default UploadCv;
