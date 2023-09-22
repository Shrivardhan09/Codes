import ChildTable from "./ChildTable";
import './table.css'

const ParentTable = () => {
    const data = [
        { column1: 'Row 1 Frozen yoghurt', column2: 'Row 1 159', column3: 'Row 1 6', column4: 'Row 1 24' },
        { column1: 'Row 2 Ice cream sandwich', column2: 'Row 2 159', column3: 'Row 2 6', column4: 'Row 2 24' },
        { column1: 'Row 3 Eclair', column2: 'Row 3 159', column3: 'Row 3 6', column4: 'Row 3 24' },
        { column1: 'Row 4 Cupcake', column2: 'Row 4 159', column3: 'Row 4 6', column4: 'Row 4 24' },
        { column1: 'Row 5 Gingerbread', column2: 'Row 5 159', column3: 'Row 5 6', column4: 'Row 5 24' },
    ];
    return (
        <table >
            <thead >
                <tr>
                    <th>Category</th>
                    <th>Cal</th>
                    <th>Carbs</th>
                    <th>fat</th>
                </tr>
            </thead>
            <ChildTable data={data} />
        </table >
    )
}

export default ParentTable
