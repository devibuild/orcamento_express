import { Flex } from "../../Containers"
import Input from "../Input"


const AssistentStep = ({ children, options, inputs }) => {
    return (
        <Flex column width='100%' margin='auto'>
            <Flex width='100%'>
                {/* { inputs && inputs.map((e, i) => (
                    <Input
                        variant='outlined'
                        value={e.value}
                        onChange={e.onChange}
                        fullWidth
                    />
                ))}
                { options && options.map((e, i) => (
                    <Input
                        variant='outlined'
                        value={e.value}
                        onChange={e.onChange}
                        fullWidth
                    />
                ))} */}
            </Flex>
            { children }
        </Flex>
    )
}

export default AssistentStep