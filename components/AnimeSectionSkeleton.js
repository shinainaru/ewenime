import ContentLoader from "react-content-loader"
import { useMediaQuery } from "react-responsive"

function AnimeSectionSkeleton() {
  const isLg = useMediaQuery({ query: "(min-width: 1024px)" })

  return (
    <div className="bg-slate-900">
      <div className="relative overflow-hidden rounded-t-xl">
        <ContentLoader
          speed={1}
          width={1280}
          height={isLg ? 480 : 208}
          backgroundColor="#1e293b"
          foregroundColor="#334155"
        >
          <rect
            x="0"
            y="0"
            rx="12"
            ry="12"
            width="1280"
            height={isLg ? "480" : "208"}
          />
        </ContentLoader>
        <div className="absolute bottom-0 h-52 w-full bg-gradient-to-t from-slate-900"></div>
      </div>
      <div className="lg:flex">
        <div className="relative h-32 lg:w-48">
          <div className="absolute right-0 left-0 -top-14 m-auto w-28 overflow-hidden rounded-lg lg:right-auto lg:left-6 lg:-top-32 lg:w-40">
            <ContentLoader
              speed={1}
              width={225}
              height={isLg ? 226 : 160}
              backgroundColor="#1e293b"
              foregroundColor="#334155"
            >
              <rect
                x="0"
                y="0"
                rx="12"
                ry="12"
                width="225"
                height={isLg ? "226" : "160"}
              />
            </ContentLoader>
          </div>
        </div>
        <div className="mt-2 text-center lg:flex lg:flex-col lg:justify-end lg:p-4 lg:pb-7">
          <ContentLoader
            speed={1}
            width={200}
            height={24}
            backgroundColor="#1e293b"
            foregroundColor="#334155"
            style={{ display: "block", margin: "0 auto" }}
          >
            <rect x="0" y="0" rx="5" ry="5" width="200" height="24" />
          </ContentLoader>
          <div className="mt-2 flex items-center justify-center gap-2 lg:justify-start">
            <ContentLoader
              speed={1}
              width={50}
              height={24}
              backgroundColor="#1e293b"
              foregroundColor="#334155"
            >
              <rect x="0" y="0" rx="5" ry="5" width="50" height="24" />
            </ContentLoader>
            <ContentLoader
              speed={1}
              width={50}
              height={24}
              backgroundColor="#1e293b"
              foregroundColor="#334155"
            >
              <rect x="0" y="0" rx="5" ry="5" width="50" height="24" />
            </ContentLoader>
          </div>
        </div>
      </div>
      <div className="mt-6">
        <ContentLoader
          speed={1}
          width={200}
          height={200}
          backgroundColor="#1e293b"
          foregroundColor="#334155"
          style={{ width: "100%" }}
        >
          <rect x="0" y="0" rx="5" ry="5" width="100%" height="14" />
          <rect x="0" y="20" rx="5" ry="5" width="100%" height="14" />
          <rect x="0" y="40" rx="5" ry="5" width="100%" height="14" />
          <rect x="0" y="60" rx="5" ry="5" width="100%" height="14" />
          <rect x="0" y="80" rx="5" ry="5" width="100%" height="14" />
          <rect x="0" y="100" rx="5" ry="5" width="100%" height="14" />
          <rect x="0" y="120" rx="5" ry="5" width="100%" height="14" />
          <rect x="0" y="140" rx="5" ry="5" width="100%" height="14" />
          <rect x="0" y="160" rx="5" ry="5" width="100%" height="14" />
          <rect x="0" y="180" rx="5" ry="5" width="100%" height="14" />
          <rect x="0" y="200" rx="5" ry="5" width="100%" height="14" />
        </ContentLoader>
      </div>
    </div>
  )
}

export default AnimeSectionSkeleton
