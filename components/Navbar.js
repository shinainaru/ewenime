import Link from "next/link"
import { useRouter } from "next/router"
import { useContext, useState, useEffect } from "react"
import { AppContext } from "../context/app-context"
import { searchAnime } from "../functions/fetchApi"

function Navbar() {
  const router = useRouter()
  const context = useContext(AppContext)
  const [keyword, setKeyword] = useState("")
  const routerQuery = router.query.q

  const anime = async (query) => {
    if (!query) return

    const response = await searchAnime(query)
    context.setData(response.data)
    context.setLoading(false)
  }

  useEffect(() => {
    if (!routerQuery) return
    anime(routerQuery)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [routerQuery])

  return (
    <div className="sticky top-0 z-10 bg-slate-900/90 backdrop-blur-xl">
      <nav className="flex max-w-7xl p-4 py-4  text-white sm:gap-2  sm:py-6 xl:m-auto">
        <ul className="flex flex-1 gap-1 ">
          <li
            className={`nav-li ${
              router.pathname === "/" ? "border-b-2 border-rose-700" : ""
            }`}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={`nav-li ${
              router.pathname === "/top-anime" ? "border-rose-700" : ""
            }`}
          >
            <Link href="/top-anime">Top Anime</Link>
          </li>
        </ul>
        <form
          className="flex flex-1 flex-col justify-center"
          onSubmit={(e) => {
            e.preventDefault()
            context.setLoading(true)
            anime(keyword)
            setKeyword("")
            router.push(`/search?q=${keyword}`)
          }}
        >
          <input
            type="text"
            className="h-full w-36 self-end rounded-md bg-slate-900 px-2 outline-none outline-offset-0 outline-rose-900 focus:outline-rose-700 sm:h-8 sm:w-52"
            placeholder="Search anime..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </form>
      </nav>
    </div>
  )
}

export default Navbar
