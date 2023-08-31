import React from 'react';

function Input({ type, name, label, children, ...props }) {
  return (
    <>
      <div className="form-group">
        <span className="form-control-icon">{children}</span>
        <input
          className="form-control input-bg mb-2"
          id={name}
          name={name}
          type={type}
          {...props}
        />
      </div>
    </>
  );
}

export default Input;
