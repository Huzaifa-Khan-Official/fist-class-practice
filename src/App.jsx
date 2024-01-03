import logo from './logo.svg';
import './App.css';

function App() {
  const name = "Hello World";
  const obj = {
    name: "Hello World Object"
  };

  const data = ["we", "are", "united"];

  const list = [{ name: "Hello World 1" }, { name: "Hello World 2" }, { name: "Hello World 3" }]

  const complex = [{ company: "XYZ", jobs: ["JavaScript", "React"] }, { company: "ABC", jobs: ["Angular Js", "Iconic"] }];

  return (
    <div className="App">
      <h1>{name}</h1>
      <hr />
      <h3>Object Rendering</h3>
      <p>{obj.name}</p>
      <hr />
      <h3>Arrat Rendering</h3>
      <ul>
        {data.map((value, index) => <li key={index}>{value}</li>)}
      </ul>
      <hr />
      <h3>Array of Object Rendering</h3>
      <ul>
        {list.map((value, index) => <li key={index}>{value.name}</li>)}
      </ul>
      <hr />
      <h3>Nested Array</h3>
      <table>
        <tbody>
          {complex.map((value, index) => {
            return (
              <tr key={index}>
                <th>Company</th>
                <td>{value.company}</td>
                <th>Jobs</th>
                <td>
                  <ul>
                    {value.jobs.map((value, index) => <li key={index}>{value}</li>)}
                  </ul>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
