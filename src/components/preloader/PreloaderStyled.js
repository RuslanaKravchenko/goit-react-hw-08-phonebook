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
    font-size: 40px;
    color: #7915c5;
    transform: translate(-50%, -60%);
  }

  @media (min-width: 768px) {
    font-size: 60px;
  }

  .preloadr_title-appear {
    opacity: 0;
  }

  .preloadr_title-appear-active {
    opacity: 1;

    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export default PreloaderStyled;
