import { useState } from "react";
import {
    Wrapper,
    Item,
    RadioButton,
    RadioButtonLabel,
} from "./styles"
import { ExplainingP } from "../../Text";
import { Flex } from "../../Containers";

const RadioButtons = ({ options, select, onChange, row, small }) => {

    const [active, setActive] = useState('');
    // const handleSelectChange = (event) => {
    //     const value = event.target.value;
    //     setSelect(value);
    // };

    return (
        <Wrapper
            small={small}
            row={row}
        >
            {options && options.map((e, i) => (
                <Item key={`${e.label}_option_item`}>

                    {e.description ? (
                        <>
                        <RadioButton
                            small={small}
                            selected={select === e.value}
                            onClick={() => onChange(e.value)}
                        />
                            <RadioButtonLabel
                                key={`${e.label}_radio_label`}
                                small={small}
                                row={row}
                            >
                                {e.label.toUpperCase()}
                            </RadioButtonLabel>
                            <ExplainingP
                                fontSize='0.7rem'
                                margin='8px 0 0 15px'
                            >
                                {e.description}
                            </ExplainingP>
                        <Flex
                            column
                            alignItems='flex-start'
                            justifyContent='flex-start'
                        >
                        </Flex>
                    </>
                    ) : (
                        <>
                            <RadioButton
                                small={small}
                                selected={select === e.value}
                                onClick={() => onChange(e.value)}
                            />
                            <RadioButtonLabel
                                key={`${e.label}_radio_label`}
                                small={small}
                                row={row}
                            >
                                {e.label.toUpperCase()}
                            </RadioButtonLabel>
                        </>
                    )}
                </Item>
            ))}
        </Wrapper>
    )
}

export default RadioButtons