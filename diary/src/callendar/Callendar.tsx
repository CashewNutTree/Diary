import { useEffect, useState } from "react";
import {
  DateComponent,
  ManageComponent,
  YearMonthComponent,
} from "./_components";
import styled from "styled-components";

const Callendar = () => {
  const CallendarContainer = styled.div`
    width: 50%;
  `;

  const CallendarBox = styled.div`
    width: 80%;
  `;

  const ManageContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const [year, setYear] = useState(new Date().getFullYear()); // 기본 : 현재 년도
  const [month, setMonth] = useState(new Date().getMonth()); // 기본 : 현재 월 (월은 0부터 시작)
  const [frontBlankSize, setFrontBlankSize] = useState(0); // 앞부분 빈 칸
  const [currentMonthLastDate, setCurrentMonthLastDate] = useState<Date>(); // 현재월의 마지막 일자
  const [prevLastDate, setPrevLastDate] = useState<Date>(); //

  const [chooseDate, setChooseDate] = useState();

  //현재 월의 첫번째 일자의 요일
  const [currentFirstDay, setCurrentFirstDay] = useState<number>(
    new Date(new Date().getFullYear(), new Date().getMonth(), 1).getDay()
  );

  function movePrevMonth() {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  }

  function moveNextMonth() {
    if (month === 11) {
      setYear(year + 1);
      setMonth(0);
    } else {
      setMonth(month + 1);
    }
  }

  /**
   * 필요한 정보
   *
   * 해당 월의 1일에 해당하는 요일 --> 앞의 빈칸의 개수
   * 해당 월의 마지막 일자 --> 앞의 빈칸 개수와 마지막 일자를 봤을 때 합한 수가 만약에 35를 넘는다면
   * 초과되기 전의 숫자까지만 그려줘야하고 초과되는 만큼 다음달 달력에서 그려줘야 한다.
   *
   * 이번달에서 다음달로 넘어갈 때 :: 넘겨야하는 정보 ex) 30,31일
   *
   * 이번달에서 지난달로 넘어갈 때 :: 지지난달에서 빈칸 개수와 마지막 일자를 봤을 때 합한 수가 35를 넘는다면 마찬가지로 이번달 달력에서부터 그려줘야 한다.
   *
   */
  useEffect(() => {}, []);
  return (
    <>
      <div style={{ display: "flex", margin: "1em" }}>
        <CallendarContainer>
          {/* 년월 */}
          <YearMonthComponent
            year={year}
            month={month}
            movePrevMonth={movePrevMonth}
            moveNextMonth={moveNextMonth}
          />

          {/* 일자 */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <DateComponent year={year} month={month} />
          </div>
        </CallendarContainer>

        <ManageContainer>
          <ManageComponent></ManageComponent>
        </ManageContainer>
      </div>
    </>
  );
};

export default Callendar;
