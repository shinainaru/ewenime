import { useState } from "react"
import Layout from "../components/Layout"
import { AppContext } from "../context/app-context"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  return (
    <AppContext.Provider value={{ data, setData, loading, setLoading }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  )
}

export default MyApp
