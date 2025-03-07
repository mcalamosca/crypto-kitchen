// Uncomment this line to use CSS modules
import styles from './app.module.scss';
import NxWelcome from './nx-welcome';
import { Button } from '@crypto-kitchen/shared/ui';
import { Route, Routes, Link } from 'react-router-dom';

export function App() {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <h1>Momentum Dashboard</h1>
      </header>
      
      <main className={styles.main}>
        <section className={styles.welcome}>
          <NxWelcome title="momentum-dashboard" />
        </section>
        
        <section className={styles.content}>
          <h2>Welcome to the Momentum Dashboard</h2>
          <p>This is your new dashboard application built with React and Nx.</p>
          
          <div className={styles.buttons}>
            <Button variant="primary" size="medium">Primary Button</Button>
            <Button variant="secondary" size="medium">Secondary Button</Button>
            <Button variant="outline" size="medium">Outline Button</Button>
          </div>
        </section>
      </main>

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <div className={styles.navigation} role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;
