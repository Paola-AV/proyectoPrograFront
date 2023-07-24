

export function ClientesT(){
    return(
        <section>
            <div>
                <h3>Clientes</h3>
                <div className="clienteBox"><h2>Clientes interesados</h2></div>
                <div className="clienteBox"><h2>Clientes arrendatarios</h2></div>
            </div>
            <div>
                {/*llamar listas*/}
            </div>
            <div className="interesadoDiv">
                <table className="interesadoTable">
                    <thead className="tableHeader">
                        <tr className="tableRow">
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Telefono</th>
                            <th>Gmail</th>
                            <th>Mensaje</th>
                        </tr>
                    </thead>
                    <tr className="tableRow">
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                </table>
            </div>
        </section>
    )
}