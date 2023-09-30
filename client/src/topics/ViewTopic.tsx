import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { API_URL } from '../api/config'
import axios from 'axios'
import styles from './viewTopic.module.css'

export default function ViewTopic() {

    const [topic, setTopic] = useState({
        autor: "",
        curso: "",
        estatus: "",
        titulo: "",
        mensaje: ""
    })

    const {id} = useParams()

    useEffect(() => {
        loadTopic()
    }, [])

    async function loadTopic() {
        const result = await axios.get(`${API_URL}/topicos/${id}`)
        setTopic(result.data)

    }

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h2 className={styles.title}>Ver tópico</h2>
                <div className={styles.form}>
                    <h4>Autor</h4>
                    <p>{topic.autor}</p>

                    <h4>Curso</h4>
                    <p>{topic.curso}</p>

                    <h4>Estatus</h4>
                    <p>{topic.estatus}</p>

                    <h4>Titulo</h4>
                    <p>{topic.titulo}</p>

                    <h4>Mensaje</h4>
                    <p>{topic.mensaje}</p>

                    <Link
                        to={"/"}
                    >
                        Ir a Home
                    </Link>
                </div>
            </div>
        </div>
    )
}
