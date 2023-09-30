import axios from 'axios'
import { useEffect, useState } from 'react'
import { TTopic } from '../types/TTopic'
import { API_URL } from '../api/config'
import { Link, useParams } from 'react-router-dom'
import './home.css'


export default function Home() {

    const [topics, setTopics] = useState<TTopic[]>([])
    const { id } = useParams()

    useEffect(() => {
        loadUsers()
    }, [topics])

    async function loadUsers() {
        const result = await axios.get(`${API_URL}/topicos`)
        setTopics(result.data)
    }

    async function deleteTopic(id) {
        await axios.delete(`${API_URL}/topicos/${id}`)
        loadUsers()
    }

    return (
        <>
            <h2 className='title'>Tópicos</h2>
            <ul className='container'>
                {
                    topics.map(topic => (
                        <li key={topic.id}>
                            <div className='item-title'>
                                <h3>
                                    {topic.titulo}
                                </h3>
                                <p>Autor: {topic.autor}</p>
                                <Link id='view-topic' to={`/view-topic/${topic.id}`}>Ver Tópico</Link>
                            </div>
                            <div className='item-info'>
                                <p>Curso: {topic.curso}</p>
                                <p>Estado: {topic.estatus}</p>
                                <p>Fecha de Creación: {topic.fechaCreacion.slice(0, 10)}</p>
                                <p>Hora de Creación: {topic.fechaCreacion.slice(11, 19)}</p>
                            </div>
                            <div className='buttons'>
                                <Link id='edit-topic' to={`/edit-topic/${topic.id}`}>Editar Tópico</Link>
                                <button
                                    onClick={() => deleteTopic(topic.id)}
                                    id='delete-topic'
                                >
                                    Borrar Tópico
                                </button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}