import React, { useState } from 'react'
import { Input, Button, message } from 'antd';
import styled from 'styled-components';
import { Title } from './CommonStyles';
const { TextArea } = Input;

const DiaryInput = ({ isLoading, onSubmit }) => {
  const [ userInput, setUserInput ] = useState("")
  const [messageApi, contextHolder] = message.useMessage();
  
  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleClick = ()=>{
    if(!userInput) {
      messageApi.open({
        type: "error",
        content: "Please write down your day.",
      });
      return;
    }

    messageApi.open({
      type: "success",
      content: "GPT is working on your diary. Please wait."
    });

    onSubmit(userInput);
    setUserInput("");
  };


  return (
  <InputWrapper>
      {contextHolder}
      <Title>What did you to today?</Title>
    <TextArea rows={4} value={userInput} onChange={handleChange}     placeholder="Please write down your day!"
      style={{ height: "200px"}}
    />
    <br/> 
    <Button loading={isLoading} onClick={handleClick}>GPT Submit</Button>
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
