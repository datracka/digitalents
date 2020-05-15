/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import Font from 'ui/Font';
import media from 'ui/media';
import { useTranslations } from 'ui/Translations';

const formCss = media({
  flexBasis: '34%',
  marginBottom: '24px',
  phone: {
    textAlign: 'center',
  },
});

const fieldsetCss = css`
  border: 0;
  display: flex;
  margin: 0;
  margin-top: 8px;
  padding: 0;
  white-space: nowrap;
`;

const inputCss = theme => css`
  border: 0;
  border-radius: 3px 0px 0px 3px;
  color: ${theme.colors.primary};
  font-family: Cabin, sans-serif;
  font-size: 16px;
  flex: 1;
  margin: 0;
  padding: 0 16px;
  height: 40px;
  vertical-align: top;
  width: 100%;
`;

const buttonCss = theme => css`
  background: ${theme.colors.primary};
  border: 0;
  border-radius: 0px 3px 3px 0px;
  color: ${theme.colors.white};
  font-size: 12px;
  height: 40px;
  letter-spacing: 0.01em;
  margin: 0;
  padding: 0 16px;
  text-transform: uppercase;
  width: 9em;
`;

const SubscriptionForm = () => {
  const { newsletter, subscribe, emailAddress } = useTranslations();
  return (
    <form css={formCss}>
      <Font variant="caption">{newsletter}</Font>
      <div css={fieldsetCss}>
        <input css={inputCss} label={emailAddress} type="text" />
        <button css={buttonCss} type="submit">
          {subscribe}
        </button>
      </div>
    </form>
  );
};

export default SubscriptionForm;
