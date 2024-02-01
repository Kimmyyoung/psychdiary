import React, {useState} from 'react';
import { gptConnect } from './api/gpt';
import DiaryInput from './components/DiaryInput';
import styled from 'styled-components';
import DiaryDisplay from './components/DiaryDisplay';

const dummyData = JSON.parse(
  `{ "title": "Diary Title", "thumbnail": "https://source.unsplash.com/1600x900/?coding", "summary": "Here would be summary of diary", "emotional_content": "Here would be content of diary", "emotional_result": "Here would be result of diary", "analysis": "Here would be analysis of diary", "action_list": ["Action no.1", "Action no.2", "Action no.3"] }`
);




function App() {
  const [data, setData] = useState(dummyData);
  const [ loading, setLoading ] = useState(false);

  const handleGPT = async(userInput)=> {
    try{
      setLoading(true);
      const message = await gptConnect({prompt : `${userInput}`});
      console.log(message);
      
      setData(JSON.parse(message));
    }catch(err){
      console.error(err);
    }finally{
      setLoading(false);
    }
  };


  const handleSubmit = (userInput)=>{
    handleGPT(userInput)
  };

  return (
    <AppContainer>
      <AppTitle>
        AI Psychology Diary
      </AppTitle>
    <DiaryInput isLoading={loading} onSubmit={handleSubmit}/>

    <DiaryDisplay data={data} isLoading={loading}/>
     {/* <button onClick={handleGPT}>Connect</button> */}

    </AppContainer>
  )
}

export default App

const AppContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  max-width: 720px;
  width: 100%;
  margin: 0 auto;
`;

const AppTitle = styled.div`
  width: 100%;
  font-weight: 400;
  font-size: 24px;
  text-align: center;
  font-family: "Quicksand", sans-serif;
  font-weight: 600;
`