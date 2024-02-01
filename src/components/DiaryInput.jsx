import React, { useState } from 'react'
import { Input, Button } from 'antd';
import styled from 'styled-components';

const { TextArea } = Input;

const DiaryInput = ({ isLoading, onSubmit }) => {
  // 입력을 받아 상위 컴포넌트로 데이터를 전달
  const [ userInput, setUserInput ] = useState("")
  // loading 처리 중일 땐 input disabled

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleClick = ()=>{
    onSubmit(userInput);
  };


  return (
  <InputWrapper>
    <TextArea rows={4} value={userInput} onChange={handleChange} placeholder="Please write down your day!"/>
    <br/> 
    <Button loading={isLoading} onClick={handleClick}>GPT Submit</Button>
    {/* button attribute loading == true : button is disabled. */}
  </InputWrapper>
  )
}

export default DiaryInput;



const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin: 10px auto;
  max-width: 720px;
  width: 100%;
`;