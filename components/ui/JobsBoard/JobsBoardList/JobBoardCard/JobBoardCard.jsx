/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/core';
import getConfig from 'next/config';
import styled from '@emotion/styled';
import Button from 'ui/Button';
import Font from 'ui/Font';
import RoundLogoGerlent from 'ui/RoundLogoGerlent';
import RoundLogoGlolent from 'ui/RoundLogoGlolent';
import * as C from 'layouts/constants';
import { useTranslations } from 'ui/Translations';

const { publicRuntimeConfig } = getConfig();

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }`;
const containerCss = ({ theme, index }) => css`
  display: flex;
  flex-direction: column;
  background-color: ${index % 2 === 0 ? theme.colors.primary : theme.colors.primaryDarker};
  align-items: baseline;
`;

const ContainerCard = styled('div')`
  ${containerCss};
  animation: ${fadeIn} 1s ease-in 1;
  padding: 1rem;
  margin: 1rem;
`;

const BoxCss = ({ theme }) => css`
  display: flex;
  width: '100%';
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  @media ${theme.mediaQueries.atLeastPhone} {
    align-items: center;
  }
`;

const Box = styled('div')`
  ${BoxCss}
`;

const subBoxCss = () => css`
  display: flex;
  flex-direction: column;
`;

const SubBox = styled.div`
  ${subBoxCss}
`;

const Tag = styled(Font)`
  ${({ theme }) => css`
    tex-transform: lowercase;
    color: ${theme.colors.primaryDarker};
    border-radius: 0;
    font-weight: 800;
    background-color: white;
    margin: 0.5rem;
    padding: 1rem;
    @media ${theme.mediaQueries.atLeastTablet} {
      display: inline-block;
    }
  `}
`;

const JobTitle = styled.div`
  ${({ theme, index }) => ({
    color: index % 2 === 0 ? theme.colors.primaryDarker : theme.colors.primary,
    fontWeight: '800',
    width: '100%',
    marginBottom: '1rem',
  })}
`;

const WrapperTags = styled.div`
  ${({ theme }) => css`
    margin-top: 2rem;
    margin-bottom: 2rem;
    width: 100%;
    @media ${theme.mediaQueries.atLeastPhone} {
      margin-top: 0;
      margin-bottom: 0;
      width: 100%;
    }
  `}
`;

const Task = styled.div`
  margin-bottom: 1rem;
  line-height: 2rem;
`;
const Qualification = styled.div`
  margin-bottom: 1rem;
  line-height: 2rem;
`;

const Anchor = styled('a')(
  () => css`
    display: block;
    width: 150px;
    > svg {
      transform: rotateZ(15deg);
    }
  `,
);

const Logo = publicRuntimeConfig.site === C.SITE_GLOLENT ? RoundLogoGlolent : RoundLogoGerlent;

export default ({
  index,
  hourRate,
  currencySymbol,
  startDate,
  headline,
  durationMinMonths,
  qualification,
  city,
  task,
}) => {
  const {
    january,
    february,
    march,
    april,
    may,
    june,
    july,
    august,
    september,
    october,
    november,
    december,
  } = useTranslations();
  const monthNames = [
    january,
    february,
    march,
    april,
    may,
    june,
    july,
    august,
    september,
    october,
    november,
    december,
  ];

  const getFullDateFormated = date =>
    `${date.getDate()} 
      ${monthNames[date.getMonth()]} 
      ${date.getFullYear()}`;

  /*  format for safari and ie  */
  const parsedStartDate = new Date(startDate.replace(/-/g, '/'));

  return (
    <ContainerCard index={index}>
      <JobTitle>
        <Font variant="bigPrimary">{headline}</Font>
      </JobTitle>
      <Box>
        <SubBox>
          <WrapperTags>
            {durationMinMonths && <Tag>{`${durationMinMonths} months`}</Tag>}
            {hourRate && <Tag>{`${currencySymbol}${hourRate}/h`}</Tag>}
            {city && <Tag>{city}</Tag>}
            {startDate && <Tag>{getFullDateFormated(parsedStartDate)}</Tag>}
          </WrapperTags>
          <Task>
            <Font variant="textWhite" component="div">
              {task}
            </Font>
          </Task>
          <Qualification>
            <Font variant="textWhite" component="div">
              {qualification}
            </Font>
          </Qualification>
        </SubBox>
        <SubBox
          css={theme => css`
            @media ${theme.mediaQueries.atLeastPhone} {
              display: none;
            }
          `}
        >
          <Anchor>
            <Logo blockLevel color="lightBlue" />
          </Anchor>
        </SubBox>
      </Box>
      <Box
        css={css`
          padding-bottom: 1rem;
        `}
      >
        <a
          href={publicRuntimeConfig.typeformContactForm}
          target="_blank"
          rel="noopener noreferrer"
          css={css`
            margin-left: auto;
          `}
        >
          <Button bgColor="primary" color="primaryDarker" variant="callToAction" type="button">
            More Info
          </Button>
        </a>
      </Box>
    </ContainerCard>
  );
};
