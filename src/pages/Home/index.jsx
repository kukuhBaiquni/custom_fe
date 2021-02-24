import { Fragment } from 'react'
import Navbar from 'example/components/Navbar'
import FormInput from 'example/fragments/input'
import { Button } from 'antd'

function Home() {
  return (
    <Fragment>
      <Navbar />
      <FormInput />
      <div>THIS IS HOME</div>
      <Button type="primary">Submit</Button>
    </Fragment>
  )
}

export default Home
