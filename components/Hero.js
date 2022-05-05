function Hero() {
  return (
    <div className="flex h-52 max-w-full flex-col justify-end rounded-xl bg-hero bg-cover bg-center p-4 align-text-bottom md:h-80">
      <div className="flex">
        <h1 className="text-3xl font-bold md:text-5xl">Sunset/</h1>
        <h1 className="self-end text-lg font-semibold md:text-2xl">夕焼け</h1>
      </div>
      <p className="md:text-lg">The sun is beautifull, isn&apos;t it?</p>
    </div>
  )
}

export default Hero
