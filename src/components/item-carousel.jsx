import React from 'react'
import styled from 'styled-components'

const ContainerCarousel = styled.div`
display: flex;

padding: 10px;
`

const Item = styled.div`
border: 1px solid black;
border-radius: 100%;
width: 200px;
height: 200px;
margin: 20px;
`;

const items = () => {

    if(screen.width < 870){
        console.log(screen.width)
        return(
            <div>
            <ContainerCarousel>
            <Item></Item>
            <Item></Item>
            </ContainerCarousel>
            </div>
            );
        }
return(
    <div>
    <ContainerCarousel>
    <Item></Item>
    <Item></Item>
    <Item></Item>
    </ContainerCarousel>
    </div>
    );
}



  export default items;     