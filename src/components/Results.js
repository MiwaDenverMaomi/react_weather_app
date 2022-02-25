const Results = ({ results, errMsg, showResult }) => {
  if (showResult) {
    return (
      < div className="app__results" >
        < div className="app__results--a" >
          {results.name ? <div className="app__result-city">{results.name}</div> : ''}
          {results.country ? <div className="app__result-country">{results.country}</div> : ''}
        </div >
        <div className="app__results--b">
          {results.icon ? <img className="app__result-icon" src={results.icon} alt="icon" /> : ''}
          {results.text ? <div className="app__result-weather">{results.text}</div> : ''}
          {results.temp_c ? <div className="app__result-temperature">{results.temp_c}<span className="app__result-temp-unit">℃</span></div> : ''}
        </div>
      </div >
    );
  } else {
    return '';
  }
};

export default Results;
