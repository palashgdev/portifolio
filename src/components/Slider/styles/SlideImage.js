import styled from '@emotion/styled';

const SlideImage = styled.img`
  height: 110%;
  left: -5%;

  object-fit: cover;
  opacity: 0;

  pointer-events: none;
  position: absolute;
  top: -5%;

  transition: opacity 600ms cubic-bezier(0.25, 0.46, 0.45, 0.84);

  user-select: none;
  width: 110%;

  filter: ${({ theme }) => {
    const { darkMode } = theme;
    const { getDarkMode } = darkMode;
    if (getDarkMode) {
      return `grayscale(0.35)`;
    }
    return `grayscale(0)`;
  }};

  @media (hover: hover) {
    transform: scale(1.025) translate(calc(var(--x) / var(--d) * 1px), calc(var(--y) / var(--d) * 1px));
  }
`;

export default SlideImage;
