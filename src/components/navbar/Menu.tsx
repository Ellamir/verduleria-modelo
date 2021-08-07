import { Link, NavLink } from 'react-router-dom'
import './menu.css'

const Menu = () => {
	return (
		<nav className="container navbar navbar-expand-lg navbar-light bg-light fixed-top mb-5">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/">
					<img src="./../../frutas.PNG" alt="logo" width="60px" />
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ">
						<li className="nav-item">
							<NavLink exact activeClassName="selected" className="nav-link" to="/">
								Home
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink exact activeClassName="selected" className="nav-link" to="/products">
								List
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink exact activeClassName="selected" className="nav-link" to="/products/create">
								Create
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink exact activeClassName="selected" className="nav-link" to="/login">
								Login
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

export default Menu
