import React from 'react'
import styled from 'styled-components'
import Bar from './Bar'

const SurveyItem = (props) => {
    let total = Object.values(props.data).reduce((a, b) => a + b, 0)
    return (
        <div className="SurveyItem">
            <Question>Q{props.survey.no + 1}. {props.survey.question}</Question>
            <div>
                {props.survey.items.map((item, index) => {
                    let percent = props.data.hasOwnProperty(index) ? (props.data[index] / total * 100).toFixed(1) : 0
                    return (
                        <Bar 
                            key={`bar-item-${index}`} 
                            percent={percent} 
                            itemValue={item} 
                            count={props.data[index]} 
                            handleClickBar={() => {props.toggleFilter(props.survey.no - 1, index)}}
                            isSelected={props.selectedItem === index}
                        />
                    )
                })}
            </div>
        </div>
    )
}

const Question = styled.div`
    font-weight: 500;
    font-size: 1.03em;
    padding: 25px 0 8px 0;
    text-align: left;
`

export default SurveyItem
