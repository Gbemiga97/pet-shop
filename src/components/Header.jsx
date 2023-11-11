import { Link } from "react-scroll"
import { data, images } from "../utils"


const Header = () => {
  return (
    <header className="py-6 lg:absolute lg:w-full lg:left-0">
      <div className="container mx-auto flex flex-col gap-y-6 lg:flex-row
      h-full justify-between items-center relative ">
        
        <Link 
        to="/"
        spy={true}
        >
        <img src={images.Logo} alt="logo" />
        </Link>

        <nav>
          <ul className="text-xl flex gap-x-4 lg:gap-x-12">
            {
              data.navData.map(({href, name}, i) => (
                <li key={i}>
                  <Link
                  className="cursor-pointer"
                  to={href}
                  >
                    {name}
                  </Link>
                </li>
              ))
            }
          </ul>
        </nav>

        <button className="btn btn-primary">
          Sign up
        </button>
      </div>
    </header>
  )
}

export default Header