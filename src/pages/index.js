import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <h1>Hello World!</h1>
    <p>My name is Trevor and I am cuurently enrolled in a coding bootcamp called Bloc. I am new to coding but I love what I am learning</p>
    <p>I would love to go to the Hackathon on November 3rd</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
