import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPen,
  faRectangleXmark,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import RegisterScheduleModal from "./RegisterScheduleModal";
import {
  ButtonArea,
  ContentSaveBtn,
  ManageBox,
  ScheduleContentDiv,
  ScheduleContentHeader,
  SerialBtn,
  Time,
} from "../../Style";
import { useAtom } from "jotai";
import { selectScheduleList } from "../../_api/callendar";

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
const ManageComponent = (props: any) => {
  const { chooseDate } = props;
  const [isOpenedRegisterScheduleModal, setIsOpenedRegisterScheduleModal] =
    useState<boolean>(false); // 스케줄 등록 모달

  const [scheduleList, setScheduleList] = useState<any>([]);
  /**
   * 스케쥴러 등록 화면 호출
   */
  const openRegisterScheduleModal = () => {
    setIsOpenedRegisterScheduleModal(true);
  };

  /**
   * 스케쥴 목록 조회
   */
  const fetchScheduleList = async () => {
    console.log("스케쥴 목록 조회");
    const param = {
      chooseDate: chooseDate,
    };
    const response = await selectScheduleList(param);
    console.log(response);
    if (response) {
      setScheduleList(response.data);
    }
  };

  useEffect(() => {
    fetchScheduleList();
  }, [chooseDate]);

  return (
    <ManageBox>
      {scheduleList.length > 0 && (
        <>
          {scheduleList.map((data: any, idx: number) => (
            <ScheduleContentDiv key={idx}>
              <ScheduleContentHeader>
                {/* 시작 시간 */}
                <div>
                  <SerialBtn>
                    <span>{idx + 1}</span>
                  </SerialBtn>
                  <Time>{data.strtTime}</Time> ~<Time>{data.endTime}</Time>
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
              <span>{data.calendarCnts}</span>
              {/* <ScheduleContentsInput /> */}
              &nbsp;&nbsp;
            </ScheduleContentDiv>
          ))}
        </>
      )}

      <ButtonArea>
        {/* <ButtonGroupDiv> */}
        <ContentSaveBtn
          onClick={() => {
            openRegisterScheduleModal();
          }}
        >
          <span>
            신규 &nbsp;
            <FontAwesomeIcon icon={faPen} style={{ color: "white" }} />
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

      {isOpenedRegisterScheduleModal && (
        <RegisterScheduleModal
          closeModal={() =>
            //조타이 사용 예시

            setIsOpenedRegisterScheduleModal(false)
          }
        ></RegisterScheduleModal>
      )}
    </ManageBox>
  );
};

export default ManageComponent;
