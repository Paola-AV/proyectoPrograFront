import { useEffect, useRef, useState } from "react";
//componenete para enviar emails a diferentes destinatarios
export function Gmail({ gmail }) {
    const [to, setTo] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("entro");
        const blog = { to, subject, message };
        //post para la api de spring
        fetch('http://localhost:8000/send-email', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('nuevo gmail interesado');
        })
    }

    return (
        <section >
            <h2>Enviar mensaje</h2>
            <form ref={form} onSubmit={handleSubmit}>
                <div className='inputDiv'>
                    <label className='inputLabel'>Destinatario</label>
                    <input className='input' type="text" value={to}
                        onChange={(e) => setTo(e.target.value)} />
                </div>

                <div className='inputDiv'>
                    <label className='inputLabel'>Asunto</label>
                    <input className='input' type="text" value={subject}
                        onChange={(e) => setSubject(e.target.value)} />
                </div>

                <div className='inputDiv'>
                    <label className='inputLabel'>Mensaje</label>
                    <input className='input' type="text" value={message}
                        onChange={(e) => setMessage(e.target.value)} />
                </div>

                <div><button type="submit" className='inputBtn'>Enviar</button></div>

            </form>


        </section>
    )
}