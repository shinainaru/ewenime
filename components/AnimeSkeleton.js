import ContentLoader from "react-content-loader"
import { useMediaQuery } from "react-responsive"

function AnimeSkeleton() {
  const isSm = useMediaQuery({ query: "(max-width: 640px)" })
  const isMd = useMediaQuery({ query: "(min-width: 768px)" })
  const isLg = useMediaQuery({ query: "(min-width: 1024px)" })

  const skeleton = []
  const mediaQuery = isLg || isSm ? 21 : 20

  for (let i = 0; i < mediaQuery; i++) {
    skeleton.push(
      <div
        key={`skeleton${i}`}
        className="overflow-hidden rounded-xl bg-slate-800 "
      >
        <ContentLoader
          speed={1}
          width={225}
          height={isMd ? 240 : 190}
          backgroundColor="#1e293b"
          foregroundColor="#334155"
          style={{ width: "100%" }}
        >
          <rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
        </ContentLoader>
      </div>
    )
  }

  return (
    <div className="max-w-full">
      <div className="mt-2 grid w-full grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5 md:gap-3 lg:grid-cols-7">
        {skeleton}
      </div>
    </div>
  )
}

export default AnimeSkeleton
