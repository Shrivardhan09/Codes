import { useEffect, useState } from "react";

const Child = ({ data }) => {
    const a = Number(data)
    const [Arr, setArr] = useState([]) //for adding inputs
    const [sum, setSum] = useState(0) // for sum
    useEffect(() => {
        let intialArr = []
        for (let i = 0; i < a; i++) {
            intialArr.push(null)
        }
        setArr(intialArr)
    }, [a])


    const onchangeEvent = (e, index) => {
        const updatedArr = [...Arr];

        updatedArr[index] = parseInt(e.target.value);
        setArr(updatedArr);

        const updatedSum = updatedArr.reduce((acc, num) => {
            if (typeof num === 'number') {
                acc += num;
            }
            return acc;
        }, 0);

        setSum(updatedSum);
    }

    return (
        <div>
            {Arr.map((value, index) => {
                return (
                    <div key={index}>
                        <input type="number" value={value}
                            onChange={(e) => onchangeEvent(e, index)} />
                    </div>
                )
            })
            }
            <div>{sum}</div>
        </div>
    )
}

export default Child

