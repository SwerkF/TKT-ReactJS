import React from 'react';
import styled, { keyframes } from 'styled-components';
import './Loader.scss'

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const LoaderWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeOut} 1s forwards;
  animation-delay: ${({ delay }) => delay}ms;
  z-index: 9999;
`;

const Loader = () => {

  // Afficher le composant Loader
  return (
    <LoaderWrapper delay={400}>
      <div className="loader"></div>
    </LoaderWrapper>
  );
};

export default Loader;