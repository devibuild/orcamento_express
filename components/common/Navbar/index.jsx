import { Flex } from '../../Containers'
import { LogoIcon, NavContainer, NavItem, StyledNav, Triangle } from './styles'
import Link from 'next/link'

const Navbar = () => {
    return (
        <NavContainer>
            <StyledNav>
                <div style={{ cursor: 'pointer' }}>
                    <Link href='/'>
                        <LogoIcon src="/images/icone_vermelho.svg" alt="" />
                    </Link>
                </div>
                <Flex
                    margin='0 10px 0 0'
                >
                    {/* <Link href='/cadastro'>
                        <NavItem>
                            SEU CADASTRO
                        </NavItem>
                    </Link> */}
                    {/* / */}
                    <Link href='/recursos'>
                        <NavItem>
                            INÍCIO
                        </NavItem>
                    </Link>
                    /
                    <Link href='/levantamento'>
                        <NavItem>
                            LEVANTAMENTO DE RECURSOS
                        </NavItem>
                    </Link>
                    /
                    <Link href='/simular'>
                        <NavItem>
                            MONTE SUA CASA
                        </NavItem>
                    </Link>
                </Flex>
            </StyledNav>
            <Triangle />
        </NavContainer>
    )
}

export default Navbar