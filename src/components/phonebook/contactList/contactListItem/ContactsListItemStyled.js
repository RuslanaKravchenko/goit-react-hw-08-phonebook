import styled from 'styled-components';
import randomRGB from '../../../../utils/randomRGB';

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 5px 5px 10px;
  border: 1px solid grey;
  border-radius: 10px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:not(:last-child) {
    margin-bottom: 15px;
  }

  &:hover {
    background-color: #f8f4fa;
    border: 1px solid #a75ee1;
    box-shadow: 5px 5px 11px 2px rgba(143, 108, 193, 0.45);
  }

  .listItem_meta {
    display: flex;
    align-items: center;
    flex-grow: 1;
    cursor: pointer;

    @media (min-width: 768px) {
      position: relative;
    }

    &-info {
      margin-left: 15px;
    }
  }
  .listItem_name {
    display: flex;
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 3px;
    @media (min-width: 768px) {
      font-size: 18px;
    }
  }

  .listItem_number {
    font-size: 12px;
    color: #4b4e4f;

    @media (min-width: 768px) {
      font-size: 14px;
    }
  }

  .listItem_category {
    padding: 3px 7px;
    width: max-content;
    font-size: 10px;
    color: #083e2d;
    border: 1px solid #19b785;
    border-radius: 15px;
    @media (max-width: 767px) {
      margin-top: 3px;
    }

    @media (min-width: 768px) {
      position: absolute;
      top: 50%;
      right: 10px;
      font-size: 12px;
      transform: translate(0, -50%);
    }
  }

  .listItem_btns-container {
    display: flex;
  }
  .listItem_btn {
    width: 40px;
    height: 40px;
    border: none;
    outline: none;
    cursor: pointer;
    background-color: transparent;

    &:focus .listItem_icon,
    &:hover .listItem_icon {
      fill: #0b858b;
    }
  }
  .listItem_icon {
    fill: #7c8181;
  }

  .avatar_span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    font-size: 26px;
    font-weight: 700;
    background-color: ${randomRGB};
    border-radius: 50%;
  }

  .avatar_container {
    width: 50px;
    height: 50px;
    overflow: hidden;
    border-radius: 50%;
  }

  .avatar_img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export default ListItem;
