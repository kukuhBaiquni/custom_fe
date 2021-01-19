import { Layout, Menu } from 'antd'
import { H1 } from 'fragments/Typography'
import styled from 'styled-components'

const { Header } = Layout
const { Item } = Menu

const FluidNavbarContainer = styled.div`
  width: 100%;
  background-color: #4d2e9b;
`

const NavigationBar = styled(Header)`
  background-color: #713396;
  height: 100%;
  width: 70%;
  margin: auto;
`

function Navbar() {
  return (
    <FluidNavbarContainer>
      <NavigationBar>
        <H1>Logo Man</H1>
      </NavigationBar>
    </FluidNavbarContainer>
  )
}

export default Navbar
