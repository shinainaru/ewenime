import Head from "next/head"
import NotFound from "../components/NotFound"

function Custom404() {
  return (
    <>
      <Head>
        <title>404 Not Found</title>
      </Head>
      <NotFound />
    </>
  )
}

export default Custom404
