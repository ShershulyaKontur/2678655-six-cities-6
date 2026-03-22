import { Heading } from '../../ui/heading/heading';

export function NotFoundPage(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--index">
        <Heading className="visually-hidden">404 Not Found</Heading>
        <div className="cities">
          <div
            className="container"
            style={{display: 'flex',justifyContent: 'center'}}
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
