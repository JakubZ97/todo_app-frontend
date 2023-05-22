import React, { useContext, useEffect } from 'react';
import { ErrorContext } from '../../contexts/ErrorContext';
import { useSpring, animated } from 'react-spring';

export default function ErrorPopUp() {
  const { error, setError } = useContext(ErrorContext);

  const [styles, api] = useSpring(() => ({ from: { opacity: 0 } }));

  useEffect(() => {
    if (error) {
      api.start({ to: { opacity: 1 } });
    }
  }, [error]);

  const handleClosePopUp = () => {
    api.start({ to: { opacity: 0 } });

    setError('');
  };

  return (
    <>
      {error ? (
        <animated.div style={styles} className="error">
          <span className="error__background" onClick={handleClosePopUp} />
          <div className="error__container">
            <h2 className="error__heading font-v6">Something went wrong!</h2>
            <p className="error__paragraph font-v3">
              {error.status}: {error.statusText}
            </p>
            <button
              className="error__button font-v3 button-v1"
              onClick={handleClosePopUp}
            >
              Hide
            </button>
          </div>
        </animated.div>
      ) : (
        ''
      )}
    </>
  );
}
