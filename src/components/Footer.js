import React from 'react'
import styled from 'styled-components'

function Footer() {
	return (
		<FooterWrapper>
			©Performance Optimization Lecture for React
		</FooterWrapper>
	)
}

const FooterWrapper = styled.div`
  text-align: center;
  padding: 32px 0;
`

export default Footer
