import React from 'react';
import { useTranslations } from 'ui/Translations';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Font from 'ui/Font';
import Button from 'ui/Button';

const Box = styled(Font)`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: 16px;
  justify-content: center;
  min-height: 100vh;
  padding: 40px;
  @media ${({ theme }) => theme.mediaQueries.atLeastTablet} {
    padding: 24px;
  }
  .content {
    width: 800px;
    @media ${({ theme }) => theme.mediaQueries.atLeastTablet} {
      width: 100%;
    }
  }
  .form {
    @media ${({ theme }) => theme.mediaQueries.atMostLaptop} {
      min-height: 320px;
    }
  }
  h2 {
    text-transform: uppercase;
    font-size: 104px;
    line-height: 104px;
    margin: 0;
    margin-left: -0.74em;
    margin-bottom: -42px;
    color: ${({ theme }) => theme.colors.secondary};
    @media ${({ theme }) => theme.mediaQueries.atLeastTablet} {
      display: none;
    }
  }
  h3 {
    font-size: 32px;
    line-height: 32px;
    margin: 0;
    margin-bottom: 40px;
  }
  .submit {
    text-align: right;
    button + button {
      margin-left: 8px;
    }
    button:disabled {
      opacity: 0.5;
    }
    @media ${({ theme }) => theme.mediaQueries.atLeastPhone} {
      text-align: center;
    }
  }
`;

const Section = ({ id, busy, children, first, formID, last, name, scrollBack }) => {
  const { sectionNext, sectionPrev, sectionSubmit, applicationHeader } = useTranslations();

  return (
    <Box element="section" id={id}>
      <div className="content">
        <h2>{applicationHeader}</h2>
        <h3>{name}</h3>
        <div className="form">{children}</div>
        <div className="submit">
          {!first && (
            <Button bgColor="secondary" variant="large" onClick={scrollBack}>
              {sectionPrev}
            </Button>
          )}
          <Button bgColor="primary" variant="large" type="submit" form={formID} disabled={busy}>
            {last ? sectionSubmit : sectionNext}
          </Button>
        </div>
      </div>
    </Box>
  );
};

Section.propTypes = {
  busy: PropTypes.bool,
  children: PropTypes.node.isRequired,
  formID: PropTypes.string,
  first: PropTypes.bool,
  id: PropTypes.string.isRequired,
  last: PropTypes.bool,
};

Section.defaultProps = {
  busy: false,
  formID: undefined,
  first: false,
  last: false,
};

export default Section;
