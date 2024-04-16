import styled from "styled-components";

export const ManageBox = styled.div`
  width: 80%;
  height: 80%;
  overflow: auto;
`;

export const ScheduleContentDiv = styled.div`
  width: 80%;
  height: 15%;
  background-color: #eee;
  border: none;
  border-radius: 0.2em;
  padding-top: 0.7em;
  padding-left: 0.5em;
  margin: 0.5em;
  position: "relative";
`;

export const ScheduleContentInput = styled.input`
  width: 80%;
  height: 10%;
  // background-color: lightgray;
  border: 1px solid lightgray;
  border-radius: 0.2em;
  padding: 0.2em;
  margin: 0.5em;
`;

export const ButtonArea = styled.div`
  width: 80%;
  display: flex;
  justify-content: right;
  margin: 0.5em;
  padding: 0.1em;
`;

export const ButtonGroupDiv = styled.div`
  display: flex;
  justify-content: right;
`;

export const ContentSaveBtn = styled.button`
  background-color: #52c9f8;
  border-radius: 0.2em;
  border: none;
  color: white;
  padding: 0.5em;
`;

export const Time = styled.button`
  width: 4em;
  border: 0.1em solid #eee;
  margin: 0.2em;
  background-color: #52c9f8;
  border-radius: 0.3em;
  color: white;
`;

export const ScheduleContentsInput = styled.input`
  border: none;
  margin-left: 1em;
  width: 20em;
`;

export const DeleteBtn = styled.button`
  margin-bottom: 1em;
  width: 2em;
  height: 2em;
  font-size: 0.5em;
`;

export const ScheduleContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SerialBtn = styled.button`
  background-color: darkgray;
  color: white;
  font-style: weight;
  border-radius: 0.1em;
  //   border: 1px solid eee;
`;
