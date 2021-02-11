import React, { useState } from 'react';
import sprite from '../../assets/symbol-defs.svg';
import HomeViewStyled from './HomeViewStyled';

const initialState = {
  number: '',
};

const buttons = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'];

const HomeView = () => {
  const [state, setState] = useState({ ...initialState });

  const onHandleChange = e => {
    const { name, value } = e.target;
    setState(prev => ({ ...prev, [name]: value }));
  };

  const onHandleClick = e => {
    const value = e.target.name;
    setState(prev => ({ ...prev, number: prev.number + value }));
  };

  const onHandleBackspace = () => {
    setState(prev => ({
      ...prev,
      number: prev.number.slice(0, prev.number.length - 1),
    }));
  };

  return (
    <HomeViewStyled>
      <h1 className="pageTitle">Phonebook</h1>
      <div>
        <label className="home_fild">
          <span className="home_text">Number: </span>
          <input
            className="home_input"
            type="tel"
            name="number"
            value={state.number}
            onChange={onHandleChange}
          ></input>
          <button
            onClick={onHandleBackspace}
            className="backspace_btn"
            type="button"
          >
            <svg className="backspace_icon" width="24px" height="24px">
              <use href={sprite + '#backspace'} />
            </svg>
          </button>
        </label>
        <ul className="keyboard list">
          {buttons.map(button => (
            <li className="keyboard_item" key={button}>
              {button !== '*' ? (
                <button
                  className="keyboard_btn"
                  onClick={onHandleClick}
                  type="button"
                  name={button}
                >
                  {button}
                </button>
              ) : (
                <button
                  className="keyboard_btn keyboard_btn--star"
                  onClick={onHandleClick}
                  type="button"
                  name={button}
                >
                  {button}
                </button>
              )}
            </li>
          ))}
        </ul>

        <a className="call_btn " href={`tel:${state.number}`}>
          <svg width="30px" height="30px">
            <use href={sprite + '#call'} />
          </svg>
        </a>
      </div>
    </HomeViewStyled>
  );
};

export default HomeView;
