function AnimeInfo({ anime, setInfo }) {
  return (
    <div className="fixed top-0 left-0 z-10 grid h-screen w-full place-content-center bg-slate-700/75 p-4">
      <div className="max-h-screen max-w-lg rounded-xl bg-slate-900 p-4">
        <ul className="max-h-full overflow-auto ">
          <li>
            <span className="span-info">Title: </span>
            {anime.title}
          </li>
          <li>
            <span className="span-info">English: </span>
            {anime.title_english}
          </li>
          <li>
            <span className="span-info">Japanese: </span>
            {anime.title_japanese}
          </li>
          <li>
            <span className="span-info">Type: </span>
            {anime.type}
          </li>
          <li>
            <span className="span-info">Source: </span>
            {anime.source}
          </li>
          <li>
            <span className="span-info">Episodes: </span>
            {anime.episodes}
          </li>
          <li>
            <span className="span-info">Status: </span>
            {anime.status}
          </li>
          <li>
            <span className="span-info">Aired: </span>
            {anime.aired.string}
          </li>
          <li>
            <span className="span-info">Duration: </span>
            {anime.duration}
          </li>
          <li>
            <span className="span-info">Rating: </span>
            {anime.rating}
          </li>
          <li>
            <span className="span-info">Rank: </span>
            {anime.rank}
          </li>
          <li>
            <span className="span-info">Popularity: </span>
            {anime.popularity}
          </li>
          <li>
            <span className="span-info">Studios: </span>
            {anime.studios.map(
              (studio, index) =>
                `${studio.name}${index === anime.studios.length - 1 ? "" : ","}`
            )}
          </li>
          <li>
            <span className="span-info">Genres: </span>
            {anime.genres.map(
              (genre, index) =>
                `${genre.name}${index === anime.genres.length - 1 ? "" : ","} `
            )}
          </li>
          <li>
            <span className="span-info">Themes: </span>
            {anime.themes.map(
              (theme, index) =>
                `${theme.name}${index === anime.themes.length - 1 ? "" : ", "}`
            )}
          </li>
          <li>
            <span className="span-info">Demographics: </span>{" "}
            {anime.demographics.map(
              (demographic, index) =>
                `${demographic.name}${
                  index === anime.demographics.length - 1 ? "" : ","
                } `
            )}
          </li>
        </ul>
        <div className="mt-4 flex justify-center">
          <button
            onClick={() => setInfo(false)}
            className="cursor-pointer rounded-lg bg-indigo-700 py-2 px-6 hover:bg-indigo-800 hover:text-slate-400"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}

export default AnimeInfo
