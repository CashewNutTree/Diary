import { useEffect } from "react";
import styled from "styled-components";

/**
 * 달력 앞쪽에 있는 빈 칸 정보
 *
 * 1일이
 * @returns
 */
const FrontBlankBox = (props: any) => {
  const DateCell = styled.div`
    border: 0.5px solid #aaa;
    text-align: center;
    margin: 1px;
  `;
  const { frontBlankSize, prevDatePassed, choiceCurrentDate } = props;
  useEffect(() => {}, []);
  return (
    <>
      {prevDatePassed.map((data: any, idx: any) => (
        <DateCell
          key={data.date}
          onClick={() => {
            choiceCurrentDate(data.date);
          }}
        >
          {data.date}
        </DateCell>
      ))}

      {Array.from({ length: frontBlankSize }).map((_, idx) => (
        <DateCell key={idx}>
          <span></span>
        </DateCell>
      ))}
    </>
  );
};

export default FrontBlankBox;
