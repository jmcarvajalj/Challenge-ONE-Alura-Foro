import { useEffect, useState } from 'react'
import { API_URL } from '../api/config'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import styles from './editTopic.module.css'

export default function EditTopic() {

    const navigate = useNavigate()
    const {id} = useParams()

    const [topic, setTopic] = useState({
        autor: "",
        curso: "",
        estatus: "",
        titulo: "",
        mensaje: ""
    })

    useEffect(() => {
        loadTopic()
    }, [])

    function onInputChange(e) {
        setTopic({
            ...topic,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e) {
        e.preventDefault()
        await axios.put(`${API_URL}/topicos/${id}`, topic)
        navigate("/")
    }

    async function loadTopic() {
        const result = await axios.get(`${API_URL}/topicos/${id}`)
        setTopic(result.data)

    }

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h2 className={styles.title}>Editar tópico</h2>

                <form onSubmit={(e) => onSubmit(e)}>
                    <div className={styles.form}>
                        <label htmlFor="Autor">Autor</label>
                        <input
                            type={"text"}
                            name="autor"
                            placeholder="Ingrese nombre de autor"
                            value={topic.autor}
                            onChange={(e) => onInputChange(e)}
                        />

                        <label htmlFor="Curso">Curso</label>
                        <input
                            type={"text"}
                            name="curso"
                            placeholder="Ingrese nombre del curso"
                            value={topic.curso}
                            onChange={(e) => onInputChange(e)}
                        />

                        <label htmlFor="Estatus">Estatus</label>
                        <input
                            type={"text"}
                            name="estatus"
                            placeholder="Ingrese estado del tópico"
                            value={topic.estatus}
                            onChange={(e) => onInputChange(e)}
                        />

                        <label htmlFor="Titulo">Titulo</label>
                        <input
                            type={"text"}
                            name="titulo"
                            placeholder="Ingrese titulo del tópico"
                            value={topic.titulo}
                            onChange={(e) => onInputChange(e)}
                        />

                        <label htmlFor="Mensaje">Mensaje</label>
                        <textarea
                            name="mensaje"
                            className={styles.message}
                            placeholder="Ingrese mensaje del tópico"
                            value={topic.mensaje}
                            onChange={(e) => onInputChange(e)}
                        />

                        <div className={styles.buttons}>
                            <button
                                type="submit"
                                className={styles.create}
                            >
                                Editar tópico
                            </button>
                            <Link
                                to={"/"}
                                className={styles.cancel}
                            >
                                Cancelar
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
