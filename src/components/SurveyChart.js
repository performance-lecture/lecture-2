import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import SurveyItem from './SurveyItem'


const SurveyChart = () => {
    const [answer, setAnswer] = useState([])
    const [survey, setSurvey] = useState([])
    const [filter, setFilter] = useState({})

    useEffect(() => {
        Promise.all([
            fetch('http://localhost:3001/answer').then((res) => res.json()),
            fetch('http://localhost:3001/survey').then((res) => res.json())
        ])
            .then(([answer, survey]) => {
                setAnswer(answer.data)
                setSurvey(survey)
            })
    }, [])


    const toggleFilter = (questionIndex, itemIndex) => {
        let _filter = Object.assign({}, filter);
        if(_filter.hasOwnProperty(questionIndex) && _filter[questionIndex] === itemIndex) {
            delete _filter[questionIndex]
        } else {
            _filter[questionIndex] = itemIndex
        }
        setFilter(_filter)
    }

    // 선택한 항목에 대한 답변만 필터링
    let filteredAnswer = answer.filter((item) => {
        var keys = Object.keys(filter)
        for(let i = 0; i < keys.length; i++) {
            if(filter[keys[i]] !== item[keys[i]])
                return false
        }
        return true
    })

    // 답변 정보를 항목별 통계 정보로 재가공
    let chartData = {}
    for(let i = 0; i < filteredAnswer.length; i++) {
        for(let j = 0; j < filteredAnswer[i].length; j++) {
            if(!chartData.hasOwnProperty(j)) {
                chartData[j] = {}
            }
            if(!chartData[j].hasOwnProperty(filteredAnswer[i][j])) {
                chartData[j][filteredAnswer[i][j]] = 0
            }
            chartData[j][filteredAnswer[i][j]]++
        }
    }

    return (
        <SurveyChartWrapper>
            <SurveyChartTitle>설문 결과</SurveyChartTitle>
            {survey.map((item, index) => (
                <SurveyItem 
                    key={`survey-item-${index}`} 
                    data={chartData[index] || {}} 
                    survey={item}
                    toggleFilter={toggleFilter}
                    selectedItem={filter[index]}
                />
            ))}
        </SurveyChartWrapper>
    )
}

const SurveyChartWrapper = styled.div`
    padding: 150px 20px 60px 20px; 
    max-width: 800px;
    margin: auto;
    box-sizing: border-box;
`

const SurveyChartTitle = styled.div`
    text-align: center;
    font-size: 2em;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.5);
    padding-bottom: 20px;
`

export default SurveyChart
