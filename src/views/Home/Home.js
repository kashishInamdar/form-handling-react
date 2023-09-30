import { useEffect, useState } from "react"
import './Home.css'
export default function Home() {
    const [fullName, setFullName] = useState("");
    const [gender, setGender] = useState("female");
    console.log(gender)
    const [fruits , setFruits ] = useState([]);

    const [brand ,setBrand ] = useState([]);

    useEffect(()=>{
        console.log(fruits);
    }, [fruits])

    const handleChack = (e)=>{
      if(e.target.checked){
        setFruits([...fruits , e.target.value])
      }
      else{
        const indexToBeDeleted = fruits.indexOf(e.target.value);
        fruits.splice(indexToBeDeleted , 1)
        setFruits([...fruits])
      }
    }

    return (
        <div>
            <form className="form">
                <h1 className="text-center">Let's Know About You</h1>
                <input
                    type="text"
                    placeholder="Full name"
                    onChange={(e) => {
                        setFullName(e.target.value)
                    }}
                    value={fullName}
                />
                <br />
                <br />

                <input type="radio"
                    name="gender"
                    value="male"
                    onChange={(e) => {
                        if (e.target.checked) {
                            setGender(e.target.value)
                        }
                    }}
                    checked={gender === "male"}
                />Male

                <input type="radio"
                    name="gender"
                    value="female"
                    onChange={(e) => {
                        if (e.target.checked) {
                            setGender(e.target.value)
                        }

                    }}
                    checked={gender === "female"}
                /> Female
                <br />
                <br />
                    <span className="heading">  Wich Fruits You Like :</span>
                <br />
                <input
                    type="checkbox"
                    value='mango'
                    onChange={handleChack}
                    
                />Mango
                <input
                    type="checkbox"
                    value='banana'
                    onChange={handleChack}
                />Banana
                <input
                    type="checkbox"
                    value='oreng'
                    onChange={handleChack}
                />Oreng
                <input
                    type="checkbox"
                    value='stobery'
                    onChange={handleChack}
                />Stobery

            <br/><br/>
            <span className="heading">What is your Fevorait Mobile Brand :</span> &nbsp; 
             <select 
             value={brand}
             onChange={(e) => {
                setBrand(e.target.value);
             }}
              >
                <option value="Samsung"> Samsung</option>
                <option value="iPhone">iPhone</option>
                <option value="Realme">Realme</option>
                <option value="Moto">Moto</option>
            </select>
            <h3>selected brand <u> {brand}</u></h3>

            </form>
        </div>
    )
}
