import { useEffect } from "react";
import styled from "styled-components";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const YearMonthComponent = ({
  year,
  month,
  movePrevMonth,
  moveNextMonth,
}: {
  year: any;
  month: any;
  movePrevMonth: any;
  moveNextMonth: any;
}) => {
  const YearMonthBox = styled.div`
    display: flex;
    width: 100%;
  `;
  const YearMonthDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
  `;

  const MoveMonthBtn = styled.button`
    width: 3%;
    text-align: center;
    border: 1px solid black;
    margin: 10px;
    color: #52c9f8;
    background-color: white;
    border: none;
    cursor: pointer;
    font-size: 1em;

    &:hover {
      color: #8fe100; /* hover 상태에서의 글씨색 */
    }
  `;

  const MonthBtn = styled.button`
    width: 20%;
    text-align: center;
    height: 50px;
    margin: 10px;
    color: white;
    background-color: #52c9f8;
    border: none;
    cursor: pointer;
    border-radius: 0.2em;

    &:hover {
      background-color: #8fe100; /* hover 상태에서의 배경색 */
    }
  `;

  useEffect(() => {}, [year, month]);
  const previousMonth = () => {};
  return (
    <YearMonthBox>
      <YearMonthDiv>
        <MoveMonthBtn onClick={movePrevMonth}>
          <FontAwesomeIcon
            icon={faCaretLeft}
            style={{
              color: "#52c9f8",
              width: "1em",
              marginRight: "0.5em",
            }}
          />
        </MoveMonthBtn>
        <MonthBtn>
          {year}년 {month + 1}월
        </MonthBtn>
        <MoveMonthBtn onClick={moveNextMonth}>
          <FontAwesomeIcon
            icon={faCaretRight}
            style={{
              color: "#52c9f8",
              width: "1em",
              marginRight: "0.5em",
            }}
          />
        </MoveMonthBtn>
      </YearMonthDiv>
    </YearMonthBox>
  );
};

export default YearMonthComponent;
