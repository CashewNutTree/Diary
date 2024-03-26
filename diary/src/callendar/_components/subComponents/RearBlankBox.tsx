/**
 * 달력 뒤쪽에 있는 빈 칸
 * @returns
 */
import styled from "styled-components";

const RearBlankBox = (props: any) => {
    const {rearBlankSize} = props;
    // 날짜 셀 스타일
    const DateCell = styled.div`
    border: 0.5px solid #aaa;
    text-align: center;
    margin: 1px;
  `;
    return (
        <>
            {Array.from({length: rearBlankSize}).map((_, idx) => (
                <DateCell key={idx}>
                    <span></span>
                </DateCell>
            ))}
        </>
    );
};

export default RearBlankBox;
