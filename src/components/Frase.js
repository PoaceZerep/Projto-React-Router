import styles from './Frase.module.css'


function Frase() {

    return (
        <div classname= {styles.fraseContainer}>
            <p classname= {styles.fraseContent}>Esse é um componente com uma frase!</p>

        </div>
    )

}
export default Frase