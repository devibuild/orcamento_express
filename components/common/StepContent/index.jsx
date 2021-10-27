import { Box, Flex, TitleContainer } from "../../Containers"
import RadioButtons from "../RadioButtons"
import StatusBox from "../StatusBox"
import Select from "./Select"
import { MiddleContainer, StepContentContainer, StepImageContainer, SlideContainer } from "./styles"
import Input from '../../form/Input'
import FinishingPattern from "../FinishingPattern"


const StepContent = ({ data, noStatusBox, small }) => {
    
    if (small) {
        return (
            <>
                {/* <Box height='50px'></Box> */}
                <SlideContainer
                    small
                    // width='100%'
                    // maxHeight='calc(100vh - 200px)'
                    // justifyContent='space-evenly'
                    key={data.title}
                >
                    <StepContentContainer
                        small
                        key={`${data.title}_step_content_container`}
                    >
                        <TitleContainer
                            // margin='50px 0 0'
                            key={`${data.title}_title_container`}
                        >
                            <h4>{data.caption.toUpperCase()}</h4>
                            <h2>{data.title.toUpperCase()}</h2>
                            <p>{data.subtitle}</p>
                        </TitleContainer>
                        {noStatusBox ? (
                            <>
                                {data.options && (
                                    <RadioButtons
                                        options={data.options}
                                        onChange={data.onChange}
                                        select={data.value}
                                    />
                                )}
                                {data.inputs && data.inputs.map((e, i) => (
                                    <Input
                                        value={e.value}
                                        onChange={(event) => e.onChange(event.target.value)}
                                        label={e.label}
                                        placeholder={e.placeholder}
                                        type={e.type ? e.type : 'text'}
                                        margin='10px 0'
                                        width={e.width ? e.width : '100%'}
                                        small
                                        key={e.label}
                                        mask={e.mask}
                                    />
                                ))}
                            </>
                        ) : (
                            <MiddleContainer
                                key={`${data.title}_middle_container`}
                            >
                                {data.options && (
                                    <RadioButtons
                                        options={data.options}
                                        onChange={data.onChange}
                                        select={data.value}
                                        key={`${data.title}_radio_buttons`}
                                    />
                                )}
                                {data.inputs && data.inputs.map((e, i) => (
                                    <Input
                                        value={e.value}
                                        onChange={(event) => e.onChange(event.target.value)}
                                        label={e.label}
                                        placeholder={e.placeholder}
                                        type={e.type ? e.type : 'text'}
                                        margin='10px 0'
                                        width={e.width ? e.width : '100%'}
                                        small
                                        key={e.label}
                                    />
                                ))}
                                {/* <Select /> */}
                            </MiddleContainer>
                        )}
                        {!noStatusBox && (
                            <>
                                {data.withFinishingPattern && (
                                    <FinishingPattern
                                        pattern={data.withFinishingPattern.pattern}
                                        setPattern={data.withFinishingPattern.setPattern}
                                        confort={data.withFinishingPattern.confort}
                                        setConfort={data.withFinishingPattern.setConfort}
                                        small={small}
                                    />
                                )}
                                <StatusBox />
                            </>
                        )}
                    </StepContentContainer>
                </SlideContainer>
            </>
        )
    }

    return (
        <>
            <Box height='50px'></Box>
            <SlideContainer
                // width='100%'
                // maxHeight='calc(100vh - 200px)'
                // justifyContent='space-evenly'
                key={data.title}
            >
                <StepImageContainer
                    key={`${data.title}_step_image_container`}
                >
                    <img style={{ height: '100%' }} src={data.imageSrc ? data.imageSrc : "/images/americana.jpg"} alt="" />
                </StepImageContainer>
                <StepContentContainer
                    key={`${data.title}_step_content_container`}
                >
                    <TitleContainer
                        // margin='50px 0 0'
                        key={`${data.title}_title_container`}
                    >
                        <h4>{data.caption.toUpperCase()}</h4>
                        <h2>{data.title.toUpperCase()}</h2>
                        <p>{data.subtitle}</p>
                    </TitleContainer>
                    {noStatusBox ? (
                        <>
                            {data.options && (
                                <RadioButtons
                                    options={data.options}
                                    onChange={data.onChange}
                                    select={data.value}
                                />
                            )}
                            {data.inputs && data.inputs.map((e, i) => (
                                <Input
                                    value={e.value}
                                    onChange={(event) => e.onChange(event.target.value)}
                                    label={e.label}
                                    placeholder={e.placeholder}
                                    type={e.type ? e.type : 'text'}
                                    margin='10px 0'
                                    width={e.width ? e.width : '100%'}
                                    small
                                    key={e.label}
                                    mask={e.mask}
                                />
                            ))}
                        </>
                    ) : (
                        <MiddleContainer
                            key={`${data.title}_middle_container`}
                        >
                            {data.options && (
                                <RadioButtons
                                    options={data.options}
                                    onChange={data.onChange}
                                    select={data.value}
                                    key={`${data.title}_radio_buttons`}
                                />
                            )}
                            {data.inputs && data.inputs.map((e, i) => (
                                <Input
                                    value={e.value}
                                    onChange={(event) => e.onChange(event.target.value)}
                                    label={e.label}
                                    placeholder={e.placeholder}
                                    type={e.type ? e.type : 'text'}
                                    margin='10px 0'
                                    width={e.width ? e.width : '100%'}
                                    small
                                    key={e.label}
                                />
                            ))}
                            {/* <Select /> */}
                        </MiddleContainer>
                    )}
                    {!noStatusBox && (
                        <>
                            {data.withFinishingPattern && (
                                <FinishingPattern
                                    pattern={data.withFinishingPattern.pattern}
                                    setPattern={data.withFinishingPattern.setPattern}
                                    confort={data.withFinishingPattern.confort}
                                    setConfort={data.withFinishingPattern.setConfort}
                                />
                            )}
                            <StatusBox />
                        </>
                    )}
                </StepContentContainer>
            </SlideContainer>
        </>
    )
}

export default StepContent