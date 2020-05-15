/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import Input from 'ui/Input';

const Box = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  h4 {
    text-transform: uppercase;
    @media ${({ theme }) => theme.mediaQueries.atMostLaptop} {
      order: 2;
    }
  }
  label {
    align-items: center;
    background-color: ${({ theme }) => theme.colors.secondary};
    display: flex;
    justify-content: center;
    width: 180px;
    height: 180px;
    border-radius: 50%;
    cursor: pointer;
    @media ${({ theme }) => theme.mediaQueries.atLeastTablet} {
      width: 120px;
      height: 120px;
    }
    input {
      width: 0;
      height: 0;
      overflow: hidden;
      visibility: hidden;
    }
    svg {
      @media ${({ theme }) => theme.mediaQueries.atLeastTablet} {
        transform: scale(0.64);
      }
    }
  }
`;

const ProfileImage = ({ profileImageUrl }) => {
  return (
    <Box className="avatar">
      <h4>~Your Photo</h4>
      <label>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="78">
          <g data-name="Grupo 1028">
            <g data-name="Grupo 776">
              <path
                data-name="Trazado 1061"
                d="M20 27.418a13.709 13.709 0 1 1 13.709-13.709A13.736 13.736 0 0 1 20 27.418zm0-17.484a3.775 3.775 0 1 0 3.775 3.775A3.773 3.773 0 0 0 20 9.934z"
                fill="#fff"
              />
            </g>
            <g data-name="Grupo 777">
              <path
                data-name="Trazado 1062"
                d="M40 78.212h-9.933V52.649a10.066 10.066 0 0 0-20.133 0v25.63H0v-25.63a20 20 0 0 1 40 0z"
                fill="#fff"
              />
            </g>
          </g>
        </svg>
        {/* <input type="file" /> */}
        <Input name="profileImageUrl" type="hidden" defaultValue={profileImageUrl} />
      </label>
    </Box>
  );
};

ProfileImage.propTypes = {
  profileImageUrl: PropTypes.string,
};

ProfileImage.defaultProps = {
  profileImageUrl: '',
};

export default ProfileImage;
