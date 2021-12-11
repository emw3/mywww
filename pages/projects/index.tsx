import type { NextPage } from "next"
import cn from 'classnames'

import Head from "next/head"
import Container from "../../components/container"
import Layout from "../../components/layout"
import UnderConstruction from "../../components/under-construction"
import { WEBSITE_TITLE } from "../../lib/constants"

const Projects: NextPage = () => {
  return (
    <>
      <Layout>
        <Head>
          <title>Projects - {WEBSITE_TITLE}</title>
        </Head>
        <Container>
          <div className={cn('py-16 flex')}>
            <UnderConstruction />
          </div>
        </Container>
      </Layout>
    </>
  )
}

export default Projects
