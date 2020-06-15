import React from 'react'
import styled from 'styled-components'

const Bar = (props) => {
    return (
        <BarWrapper onClick={props.handleClickBar} isSelected={props.isSelected}>
            <BarInfo>
                <Percent>{props.percent}%</Percent>
                <ItemVaue>{props.itemValue}</ItemVaue>
                <Count>{props.count}</Count>
            </BarInfo>
            <BarGraph width={props.percent} isSelected={props.isSelected}></BarGraph>
        </BarWrapper>
    )
}

const BarWrapper = styled.div`
    position: relative;
    margin-bottom: 3px;
    padding: 8px 0;
    background: ${({isSelected}) => isSelected ? '#dddddd' : '#f3f3f3'};
`
const BarInfo = styled.div`
    width: 100%;
    display: flex;
    z-index: 2;
    position: relative;
`
const Percent = styled.span`
    text-align: right;
    min-width: 70px;
    flex: 0 0 auto;
`
const ItemVaue = styled.span`
    padding-left: 60px;
    flex: 1 1 0%;
`
const Count = styled.span`
    padding-right: 20px;
    flex: 0 0 auto;
`
const BarGraph = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: ${({width}) => width}%;
    transition: width 1.5s ease;
    height: 100%;
    background: ${({isSelected}) => isSelected ? 'rgba(126, 198, 81, 0.7)' : 'rgb(198, 198, 198)'};
    z-index: 1;
`

export default Bar
