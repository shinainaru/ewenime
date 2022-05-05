import Image from "next/image"
import { useMediaQuery } from "react-responsive"
import { useState } from "react"
import AnimeInfo from "./AnimeInfo"

function AnimeSection({ anime }) {
  const isMd = useMediaQuery({ query: "(min-width: 768px)" })
  const [info, setInfo] = useState(false)
  const [src, setSrc] = useState(anime.trailer.images.maximum_image_url)

  return (
    <>
      {info && <AnimeInfo anime={anime} setInfo={setInfo} />}
      <div className="bg-slate-900">
        <div className="relative overflow-hidden rounded-t-xl">
          <Image
            src={
              !anime.trailer.images.maximum_image_url ? "/images/bg.png" : src
            }
            width={1280}
            height={isMd ? 480 : 720}
            alt="banner"
            layout="responsive"
            objectFit="cover"
            priority={true}
            onError={() => setSrc("/images/bg.png")}
          />
          <div className="absolute bottom-0 h-52 w-full bg-gradient-to-t from-slate-900"></div>
        </div>
        <div className="lg:flex">
          <div className="relative h-32 lg:w-48">
            <div className="absolute right-0 left-0 -top-14 m-auto w-28 overflow-hidden rounded-lg lg:right-auto lg:left-6 lg:-top-32 lg:w-40">
              <Image
                src={anime.images.jpg.image_url}
                alt="Cover"
                width={225}
                height={320}
                layout="responsive"
                objectFit="cover"
              />
            </div>
            <div
              className={`${
                !anime.score ? "hidden" : ""
              } absolute -bottom-1 right-0 left-0 flex items-center justify-center gap-2`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 fill-yellow-400 lg:h-6 lg:w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <p className="lg:text-lg">{anime.score}</p>
            </div>
          </div>
          <div className="lg:flex lg:flex-col lg:justify-end lg:p-4 lg:pb-7">
            <h1 className="text-center text-2xl font-bold lg:text-left lg:text-3xl">
              {anime.title}
            </h1>
            <div className="mt-2 flex justify-center gap-2 lg:justify-start">
              <a
                href={anime.trailer.url}
                target="_blank"
                rel="noreferrer"
                className={!anime.trailer.url ? "hidden" : ""}
              >
                <button className="cursor-pointer rounded-lg bg-rose-700 p-2 hover:bg-rose-800 hover:text-slate-400">
                  Watch Trailer
                </button>
              </a>
              <button
                onClick={() => setInfo(true)}
                className="cursor-pointer rounded-lg bg-indigo-700 p-2 hover:bg-indigo-800 hover:text-slate-400"
              >
                More Information
              </button>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <p>{anime.synopsis}</p>
        </div>
      </div>
    </>
  )
}

export default AnimeSection
