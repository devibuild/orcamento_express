import { useState } from "react"
import { Flex } from "../../Containers"
import { RadioButton, RadioButtonsTable } from "./styles"


const RadioButtonsList = ({ labels, entity, setEntity, options }) => {

    // const [lavabos, setEntity] = useState(new Array(4).fill(''))

    // console.log('entity: ', entity)

    const optionsValues = options ? options : [
        'none',
        'small',
        'medium',
        'large'
    ]

    const defaultlabels = labels ? [...labels] : [
        'NÃO QUERO',
        'PEQUENO (APROX. 3,5 M2)',
        'MÉDIO (APROX. 6 M2)',
        'GRANDE (APROX. 8 M2)'
    ]

    return (
        <RadioButtonsTable>
            <thead>
                <tr>
                    <th>

                    </th>
                    <th>
                        1
                    </th>
                    <th>
                        2
                    </th>
                    <th>
                        3
                    </th>
                    <th>
                        4
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        {defaultlabels[0]}
                    </td>
                    <td>
                        <RadioButton
                            selected={entity ? optionsValues[0] === entity[0] : ''}
                            onClick={() => {
                                const newEntity = [...entity]
                                newEntity[0] = optionsValues[0]
                                // console.log('newEntity: ', newEntity)
                                setEntity(newEntity)
                            }}
                        />
                    </td>
                    <td>
                        <RadioButton
                            selected={entity ? optionsValues[0] === entity[1] : ''}
                            onClick={() => {
                                const newEntity = [...entity]
                                newEntity[1] = optionsValues[0]
                                // console.log('newEntity: ', newEntity)
                                setEntity(newEntity)
                            }}
                        />
                    </td>
                    <td>
                        <RadioButton
                            selected={entity ? optionsValues[0] === entity[2] : ''}
                            onClick={() => {
                                const newEntity = [...entity]
                                newEntity[2] = optionsValues[0]
                                // console.log('newEntity: ', newEntity)
                                setEntity(newEntity)
                            }}
                        />
                    </td>
                    <td>
                        <RadioButton
                            selected={entity ? optionsValues[0] === entity[3] : ''}
                            onClick={() => {
                                const newEntity = [...entity]
                                newEntity[3] = optionsValues[0]
                                // console.log('newEntity: ', newEntity)
                                setEntity(newEntity)
                            }}
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        {defaultlabels[1]}
                    </td>
                    <td>
                        <RadioButton
                            selected={entity ? optionsValues[1] === entity[0] : ''}
                            onClick={() => {
                                const newEntity = [...entity]
                                newEntity[0] = optionsValues[1]
                                // console.log('newEntity: ', newEntity)
                                setEntity(newEntity)
                            }}
                        />
                    </td>
                    <td>
                        <RadioButton
                            selected={entity ? optionsValues[1] === entity[1] : ''}
                            onClick={() => {
                                const newEntity = [...entity]
                                newEntity[1] = optionsValues[1]
                                // console.log('newEntity: ', newEntity)
                                setEntity(newEntity)
                            }}
                        />
                    </td>
                    <td>
                        <RadioButton
                            selected={entity ? optionsValues[1] === entity[2] : ''}
                            onClick={() => {
                                const newEntity = [...entity]
                                newEntity[2] = optionsValues[1]
                                // console.log('newEntity: ', newEntity)
                                setEntity(newEntity)
                            }}
                        />
                    </td>
                    <td>
                        <RadioButton
                            selected={entity ? optionsValues[1] === entity[3] : ''}
                            onClick={() => {
                                const newEntity = [...entity]
                                newEntity[3] = optionsValues[1]
                                // console.log('newEntity: ', newEntity)
                                setEntity(newEntity)
                            }}
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        {defaultlabels[2]}
                    </td>
                    <td>
                        <RadioButton
                            selected={entity ? optionsValues[2] === entity[0] : ''}
                            onClick={() => {
                                const newEntity = [...entity]
                                newEntity[0] = optionsValues[2]
                                // console.log('newEntity: ', newEntity)
                                setEntity(newEntity)
                            }}
                        />
                    </td>
                    <td>
                        <RadioButton
                            selected={entity ? optionsValues[2] === entity[1] : ''}
                            onClick={() => {
                                const newEntity = [...entity]
                                newEntity[1] = optionsValues[2]
                                // console.log('newEntity: ', newEntity)
                                setEntity(newEntity)
                            }}
                        />
                    </td>
                    <td>
                        <RadioButton
                            selected={entity ? optionsValues[2] === entity[2] : ''}
                            onClick={() => {
                                const newEntity = [...entity]
                                newEntity[2] = optionsValues[2]
                                // console.log('newEntity: ', newEntity)
                                setEntity(newEntity)
                            }}
                        />
                    </td>
                    <td>
                        <RadioButton
                            selected={entity ? optionsValues[2] === entity[3] : ''}
                            onClick={() => {
                                const newEntity = [...entity]
                                newEntity[3] = optionsValues[2]
                                // console.log('newEntity: ', newEntity)
                                setEntity(newEntity)
                            }}
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        {defaultlabels[3]}
                    </td>
                    <td>
                        <RadioButton
                            selected={entity ? optionsValues[3] === entity[0] : ''}
                            onClick={() => {
                                const newEntity = [...entity]
                                newEntity[0] = optionsValues[3]
                                // console.log('newEntity: ', newEntity)
                                setEntity(newEntity)
                            }}
                        />
                    </td>
                    <td>
                        <RadioButton
                            selected={entity ? optionsValues[3] === entity[1] : ''}
                            onClick={() => {
                                const newEntity = [...entity]
                                newEntity[1] = optionsValues[3]
                                // console.log('newEntity: ', newEntity)
                                setEntity(newEntity)
                            }}
                        />
                    </td>
                    <td>
                        <RadioButton
                            selected={entity ? optionsValues[3] === entity[2] : ''}
                            onClick={() => {
                                const newEntity = [...entity]
                                newEntity[2] = optionsValues[3]
                                // console.log('newEntity: ', newEntity)
                                setEntity(newEntity)
                            }}
                        />
                    </td>
                    <td>
                        <RadioButton
                            selected={entity ? optionsValues[3] === entity[3] : ''}
                            onClick={() => {
                                const newEntity = [...entity]
                                newEntity[3] = optionsValues[3]
                                // console.log('newEntity: ', newEntity)
                                setEntity(newEntity)
                            }}
                        />
                    </td>
                </tr>
            </tbody>
        </RadioButtonsTable>
    )
}

export default RadioButtonsList