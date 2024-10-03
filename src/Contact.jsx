import { useState } from 'react';
function Contact() {
  const [name, setName] = useState("");
  const [myCar, setMyCar] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}  -- ${myCar}`)
  }

  const handleChange = (event) => {
    setMyCar(event.target.value)
  }

  return (
    <div>
        { name } {myCar}
        <form onSubmit={handleSubmit}>
          <label>Enter your name: </label>
             <input 
              type="text" 
              value= {name}
              onChange={(e) => setName(e.target.value)}
            />
          <br />
          <label>Enter your Car: </label>
          <select value={myCar} onChange={handleChange}>
            <option value="">Select</option>
            <option value="Ford">Ford</option>
            <option value="Volvo">Volvo</option>
            <option value="Fiat">Fiat</option>
          </select>
          <input type="submit" />
        </form>
    </div>
  );
}

export default Contact;
