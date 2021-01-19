import styled from 'styled-components'

/* eslint-disable import/prefer-default-export */

const H1 = styled.h1`
  font-family: 'Nunito';
  font-weight: 800;
  font-size: 1.5rem;
  color: #fff;
`

const LinkText = styled.a`
  color: #292929;
  transition: margin-top .5s, color .25s;
  &:hover {
    margin-top: 14px;
    color: cyan;
  }
`

export {
  H1,
  LinkText,
}
