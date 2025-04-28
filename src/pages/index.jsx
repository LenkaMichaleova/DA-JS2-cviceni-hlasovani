import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

const handleHlasuj = async () => {
  const pollId = 1
  const data = {
    option: 2,
    name: "Knedlenka"

  }
  const resp = await fetch(`https://hlasovani.czechitas.dev/api/poll/${pollId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });
  if (!resp.ok) {
    alert("Hlasování se nepodařilo, zkuste to prosím později.")
  }
}

document.querySelector('#root').innerHTML = render(
  <div className="container">
    <button id='btn' className='btn'>Hlasovat</button>
  </div>
);

document.querySelector("#btn").addEventListener("click", handleHlasuj())