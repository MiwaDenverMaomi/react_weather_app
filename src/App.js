import { useEffect, useState } from 'react';
import "./scss/app.scss";
import Form from "./components/Form";
import Results from "./components/Results";
import weather from "./apis/weather";

const App = () => {
  const [results, setResults] = useState([]);
  const [errMsg, setErrMsg] = useState('');
  const [showResult, setShowResult] = useState(false);

  const onClickSubmit = (cityName) => {
    console.log('App:onClickSubmit');
    if (Object.keys(results).length > 0) setResults([]);
    if (cityName === "") {
      setErrMsg('Input city name.');
    } else {
      setErrMsg('');
      getResults(cityName);
    }
  };

  useEffect(() => {
    console.log('useEffect');
    if (errMsg.length === 0) {
      console.log('setShowResult->true');
      setShowResult(true);
    } else {
      setShowResult(false);
    }
  }, [errMsg]);

  const getResults = async cityName => {
    console.log('App:getResults');
    await weather.get("/current.json",
      {
        params: {
          q: cityName,
        }
      }).then(response => {
        console.log(response.data);
        const results = {
          text: response.data.current.condition.text,
          name: response.data.location.name,
          country: response.data.location.country,
          temp_c: response.data.current.temp_c,
          icon: response.data.current.condition.icon
        };
        setResults(results);

      }).catch(err => {
        err.response.data.error.code === 1006 ? setErrMsg('No matching city found.') :
          setErrMsg('Error occured. Reload the page and try again.');

      });
  };

  return (
    <div className="app">
      <div className="app__container">
        <div className="app__title">
          <h1>World Weather</h1>
        </div>
        <Form onClickSubmit={onClickSubmit} errMsg={errMsg} />
        <Results results={results} showResult={showResult} />
      </div>
    </div >
  );
}

export default App;
