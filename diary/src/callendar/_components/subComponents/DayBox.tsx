import styled from "styled-components";

const DayBox = () => {
    const DayCell = styled.div`
    border: 0.5px solid white;
    padding: 10px;
    text-align: center;
    background-color: #52c9f8;
    color: white;
  `;

    const days = [
        "일요일",
        "월요일",
        "화요일",
        "수요일",
        "목요일",
        "금요일",
        "토요일",
    ];
    return (
        <>
            {days.map((data, idx) => (
                <DayCell key={data}>{data}</DayCell>
            ))}
        </>
    );
};

export default DayBox;
