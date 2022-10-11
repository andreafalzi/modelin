import React from 'react';
import './Textarea.style.scss';

const Textarea = ({ labelName, ...otherProps }) => {
  return (
    <div className='group'>
      <textarea className='textarea-input' {...otherProps} />
      {/* another way to write if statement argumentToCheck && (result). It means that if the argument exist go on and show me the result*/}
      {labelName && <label className={`${otherProps.value.length ? 'shrink' : ''} textarea-input-label`}>{labelName}</label>}
    </div>
  );
};

export default Textarea;
