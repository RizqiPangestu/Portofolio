import styled from 'styled-components'

export const FrameworkContainer = styled.div`
    background: #f9f9f9;
`

export const FrameworkWrapper = styled.div`
    display: flex;
    justify-content: center;
`
export const FrameworkList = styled.div`
    display: grid;
    gap: 10px;
    grid-template-columns: auto auto auto auto auto auto auto auto;
    align-items: center;
    @media screen and (max-width: 1000px){
        grid-template-columns: auto auto auto auto auto;
    }
    @media screen and (max-width: 768px){
        grid-template-columns: auto auto;
    }
`

export const ColumnWrapper = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
`

export const ImgWrap = styled.div`
    max-width: 250px;
    height: 100%;
`

export const Img = styled.img`
    width: 100%;
`