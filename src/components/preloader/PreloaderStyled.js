import styled from 'styled-components';

const PreloaderStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100vw;
  height: 100vh;

  background-color: rgba(0, 0, 0, 0.8);
  pointer-events: initial;

  .preloadr_title {
    position: absolute;
    top: 40%;
    left: 50%;
    text-align: center;
    color: #0d5667;
    transform: translate(-50%, -60%);
  }
`;

export default PreloaderStyled;
