import styled from '@emotion/styled';

const CheckBox = styled.div`
  display: none;

  input[type='checkbox'] {
    -webkit-appearance: none;
    appearance: none;
    visibility: hidden;
    display: none;
  }

  .check {
    position: relative;
    display: block;
    width: 60px;
    height: 25px;
    background-color: rgb(50, 44, 91);
    cursor: pointer;
    border-radius: 20px;
    overflow: hidden;
    transition: ease-in 0.5s;
  }

  input:checked[type='checkbox'] ~ .check {
    background-color: #fff;
  }

  .check::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 4px;
    background-color: #fff;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    transition: all 0.5s;
  }

  input:checked[type='checkbox'] ~ .check::before {
    transform: translateX(-50px);
  }

  .check::after {
    content: '';
    position: absolute;
    top: 2px;
    right: 4px;
    background-color: rgb(50, 44, 91);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    transform: translateX(50px);
    transition: all 0.5s;
  }

  input:checked[type='checkbox'] ~ .check::after {
    transform: translateX(0px);
  }

  @media screen and (min-width: 50rem) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`;

export default CheckBox;
