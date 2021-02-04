/* 
import React from 'react'
import { Form } from 'antd'
import RulesValidator from '../../../utils/utils.rules.validator'
import styled, {css} from 'styled-components'
import {Link} from 'react-router-dom'

const buttonStyle = css'
    border: none;
';

const StyledButton = styled.button'
    ${buttonStyle}
';

const Button = props => {
    return props.to ? (
        <StyledLink {...props} cyan={props.cyan ? 1 : 0} />
    ) : {
        <StyledButton {...props}/>
    };
};
*/