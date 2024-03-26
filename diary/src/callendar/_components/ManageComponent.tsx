import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faPen,
    faRectangleXmark,
    faXmark,
} from "@fortawesome/free-solid-svg-icons";

/**
 * 좌측 달력에서 선택한 일정을 관리하는 화면
 *
 * TO DO :
 * 신규 버튼을 눌렀을 때 모달 창 추가
 * 삭제 버튼을 눌렀을 때 삭제
 * alert 대신 알림창 라이브러리 활용
 * 좌측 달력에 추가되도록 작업
 *
 *
 * @returns
 */
const ManageComponent = () => {
    const ManageBox = styled.div`
    width: 80%;
    height: 80%;
    overflow: auto;
  `;

    const ScheduleContentDiv = styled.div`
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

    const ScheduleContentInput = styled.input`
    width: 80%;
    height: 10%;
    // background-color: lightgray;
    border: 1px solid lightgray;
    border-radius: 0.2em;
    padding: 0.2em;
    margin: 0.5em;
  `;

    const ButtonArea = styled.div`
    width: 80%;
    display: flex;
    justify-content: right;
    margin: 0.5em;
    padding: 0.1em;
  `;

    const ButtonGroupDiv = styled.div`
    display: flex;
    justify-content: right;
  `;

    const ContentSaveBtn = styled.button`
    background-color: #52c9f8;
    border-radius: 0.2em;
    border: none;
    color: white;
    padding: 0.5em;
  `;

    const Time = styled.button`
    width: 4em;
    border: 0.1em solid #eee;
    margin: 0.2em;
    background-color: #52c9f8;
    border-radius: 0.3em;
    color: white;
  `;

    const ScheduleContentsInput = styled.input`
    border: none;
    margin-left: 1em;
    width: 20em;
  `;

    const DeleteBtn = styled.button`
    margin-bottom: 1em;
    width: 2em;
    height: 2em;
    font-size: 0.5em;
  `;

    const ScheduleContentHeader = styled.div`
    display: flex;
    justify-content: space-between;
  `;

    const SerialBtn = styled.button`
    background-color: darkgray;
    color: white;
    font-style: weight;
    border-radius: 0.1em;
    border: 1px solid eee;
  `;

    return (
        <ManageBox>
            <ScheduleContentDiv>
                <ScheduleContentHeader>
                    {/* 시작 시간 */}
                    <div>
                        <SerialBtn>
                            <span>1</span>
                        </SerialBtn>
                        <Time>09:00</Time> ~<Time>10:00</Time>
                    </div>
                    <FontAwesomeIcon
                        icon={faRectangleXmark}
                        style={{
                            color: "gray",
                            width: "1em",
                            marginRight: "0.5em",
                        }}
                    />
                </ScheduleContentHeader>
                {/* <div>1</div> */}
                {/* 내용 */}
                <span>이진경의 멋진 아침 브런치</span>
                {/* <ScheduleContentsInput /> */}
                &nbsp;&nbsp;
            </ScheduleContentDiv>

            <ScheduleContentDiv>
                <ScheduleContentHeader>
                    {/* 시작 시간 */}
                    <div>
                        <SerialBtn>
                            <span>2</span>
                        </SerialBtn>
                        <Time>09:00</Time> ~<Time>10:00</Time>
                    </div>
                    <FontAwesomeIcon
                        icon={faRectangleXmark}
                        style={{
                            color: "gray",
                            width: "1em",
                            marginRight: "0.5em",
                        }}
                    />
                </ScheduleContentHeader>
                {/* <div>1</div> */}
                {/* 내용 */}
                <span>이진경의 멋진 아침 브런치</span>
                {/* <ScheduleContentsInput /> */}
                &nbsp;&nbsp;
            </ScheduleContentDiv>

            <ButtonArea>
                {/* <ButtonGroupDiv> */}
                <ContentSaveBtn onClick={() => {
                }}>
          <span>
            신규 &nbsp;
              <FontAwesomeIcon icon={faPen} style={{color: "white"}}/>
          </span>
                </ContentSaveBtn>
                {/* <ContentSaveBtn>
          <span>
            저장 &nbsp;
            <FontAwesomeIcon icon={faCheckCircle} style={{ color: "white" }} />
          </span>
        </ContentSaveBtn> */}
                {/* </ButtonGroupDiv> */}
            </ButtonArea>
        </ManageBox>
    );
};

export default ManageComponent;
