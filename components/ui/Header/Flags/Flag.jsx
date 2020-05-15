import React from 'react';
import Svg from 'ui/Svg';
import PropTypes from 'prop-types';

const flags = {
  en: (
    <>
      <path
        d="M503.172 335.449H8.828A8.829 8.829 0 0 1 0 326.624V8.824A8.829 8.829 0 0 1 8.828-.004h494.345A8.829 8.829 0 0 1 512 8.824v317.8a8.83 8.83 0 0 1-8.828 8.825z"
        fill="#41479b"
      />
      <path
        d="M512 8.824a8.829 8.829 0 0 0-8.828-8.828h-39.495l-163.54 107.151V0h-88.276v107.147L48.322 0H8.828A8.829 8.829 0 0 0 0 8.824v22.831l140.309 91.927H0v88.276h140.309L0 303.79v22.834a8.829 8.829 0 0 0 8.828 8.828h39.495l163.54-107.147v107.144h88.276V228.302l163.54 107.147h39.495a8.829 8.829 0 0 0 8.826-8.825V303.79l-140.307-91.927H512v-88.276H371.691L512 31.659z"
        fill="#f5f5f5"
      />
      <g data-name="Grupo 1657" fill="#ff4b55">
        <path d="M512 141.242H282.483V0h-52.966v141.242H0v52.965h229.517v141.242h52.966V194.207H512z" />
        <path d="M178.948 211.862l-178.7 116a8.718 8.718 0 0 0 8.577 7.59h12.161l190.39-123.586h-32.428z" />
        <path d="M346.388 211.862H313.96l190.113 123.4a8.742 8.742 0 0 0 7.927-8.638v-7.258z" />
        <path d="M0 18.573l161.779 105.014h32.428L5.143.861A8.792 8.792 0 0 0 0 8.824z" />
        <path d="M332.566 123.587L511.693 7.31a8.708 8.708 0 0 0-8.521-7.309h-12.647L300.138 123.587z" />
      </g>
    </>
  ),
  de: (
    <>
      <path
        d="M512 111.817H0V8.824A8.829 8.829 0 0 1 8.828-.004h494.345A8.829 8.829 0 0 1 512 8.824v102.993z"
        fill="#464655"
      />
      <path
        d="M503.172 335.449H8.828A8.829 8.829 0 0 1 0 326.624V223.633h512v102.991a8.828 8.828 0 0 1-8.828 8.825z"
        fill="#ffe15a"
      />
      <path fill="#ff4b55" d="M0 111.815h512v111.81H0z" />
    </>
  ),
  es: (
    <>
      <rect width="750" height="300" fill="#c60b1e" />
      <rect width="750" height="150" fill="#ffc400" y="75" />
    </>
  ),
};

const Flag = ({ language, width, ...props }) => {
  const ratio = 335 / 512;
  const height = width * ratio;
  return flags[language] ? (
    <Svg {...props} height={height} width={width} viewBox="0 0 512 335">
      {flags[language]}
    </Svg>
  ) : null;
};

Flag.propTypes = {
  language: PropTypes.string.isRequired,
  width: PropTypes.number,
};
Flag.defaultProps = {
  width: 32,
};

export default Flag;
