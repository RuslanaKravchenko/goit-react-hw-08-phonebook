import styled from 'styled-components';
const NoticeWrapper = styled.div`
  z-index: 2000;
  padding: 20px;
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: #ffff78fa;
  color: #24292e;
  width: 280px;
  min-height: 60px;
  border-radius: 5px;
  .text {
    font-size: 16px;
  }
`;
export default NoticeWrapper;
