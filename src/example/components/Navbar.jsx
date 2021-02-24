import { Layout } from 'antd'
import { H1 } from 'fragments/Typography'
import styled from 'styled-components'

const { Header } = Layout

const FluidNavbarContainer = styled.div`
  width: 80%;
  background: #5cb6c1;
  margin: auto;
  background: linear-gradient(0deg, #5cb6c1 0%, #06f0ed 100%);
`

const NavigationBar = styled(Header)`
  background-color: transparent;
  height: 100%;
  width: 70%;
  margin: auto;
  font-family: 'Nunito';
  color: #292929;
  font-weight: 400;
  font-style: normal;
  .inline-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

function Navbar() {
  return (
    <FluidNavbarContainer>
      <NavigationBar>
        <div className="inline-wrap">
          <H1>TjimenQ App</H1>
          <H1>TjimenQ App</H1>
          <H1>TjimenQ App</H1>
          <H1>TjimenQ App</H1>
          <H1>TjimenQ App</H1>
          <H1>TjimenQ App</H1>
        </div>
      </NavigationBar>
    </FluidNavbarContainer>
  )
}

export default Navbar
