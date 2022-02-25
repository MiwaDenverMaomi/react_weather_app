
import { useState } from 'react';

const Form = ({ onClickSubmit, errMsg }) => {
  const [city, setCity] = useState('');

  const onClick = (e) => {
    console.log('Form:onClick');
    e.preventDefault();
    onClickSubmit(city);
  };

  return (
    <form className="app__form">
      <label htmlFor="city" className="app__label">Input City Name.</label>
      <input type="text" name="city" placeholder="city name" className="app__inputarea"
        onChange={e => {
          setCity(e.target.value);
        }} />
      <button
        type="submit"
        className="app__btn"
        onClick={onClick}
      >Search</button>
      <div className="app__err">{errMsg}</div>
    </form>
  );
};

export default Form;
