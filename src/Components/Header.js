import { useContext } from "react";
import pokeball from '../Assets/pokeBall.png';
import pokeballUpSideDown from '../Assets/pokeBallUpSideDown.png';
import {Link} from 'react-router-dom';
import { AppContext } from "./AppProvider";

export function Header() {
	const { toggleTheme, themeMode } = useContext(AppContext);
  const handleThemeChange = (e) => {
    toggleTheme();
  };

  return (
		<header>
			<div onClick={handleThemeChange} className="header-logo">
				{themeMode === "light"
					? <img src={pokeball} alt="Poke Ball" width="80" />
					: <img src={pokeballUpSideDown} alt="Poke Ball" width="80" />
				}
				<h2>Pokemon Cards</h2>
			</div>
			<ul className="nav-links">
				<Link to="/"><li>Home</li></Link>
				<Link to="/about"><li>About</li></Link>
			</ul>
		</header>
  );
}
