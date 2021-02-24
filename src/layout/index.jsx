import styled from 'styled-components'

const AppContainer = styled.div`
  width: 80%;
  margin: auto;
  background-color: pink;
  opacity: 0.2;
`

function Layout({ children }) {
  return (
    <AppContainer>
      {children}
    </AppContainer>
  )
}

export default Layout
