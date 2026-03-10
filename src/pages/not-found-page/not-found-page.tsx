export function NotFoundPage(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">404 Not Found</h1>
        <div className="cities">
          <div
            className="container"
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <section className="cities__places places">
              <div className="cities__status-wrapper">
                <b className="cities__status">404</b>
                <p className="cities__status-description">
                  Oops! The page you are looking for doesn&apos;t exist or has been moved.
                </p>
                <a
                  className="locations__item-link"
                  style={{
                    display: 'inline-block',
                    marginTop: '30px',
                    padding: '12px 24px',
                    backgroundColor: '#4481c3',
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: '16px',
                    fontWeight: '500',
                    borderRadius: '4px',
                  }}
                >
                  <span style={{ display: 'block' }}>
                    Go to main page
                  </span>
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
