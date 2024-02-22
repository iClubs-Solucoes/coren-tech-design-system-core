import styled from 'styled-components';

const defaultStyled = typeof styled === 'function' ? styled : styled.default;

export { defaultStyled as default };

export * from 'styled-components';
