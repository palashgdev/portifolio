import styled from '@emotion/styled';

const ListItem = styled.li`
  list-style-type: none;
  text-align: center;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  cursor: pointer;

  ::before {
    content: counter(step);
    counter-increment: step;

    width: 30px;
    height: 30px;

    border: ${({ theme }) => {
      const { darkMode } = theme;
      const { getDarkMode } = darkMode;
      if (getDarkMode) {
        return '1px solid white';
      }
      return '1px solid black';
    }};

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    background-color: ${({ theme }) => {
      const { darkMode, darkColors } = theme;
      const { background } = darkColors;
      const { getDarkMode } = darkMode;
      if (getDarkMode) {
        return background.primary.normal;
      }
      return 'white';
    }};
    z-index: 2;

    margin-bottom: 10px;
  }

  ::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1px;
    background-color: grey;
    top: 25%;
    left: 50%;
  }

  :hover::before {
    background-color: green;
    color: white;
  }
`;

export default ListItem;
