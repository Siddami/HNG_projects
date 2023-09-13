import logo from '../images/tv.png'

const Header = () =>{

    return(
        <header className='bg-cover bg-no-repeat bg-center'
        style={{ height: '600px', backgroundImage: `url(${APIPATH+backdrop_path})`}}
        >
            <nav className='px-7 py-2 flex items-center justify-between'>
                <div className='w-48 logo flex items-center'>
                    <img src={logo} className='w-14 h-14'/>
                    <p className='px-2 text-lg text-white'>MovieBox</p>
                </div>
                <div>
                    <form>
                    <input type='search'
                            name='search'
                            placeholder='What do you want to watch?'
                            className='bg-transparent border w-96 px-3 py-2 placeholder-gray-300 text-white rounded-md border-current ring-2 focus:ring-gray-400 focus:ring-1'/>
                    </form>
                </div>
            </nav>
        </header>
    )
}
export default Header
