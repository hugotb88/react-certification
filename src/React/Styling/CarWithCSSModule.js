import styles from './my-style.module.css';

/*
    Component used as example of a CSS Module
*/
const CarWithCSSModule = () =>  {
    return(
        <h1 className={styles.bigblue}> This Car has style with CSS Module </h1>
    )
}

export {CarWithCSSModule};
