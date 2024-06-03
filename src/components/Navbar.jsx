import logo from "../assets/kevinRushLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Navbar = () => {
  return <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-baseline">
        <img className="mx-2 w-10" src={logo} alt="logo" />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="mailto:sjskumarskp135@gmail.com" target="_blank" rel="noopener noreferrer">
        < SiGmail />
        </a>
        <a href="https://www.linkedin.com/in/sidhanta-kumar-prusty-6953372a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
        < FaLinkedin />
        </a>
        <a href="https://github.com/sidhanta08" target="_blank" rel="noopener noreferrer">
        < FaGithub />
        </a>
        <a href="http://instagram.com/sid_d_god_08" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://x.com/D_SPrusty0808?t=I67KjRbO0bZHPgWNy95eEA&s=09" target="_blank" rel="noopener noreferrer">
        < FaSquareXTwitter />
        </a>
    </div>
  </nav>
}

export default Navbar
