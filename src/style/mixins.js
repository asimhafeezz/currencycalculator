import {css} from 'styled-components';
import theme from './theme';

const { colors } = theme

const mixins = {
  centerScreen: css`
    justify-content: center;
    background-color: ${colors.bg};
    color: ${colors.text};
    align-items: center;
    width: 100%;
    height: 100%;
  `,
};

export default mixins;
