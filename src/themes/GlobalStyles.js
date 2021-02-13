import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
    background: ${props => props.theme.colors.primaryBackground}; 
    color :${props => props.theme.colors.primaryText};
    
}

input {
  background-color: ${props => props.theme.colors.inputBackground};
  border: 1px solid #7c8182;
  color: ${props => props.theme.colors.primaryText};
}

.pageTitle {
  margin-bottom: 30px;
  text-align: center;
  color: ${props => props.theme.colors.accentText};
}
/*=============== Переключатель темы ===========*/
.switch {
  position: fixed;
  top: 80px;
  right: 60px;
  display: inline-block;
}


.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-transition: .4s;
  transition: .4s;

  width: 42px;
  height: 24px;
  border-radius: 24px;
  border: 3px solid #d1d5da;
  background-color: #fff;
}

.round {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  top: -2px;
  left: -2px;
  width: 28px;
  height: 28px;
  background-color: #2f363d;
  transition: transform .3s cubic-bezier(.4,.03,0,1);
  cursor: pointer;

    & svg {
      fill: #ffdf5d;
      
      transform: rotate(45deg);

    }
}

input:checked + .slider {
 border: 3px solid #3c1e70;
 background-color: #271052;
}

input:checked ~ .round{
  transform: translateX(18px);
  background-color: #6e40c9;
  & svg {
    fill: #f8e3a1;
  }
}
${'' /*==========================*/}
`;

export default GlobalStyle;
