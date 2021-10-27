import { Flex } from "../../Containers"
import { DataDisplayContainer } from "./styles"


const DataDisplay = ({ label, value }) => {
    return (
        <DataDisplayContainer>
            <div>{label.toUpperCase()}:</div>
            <div>{ value }</div>
        </DataDisplayContainer>
    )
}

export default DataDisplay