import { useContext } from "react"
import { setUp } from "./MemoData"

const ParentMans = () => {
    const store = useContext(setUp)
    console.log(store)

    return (
        <div>
            {store.map((items) => {
                return (
                    <div key={items.id}>
                        <p>{items.title}</p>
                    </div>
                )
            })
            }
        </div>
    )
}

export default ParentMans
