import { useState } from "react"
import { v4 as uuidv4 } from "uuid";

const ThreeInput = () => {
    const [inputMera, setInputMera] = useState([])

    const onInputAdd = () => {
        const arr = []
        for (let i = 0; i < 3; i++) {
            let inputFields = {
                name: uuidv4(),
                placeholder: "Enter Text",
                type: "text",
                value: "",
            }
            arr.push(inputFields)
        }
        setInputMera((prev) => [...prev, ...arr])
    }


    const onChangeInput = (e) => {
        const { name, value } = e.target
        setInputMera((prev) =>
            prev.map((item) => {
                if (item.name === name) {
                    return { ...item, value }; // value: value
                }
                return item
            })
        )
    }


    return (
        <div>
            {inputMera.map((items) =>
                <input
                    key={items.name}
                    onChange={(e) => onChangeInput(e)}
                    name={items.name}
                    placeholder={items.placeholder}
                    type={items.type} />
            )}
            <div>
                <button type="button" onClick={onInputAdd}>Add Fields</button>
            </div>
            {inputMera.some((item) => item.value !== "") && (
                <div>
                    <h1>My Data</h1>
                    <ul>
                        {inputMera.map((item) =>
                            item.value ? <li key={item.name}>{item.value}</li> : null
                        )}
                    </ul>
                </div>
            )}

        </div>
    )
}
export default ThreeInput



// import { useCallback, useState } from "react"
// import { v4 as uuidv4 } from "uuid";

// const ThreeInput = () => {
//     const [inputMera, setInputMera] = useState([])

//     const onInputAdd = useCallback(() => {
//         const arr = []
//         for (let i = 0; i < 3; i++) {
//             let inputFields = {
//                 name: uuidv4(),
//                 placeholder: "Enter Text",
//                 type: "text",
//                 value: "",
//             }
//             arr.push(inputFields)
//         }
//         setInputMera((prev) => [...prev, ...arr])
//     }, [])


//     const onChangeInput = useCallback((e) => {
//         const { name, value } = e.target
//         setInputMera((prev) =>
//             prev.map((item) => {
//                 if (item.name === name) {
//                     return { ...item, value };
//                 }
//                 return item
//             })
//         )
//     }, [])


//     return (
//         <div>
//             {inputMera.map((items) =>
//                 <input
//                     key={items.name}
//                     onChange={(e) => onChangeInput(e)}
//                     name={items.name}
//                     placeholder={items.placeholder}
//                     type={items.type} />
//             )}
//             <div>
//                 <button type="button" onClick={onInputAdd}>Add Fields</button>
//             </div>
//             {inputMera.some((item) => item.value !== "") && (
//                 <div>
//                     <h1>My Data</h1>
//                     <ul>

//                         {inputMera.map((item) =>
//                             item.value ? <li key={item.name}>{item.value}</li> : null
//                         )}
//                     </ul>
//                 </div>
//             )}

//         </div>
//     )
// }
// export default ThreeInput
