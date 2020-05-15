import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Font from 'ui/Font';
import get from 'lodash/get';
import { useTranslations } from 'ui/Translations';
import sections from './sections';
import makeScrollToSection from './makeScrollToSection';

const Box = styled.nav`
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  @media ${({ theme }) => theme.mediaQueries.atLeastTablet} {
    right: 0px;
  }
  button {
    align-items: center;
    background: none;
    border: none;
    display: flex;
    justify-content: flex-end;
    line-height: 56px;
    outline: none;
    padding: 0;
    position: relative;
    text-align: right;
    :after {
      content: '';
      background-color: ${({ theme }) => theme.colors.secondary};
      display: block;
      height: 24px;
      margin-left: 40px;
      transition: background 0.6s ease;
      width: 24px;
      will-change: background;
      @media ${({ theme }) => theme.mediaQueries.atLeastLaptop} {
        border-radius: 8px;
        height: 8px;
        width: 8px;
        margin: 8px;
      }
    }
    &.active {
      :after {
        background-color: ${({ theme }) => theme.colors.primary};
      }
    }
    @media ${({ theme }) => theme.mediaQueries.atLeastLaptop} {
      span {
        display: none;
      }
    }
  }
`;

function findActive(acc, item) {
  return item.intersectionRatio > acc.intersectionRatio ? item : acc;
}

const Nav = () => {
  const translations = useTranslations();
  const [activeEntry, setActiveEntry] = useState(null);
  const [scrollY, setScrollY] = useState(null);
  function observe(entries) {
    const entry = entries.reduce(findActive, { intersectionRatio: 0 });
    setActiveEntry(entry);
  }
  function handleScroll() {
    setScrollY(window.scrollY);
  }
  const activeId = get(activeEntry, 'target.id');
  useEffect(() => {
    const observer = new IntersectionObserver(observe);
    sections(translations).forEach(({ id }) => {
      const node = document.getElementById(id);
      observer.observe(node);
    });
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeId, scrollY]);
  return (
    <Box>
      {sections(translations).map(({ id, name }) => (
        <Font
          className={activeId === id ? 'active' : undefined}
          element="button"
          key={id}
          onClick={makeScrollToSection(id)}
          type="button"
        >
          <span>{name}</span>
        </Font>
      ))}
    </Box>
  );
};

export default Nav;
