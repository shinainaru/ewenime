import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import AnimeSection from "../../components/AnimeSection"
import AnimeSectionSkeleton from "../../components/AnimeSectionSkeleton"
import NotFound from "../../components/NotFound"
import { getAnime } from "../../functions/fetchApi"

function AnimeDetail() {
  const [anime, setAnime] = useState([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const fetchAnime = async (mal_id) => {
      const response = await getAnime(mal_id)
      setAnime(response)
      setLoading(false)
    }

    fetchAnime(router.query.mal_id)
  }, [router.query.mal_id])

  return (
    <>
      {loading || !anime ? (
        <>
          <Head>
            <title>Yuuyake: Loading...</title>
          </Head>
          <AnimeSectionSkeleton />
        </>
      ) : anime.err ? (
        <NotFound />
      ) : (
        <>
          <Head>
            <title>{anime?.data?.title}</title>
            <meta name="description" content={anime.data.synopsis} />
          </Head>
          <AnimeSection anime={anime.data} />
        </>
      )}
    </>
  )
}

export default AnimeDetail
