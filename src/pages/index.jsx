import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

const handleHlasuj = async (input) => {
  const pollId = 1
  const data = {
    option: 2,
    name: input
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
    <form className='form'>
      <label>Zadej jméno: 
        <input id='inp' type="text" />
      </label>
      
      <button id='btn' type='submit'>Hlasovat</button>
    </form>
  </div>
);

document.querySelector(".form").addEventListener("submit", (e) => {
  e.preventDefault()

  handleHlasuj(document.querySelector("#inp").value)
})