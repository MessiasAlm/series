import { useEffect, useState } from "react";
import "./styles/App.css";

type serie = {
  id: number;
  poster_path: string;
  name: string;
};

function App() {
  const [state, setState] = useState<serie[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://series-wpwq.onrender.com/api");
        const data = await res.json();
        setState(data.results);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);
  return (
    <div id="container">
      <div id="box">
        {state.map((item) => (
          <img
            key={item.id}
            src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
            alt={item.name}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
