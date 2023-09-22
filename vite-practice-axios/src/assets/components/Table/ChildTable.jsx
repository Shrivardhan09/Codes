import './table.css'

const ChildTable = ({ data }) => {
    const rowsFromParent = data.map((item, i) => (
        <tr key={i} >
            <td >{item.column1}</td>
            <td >{item.column2}</td>
            <td >{item.column3}</td>
            <td >{item.column4}</td>
        </tr >
    ));
    return (
        <tbody >
            {rowsFromParent}
        </tbody>
    )
}

export default ChildTable


