

function Events()  {

    function myEvents({ numero }) {

        console.log(`Fui aivado ${numero}`)
    }
    return(
        <div>
            <p> Clique para disparar um evento:</p>
            <button onClick={myEvents}>Ativar!</button>
        </div>
    )
}

export default Events