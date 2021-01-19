import { Layout } from 'antd'
import { H1 } from 'fragments/Typography'
import styled from 'styled-components'
import Autocomplete from './Autocomplete'

const { Header } = Layout

const FluidNavbarContainer = styled.div`
  width: 100%;
  background: rgb(107,193,92);
  background: linear-gradient(0deg, rgba(107,193,92,1) 0%, rgba(21,138,0,1) 100%);
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
  .link-inset {
    display: flex;
    align-items: center;
    justify-content: space-between;
    ul {
      display: flex;
      align-items: center;
      li {
        color: #ffffff;
        margin: 0 5px;
      }
    }
  }
  .inline-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      margin-bottom: 15px;
    }
    .group-util {
      width: 70%;
      position: relative;
      .ant-select-auto-complete {
        width: 100%;
      }
      .list-util {
        margin: 0;
        padding: 0;
        height: 30px;
        display: flex;
        align-items: center;
        span {
          margin: 0 6px;
          color: #ffffff;
          transition: color .5s;
          cursor: pointer;
          &:hover {
            color: #292929;
          }
        }
      }
    }
  }
`

function Navbar() {
  return (
    <FluidNavbarContainer>
      <NavigationBar>
        <div className="inline-wrap">
          <img src="https://elwiki.net/wiki/images/2/24/Title_300.png" alt="logo-example" />
          <div className="group-util">
            <Autocomplete />
            <div className="list-util">
              <span>Kucing Persia</span>
              <span>Anjing Tanah</span>
              <span>Ikan Hias Tempur</span>
              <span>Babon Jinak</span>
              <span>Komodo Joe</span>
              <span>Sperilium</span>
              <span>Blood Rain</span>
              <span>Less Miserable</span>
              <span>Cook Teemos</span>
            </div>
          </div>
          <H1>Another Sider</H1>
        </div>
      </NavigationBar>
    </FluidNavbarContainer>
  )
}

export default Navbar
