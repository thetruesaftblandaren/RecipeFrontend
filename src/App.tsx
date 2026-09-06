import './index.css'
import { useState } from 'react';

function App() {
  const [url, setUrl] = useState<string>();
  const [allowUnfiltered, setAllowUnfiltered] = useState<boolean>(false);

  async function getRandomUrl() {
    let path = 'http://localhost:5266/sitemap/random-url?allowUnfiltered=' + allowUnfiltered

    let response = await fetch(path, {method: "GET"});

    setUrl(await response.text())
  }

  return (
    <>
      <div className="container">
        <h1>Generate a link</h1>
        <label>Click to allow unfiltered websites (may contain other links than recipes):
        <input
        type="checkbox"
        onChange={(e) => setAllowUnfiltered(e.target.checked)}></input>
        </label>
        <button
        className="refresh-btn"
        children="Click to generate a link"
        onClick={() => getRandomUrl()}/>
        <a href={url} target="_blank">{url}</a>
      </div>
    </>
  )
}

export default App;
