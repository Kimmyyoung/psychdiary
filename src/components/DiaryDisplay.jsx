import {
  DiaryContainer,
  ResultTitle,
  Divider,
  CardContainer,
  CardTitle,
  CardContent,
  ActionListItem,
} from "./CommonStyles";

import {
  LoadingOutlined,
  CheckCircleTwoTone,
  HeartTwoTone,
  SmileTwoTone,
  MessageTwoTone,
  SoundTwoTone,
} from "@ant-design/icons";
import { Image } from "antd";
import styled from "styled-components";

const ThumbnailImage = styled(Image)`
  max-width: 100%;
  border-radius: 8px;
  margin-bottom: 15px;
`;

const DiaryDisplay = ({ data, isLoading }) => {
  return (
    <DiaryContainer>
      {isLoading && (
        <>
          <LoadingOutlined />
        </>
      )}
      <ResultTitle>{data.title}</ResultTitle>

      <Divider />
      <CardContainer>
        <CardTitle>
          <CheckCircleTwoTone
            twoToneColor="#FF9AA2"
            style={{ marginRight: "6px" }}
          />
          Summary
        </CardTitle>
        <CardContent>{data.summary}</CardContent>
      </CardContainer>

      <ThumbnailImage src={data.thumbnail} alt="Thumbnail" />

      <Divider />
      <CardContainer>
        <CardTitle>
          <HeartTwoTone twoToneColor="#FFB7B2" style={{ marginRight: "6px" }} />
          Diary
        </CardTitle>
        <CardContent>{data.emotional_content}</CardContent>
      </CardContainer>

      <Divider />
      <CardContainer>
        <CardTitle>
          <SmileTwoTone twoToneColor="#FFDAC1" style={{ marginRight: "6px" }} />
          My Emotion
        </CardTitle>
        <CardContent>{data.emotional_result}</CardContent>
      </CardContainer>

      <Divider />
      <CardContainer>
        <CardTitle>
          <MessageTwoTone
            twoToneColor={"#B5EAD7"}
            style={{ marginRight: "6px" }}
          />
          Psychological Analysis
        </CardTitle>
        <CardContent>{data.analysis}</CardContent>
      </CardContainer>

      <Divider />
      <CardContainer>
        <CardTitle>
          <SoundTwoTone twoToneColor="#C7CEEA" style={{ marginRight: "6px" }} />
          Advice
        </CardTitle>
        <CardContent>
          {data.action_list.map((action, index) => (
            <ActionListItem key={index}>{action}</ActionListItem>
          ))}
          {/* <ActionListItem>{data.action_list[0]}</ActionListItem>
          <ActionListItem>{data.action_list[1]}</ActionListItem>
          <ActionListItem>{data.action_list[2]}</ActionListItem> */}
        </CardContent>
      </CardContainer>
    </DiaryContainer>
  );
};

export default DiaryDisplay;