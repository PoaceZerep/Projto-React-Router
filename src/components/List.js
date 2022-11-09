import Item from './Item'


function List() {
    return (
        <>
        <h1>Minha lista</h1>
        <ul>
            <Item marca="Ferrari" ano_lancamento={1985}/>
            <Item marca="Fiat" ano_lancamento={1960} />
            <Item marca="Renault" ano_lancamento={1988} />
        </ul>
        </>
    )
}

export default List