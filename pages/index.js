import React from 'react'
import { withRouter } from 'next/router'

import Head from '../components/meta/Head.jsx'
import Layout from '../components/other/Layout'
import Content from '../components/main/Content'

const pageWithCards = withRouter(() => (
  <div className="generalPage">
    <Head title='Відомі особистості Вінниччини' />
    <Layout>
      <Content topic='peoples'/>
    </Layout>
  </div>
))

export default pageWithCards
