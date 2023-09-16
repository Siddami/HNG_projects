
const MovieDetails = () => {


  return (
    <div className="grid lg:grid-cols-4 gap-2 ">
        <nav className="flex flex-col justify-center items-center lg:col-span-1 w-full h-full gap-y-5 border-r-2 p-4 rounded-3xl">
            <div>
              <img src="./vectors/Logo.svg" className="w-38 h-12 m-6" />
            </div>
            <div className="flex flex-col text-slate-600 items-center">
                <span className="flex h-16 items-center w-24"><img src="./vectors/Home.svg" className="block w-6 h-6"/><p className="p-2">Home</p></span>
                <span className="flex h-16 items-center w-24"><img src="./vectors/movie.svg" className="block w-6 h-6"/><p className="p-2">Movie</p></span>
                <span className="flex h-16 items-center w-24"><img src="./vectors/TVShow.svg" className="block w-6 h-6"/><p className="p-2">TV Series</p></span>
                <span className="flex h-16 items-center w-24"><img src="./vectors/Calendar.svg" className="block w-6 h-6"/><p className="p-2">Upcoming</p></span>
            </div>
            <div className=" w-8/12 border-2 p-3 rounded-xl flex flex-col justify-center items-center h-48">
              <p className="text-sm p-2">Play movie quizes and earn free tickets</p>
              <small className="text-gray-500 p-2">50k people are playing now</small>
              <button className="bg-rose-200 text-pink-700 text-xs rounded-xl p-2">start playing</button>
            </div>
            <img src="./vectors/logout.svg" className="h-10 w-24 m-2" />
          </nav>
          <main className="lg:col-span-3 p-4">
              <section className="flex flex-col justify-center sm:items-center gap-4">
                <iframe src="" className="w-full h-72 p-5 rounded-lg bg-slate-500 sm:w-2/4 sm:h-52"></iframe>
                <article className="flex flex-wrap justify-between items-center p-4">
                  <div className="flex flex-wrap justify-center items-center gap-2">
                    <p className="gap-2"><span>Top Gun: Maverick </span> •<span> 2022</span> •<span> PG-13</span> •<span> 2h 10m</span>
                    </p>
                    <p className="text-rose-600 text-sm flex gap-2">
                      <span>Action</span>
                      <span>Drama</span>
                    </p>
                  </div>
                    <p className="flex justify-center items-center">
                      <img src="./vectors/star.svg" className="w-7 h-7"/>
                      <span className=" text-gray-500">rating</span>|
                      <span>views</span>
                    </p>
                </article>
              </section>
              <section className="grid lg:grid-cols-3 p-4 gap-2">
                  <article className="lg:col-span-2 flex flex-col justify-center gap-5">
                      <p>
                      After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads TOP GUN's elite graduates on a mission that demands the ultimate sacrifice from those chosen to fly it.
                      </p>
                      <p>Director: <span className="text-rose-700">names</span></p>
                      <p>Writers: <span className="text-rose-700">names</span></p>
                      <p>Stars: <span className="text-rose-700">names</span></p>
                      <div className="flex justify-start items-center w-full">
                        <p className="text-white bg-rose-700 p-2">Top rated movie #85</p>
                        <p className="border border-l-0 border-gray-500 p-1 flex items-center  gap-24">
                          <button>Awards 9 nominations </button>
                          <button><img src="./vectors/downarrow.svg" alt="downward arrow" className=" w-7 h-7" /></button></p>
                      </div>
                  </article>
                  <article className="lg:col-span-1 flex flex-col gap-3 justify-center">
                      <button className="bg-rose-700 text-white flex p-2 gap-2 items-center justify-center"><img src="./vectors/tickets.svg" /> See Showtimes</button>
                      <button className="bg-rose-200 flex p-2 gap-2 items-center justify-center" ><img src="./vectors/list.svg" /> More watch options</button>
                      <img src="./vectors/subs.svg" alt="other movies" />
                  </article>
              </section>
          </main>
    </div>
  )
}

export default MovieDetails
