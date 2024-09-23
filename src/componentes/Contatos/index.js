import git from '../../img/githubwhite.png'
import linkedin from '../../img/linkedin.png'
import wpp from '../../img/wpp.png'
import styled from 'styled-components'


const wppLink = process.env.REACT_APP_WPP;
console.log('aaaa',wppLink);

const ContatosContainer = styled.section`
    margin-left: 14vw;
    @media (max-width: 768px){
    align-items: center;
    margin-left: 0px;
  }
`
const ImagensCont = styled.img`
    max-height: 3vw;
    margin-left: 2vw;

    ${({ id }) => id === 'git' &&`
    border-radius: 5px;
    `}

    @media (max-width: 768px){
    align-items: center;
    margin: 1vw 2vw;
    max-height: 7vw;
  }
`

function Contatos(){
    return(
        <ContatosContainer>
            <a href='https://github.com/FelipeStemp' target="_blank" rel="noopener noreferrer">
                <ImagensCont id='git' src={git} alt="GitHub" />
            </a>
            
            <a href='https://www.linkedin.com/in/felipe-stempkowski/' target="_blank" rel="noopener noreferrer">
                <ImagensCont src={linkedin} alt="LinkedIn" />
            </a>

            <a href={wppLink} target="_blank" rel="noopener noreferrer">
                <ImagensCont src={wpp} alt="WhatsApp" />
            </a>
        </ContatosContainer>
    )
}

export default Contatos