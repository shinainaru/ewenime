import Head from "next/head"
import TopAnime from "../../components/TopAnime"
import { getTopAnime } from "../../functions/fetchApi"

function TopAnimeList({ response }) {
  return (
    <>
      <Head>
        <title>Yuuyake: Top Anime</title>
        <meta name="description" content="Most rated anime" />
      </Head>
      <TopAnime anime={response} />
    </>
  )
}

export async function getStaticProps() {
  const response = await getTopAnime()
  return {
    props: { response },
    revalidate: 10,
  }
}

export default TopAnimeList
