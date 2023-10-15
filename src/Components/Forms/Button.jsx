import React from 'react';
function Button({ children, disabled = false }) {
  return (
    <button disabled={disabled} className="btn mt-3">
      {children}
    </button>
  );
}

export default Button;
