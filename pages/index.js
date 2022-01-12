import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import Home from '../components/Home'


export default function home() {
  return (
   <Layout>
    <Home />
   </Layout>
   
  )
}

// .map((topping) => topping).join(', ')