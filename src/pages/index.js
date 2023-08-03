// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import {StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const _TitlePage = "HomePage"
// Step 2: Define your component
const IndexPage = () => {
  
  return (
    <Layout pageTitle={_TitlePage}>     
      <p>base finished tutorial on gatsby site</p>
      <p>the mdx and gatsby version 5 and up</p>
      <a href='https://www.gatsbyjs.com/docs/tutorial/getting-started/'>link to gatsby tutorial</a>
      <p>images from unsplash </p>
      <a href='https://unsplash.com/'>Link to images</a>
      <StaticImage  alt="Most incredible beaches in the Maldives"
      src="https://images.unsplash.com/flagged/photo-1557899775-24a0957d3895?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80"></StaticImage >
      <StaticImage src="../images/jono-hirst-9Vnxo0cCR3Q-unsplash.jpg"></StaticImage>
    </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title={_TitlePage} />

// Step 3: Export your component
export default IndexPage