import { Fragment } from 'react'
import Navbar from 'components/Navbar'
import { Button } from 'antd'

function Home() {
  return (
    <Fragment>
      <Navbar />
      <div>THIS IS HOME</div>
      <Button type="primary">Submit</Button>
    </Fragment>
  )
}

export default Home
