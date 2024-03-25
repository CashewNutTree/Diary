import { useEffect } from "react";
import styled from "styled-components";
/**
 * 달력 숫자 칸
 */
const DateBox = ({ days }: { days: any }) => {
  // 날짜 셀 스타일
  const DateCell = styled.div`
    border: 0.5px solid #aaa;
    text-align: center;
    margin: 1px;
    height: 70px;
    display: flex;
    justify-content: center;

    &:hover {
      color: #52c9f8;
    }
  `;
  useEffect(() => {}, [days]);
  return (
    <>
      {days?.length > 0 && (
        <>
          {days.map((data: any, idx: any) => (
            <DateCell
              key={data.date}
              onClick={() => {
                alert(data.date);
              }}
            >
              {data.date}
            </DateCell>
          ))}
        </>
      )}
    </>
  );
};

export default DateBox;
