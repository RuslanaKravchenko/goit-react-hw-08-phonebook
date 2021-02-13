import styled from 'styled-components';
const FilterFild = styled.div`
  margin-bottom: 20px;
  .filter_input {
    display: block;
    margin: 0 auto;
    padding: 5px 20px;
    height: 40px;
    width: 100%;
    max-width: 400px;
    border-radius: 10px;
    border-color: ${props =>
      props.theme.title === 'dark' ? '#c97ddf' : '#7c8182'};

    outline: none;
    &:focus,
    &:hover {
      border-color: #c97ddf;
      box-shadow: ${props =>
        props.theme.title === 'dark'
          ? '4px 4px 24px 15px rgba(93, 42, 165, 0.27)'
          : '5px 5px 8px -4px rgba(117, 52, 210, 0.33)'};
    }
  }
`;
export default FilterFild;
