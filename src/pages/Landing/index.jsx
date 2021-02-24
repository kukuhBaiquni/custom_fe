import styled from 'styled-components'

const Wrapper = styled.div`
  background: #5cb6c1;
  background: linear-gradient(0deg, #5cb6c1 0%, #06f0ed 100%);
  height: 100%;
  width: 100%;
  position: fixed;
`

function Landing() {
  return (
    <Wrapper>
      Landing
    </Wrapper>
  )
}

export default Landing
