import Image from "next/image"
import Link from "next/link"

function Anime({ anime }) {
  return (
    <div className="max-w-full">
      <div className="mt-2 grid w-full grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-5 md:gap-3 lg:grid-cols-7">
        {anime.data.map((anm) => (
          <div
            key={anm.mal_id}
            className="group cursor-pointer overflow-hidden rounded-xl border-b-2 border-b-transparent bg-slate-800 hover:border-b-rose-700"
          >
            <Link href={`/anime/${anm.mal_id}`} passHref>
              <a>
                <Image
                  src={anm.images.jpg.image_url}
                  alt="Cover"
                  width={225}
                  height={320}
                  layout="responsive"
                  objectFit="cover"
                  className="transition duration-300 ease-in-out group-hover:scale-110"
                  priority={true}
                />
              </a>
            </Link>
            <Link href={`/anime/${anm.mal_id}`} passHref>
              <p className="truncate p-2">{anm.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Anime
