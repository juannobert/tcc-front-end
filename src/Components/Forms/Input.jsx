import React from 'react';

function Input({ type, name, children, onChange, onBlur, error }) {
  return (
    <>
      <div className="form-group">
        <span className="form-control-icon">{children}</span>
        <input
          className="form-control input-bg mb-2"
          id={name}
          name={name}
          type={type}
          onChange={onChange}
          onBlur={onBlur}
        />
        <p className={error && 'text-danger'}>{error}</p>
      </div>
    </>
  );
}

export default Input;
