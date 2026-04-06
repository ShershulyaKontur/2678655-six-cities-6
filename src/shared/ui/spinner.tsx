
export const Spinner = () => {
  const spinnerStyle = {
    display: 'inline-block',
    width: '80px',
    height: '80px',
    border: '3px solid #f3f3f3',
    borderTop: '3px solid #2263e6',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite'
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '350px'
  };

  const keyframes = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;

  return (
    <div style={containerStyle}>
      <style>{keyframes}</style>
      <div style={spinnerStyle} />
    </div>
  );
};

