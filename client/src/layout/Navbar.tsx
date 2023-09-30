import { Link } from 'react-router-dom'
import './navbar.css'

export default function Navbar() {
    return (
        <nav className='navbar'>
            <h1 className='title'>
                <Link to={"/"}>
                    Foro Alura
                </Link>
            </h1>
            <Link className='new-topic' to={"/add-topic"}>Crea un nuevo tópico</Link>
        </nav>
    )
}