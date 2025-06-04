import classes from './footer.module.css';

/**
 * Footer component
 * @returns JSX of component
 */
export default function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer className={classes.footer}>
      <p className={classes.myP + ' ' + classes.temp}>
        {' '}
        <span>&copy;</span> {date} by leon gitelman 49/3 
      </p>
    </footer>
  );
}
