import { useEffect, useState } from "react"
import { Box } from "../../Containers"
import { AssistentP, SelectContainer, StyledSelect } from "./styles"


const Select = ({
    id = 'select_id',
    type = 'text',
    value,
    onChange,
    placeholder,
    label,
    Icon,
    iconIsButton,
    onIconButtonClick,
    success,
    error,
    assistentText,
    margin = '32px 0 16px',
    width = '100%',
    options,
    small
}) => {

    const [optionsWithPlaceholder, setOptionsWithPlaceholder] = useState([])
    
    
    useEffect(() => {
        const newOptions = [...options]
        if (newOptions[0]?.value !== 'placeholder' && newOptions[1]?.value !== 'placeholder') {
            newOptions.unshift({
                value: 'placeholder',
                label: placeholder,
                disabled: true,
                selected: true,
            })
            // console.log('options: ', options)
            // console.log('newOptions: ', newOptions)
            setOptionsWithPlaceholder(newOptions)
        }
    }, [options])

    // console.log('error: ', error, id)

    return (
        <Box
            width={width}
            height='100%'
            textAlign='left'
            margin={margin}
        >
            <Box
                margin='0 0 16px'
            >
                <label htmlFor={id}>
                    {label}
                </label>
            </Box>
            <SelectContainer
                error={error}
                success={success}
                small={small}
            >
                <StyledSelect
                    id={id}
                    name={id}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                >
                    { optionsWithPlaceholder && optionsWithPlaceholder.map((e, i) => (
                        <option
                            value={e.value ? e.value : e.label}
                            disabled={e.disabled}
                            // defaultValue={e.selected}
                            defaultChecked={e.selected}
                            // selected={e.selected}
                            key={`${e.label}_select_option`}
                        >
                            {e.label}
                        </option>
                    ))}
                </StyledSelect>
                {/* { Icon && (
                    <IconButton isActive={iconIsButton} onClick={onIconButtonClick}>
                        <Icon size={24} weight="thin" />
                    </IconButton>
                )} */}
            </SelectContainer>
            { assistentText && (
                <AssistentP error={error}>{assistentText}</AssistentP>
            )}
        </Box>
    )
}

export default Select