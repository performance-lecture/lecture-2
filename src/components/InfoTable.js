import React from 'react'
import styled from 'styled-components'

const InfoTable = () => {
    return (
        <InfoTableWrapper>
            <Table><tbody>
                <TR>
                    <TH></TH>
                    <RioTH>리우 올림픽</RioTH>
                    <LondonTH>런던 올림픽</LondonTH>
                </TR>
                <TR>
                    <TH>기간</TH>
                    <RioTD>8월 5일 ~ 8월 21일</RioTD>
                    <LondonTD>7월 27일 ~ 8월 12일</LondonTD>
                </TR>
                <TR>
                    <TH>개최지</TH>
                    <RioTD>브라질, 리우</RioTD>
                    <LondonTD>영국, 런던</LondonTD>
                </TR>
                <TR>
                    <TH>참가 선수</TH>
                    <RioTD>11,238</RioTD>
                    <LondonTD>10,568</LondonTD>
                </TR>
                <TR>
                    <TH>참가국</TH>
                    <RioTD>207</RioTD>
                    <LondonTD>204</LondonTD>
                </TR>
                <TR>
                    <TH>종목 수</TH>
                    <RioTD>306</RioTD>
                    <LondonTD>302</LondonTD>
                </TR>
            </tbody></Table>
        </InfoTableWrapper>
    )
}

const InfoTableWrapper = styled.div`
    padding 90px 50px 50px 50px;
    text-align: center;
    max-width: 800px;
    margin: auto;
    box-sizing: border-box;
`
const Table = styled.table`
    width: 100%;
    font-size: 1.05em;
    font-weight: 400;
`
const TR = styled.tr`
`
const TH = styled.th`
    padding: 15px 5px;
    font-weight: 600;
    background: #e7e7e7;
    color: #555;
`
const RioTH = styled(TH)`
    background: #92278f;
    color: #fff;
`
const LondonTH = styled(TH)`
    background: #63b330;
    color: #fff;
`
const TD = styled.td`
    padding: 15px 5px;
    background: #e7e7e7;
`
const RioTD = styled(TD)`

`
const LondonTD = styled(TD)`

`

export default InfoTable
