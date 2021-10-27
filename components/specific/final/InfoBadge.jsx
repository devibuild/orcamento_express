import { Title2, Title3 } from "../../Text"
import { InfoBadgeContainer } from "./styles"


const InfoBadge = ({
    label,
    value,
    iconSrc
}) => {
    const size = '72px'
    return (
        <InfoBadgeContainer>
            <img src={iconSrc} alt="" width={size}   />
            <Title2 margin='12px' fontWeight='400' fontSize='20px'>
                { label }
            </Title2>
            <Title3 margin='0'>
                { value }
            </Title3>
        </InfoBadgeContainer>
    )
}

export default InfoBadge