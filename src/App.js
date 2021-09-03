import {useState} from "react";
import Country from "./components/Country";

function App() {

    const [countries, setCountries] = useState([]);
    const [show, setShow] = useState(false);
    const fetchData = () => {
        if (show) {
            fetch('https://restcountries.eu/rest/v2/region/asia')
                .then(async response => {
                    const data = await response.json();
                    console.log(data);
                    setCountries(data)
                })
                .catch(error => {
                    console.error('There was an error!', error);
                });
            setShow(false);
        } else {
            setCountries([])
            setShow(true)
        }
    }

    // useEffect(() => {
    //     fetchData()
    // });
    return (
        <div>
            <div>
                <button type="button" className="btn btn-primary" onClick={fetchData} style={{
                    display: "block",
                    "margin-left": "auto",
                    "margin-right": "auto",
                    "margin-top": "10px"
                }}>REFRESH
                </button>
            </div>
            {countries && countries.map(country => (
                    <Country id={country.name} country={country}/>
                )
            )}

        </div>
    );
}

export default App;
