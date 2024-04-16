import { useEffect, useState } from "react";
import DateBox from "./subComponents/DateBox";
import FrontBlankBox from "./subComponents/FrontBlankBox";
import RearBlankBox from "./subComponents/RearBlankBox";
import DayBox from "./subComponents/DayBox";
import differenceInDays from "date-fns/differenceInDays";

/**
 * 일자 정보
 * @returns
 */
const DateComponent = (props: any) => {
  const { year, month, choiceCurrentDate } = props;
  // const [currentMonthLastDate, setCurrentMonthLastDate] = useState<Date>(); // 현재월의 마지막 일자
  // const [prevLastDate, setPrevLastDate] = useState<number>(); // 지난달월의 마지막 일자
  const [prevDatePassed, setPrevDatePassed] = useState<
    { year: number; month: number; date: number; day: number }[]
  >([]);
  const [frontBlankSize, setFrontBlankSize] = useState(0); // 앞부분 빈 칸
  const [rearBlankSize, setRearBlankSize] = useState(0); // 뒷부분 빈 칸

  //현재 월의 첫번째 일자의 요일
  // const [currentFirstDay, setCurrentFirstDay] = useState<number>(
  //   new Date(new Date().getFullYear(), new Date().getMonth(), 1).getDay()
  // );
  //지난 월 첫번째 일자의 요일
  // const [prevFirstDay, setPrevFirstDay] = useState<number>(
  //   new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1).getDay()
  // );
  const [days, setDays] = useState<
    { year: number; month: number; date: number; day: number }[]
  >([]);

  function getDaysInMonth(year: number, month: number) {
    const currentFirst = new Date(year, month);
    const currentLast = new Date(year, month + 1, 0).getDate();

    const prevFirst = new Date(year, month - 1);
    const prevLast = new Date(year, month, 0).getDate();

    const currentFirstDay = new Date(year, month).getDay();
    const currentLastDay = new Date(year, month - 1).getDay();

    findFrontBlankSize(currentFirstDay, currentLast, currentLastDay, prevLast);
  }

  function findFrontBlankSize(
    currentFirstDay: any,
    currentLastDate: any,
    prevFirstDay: any,
    prevLastDate: any
  ) {
    let frontBlank = 0;
    // 0: 토 1:일 2:월 3:화 4:수 5:목 6:금
    const prevPassed = 35 - (prevFirstDay + prevLastDate);
    let currentPassed = 0;
    if (prevPassed < 0) {
      let prevPassedDate = new Date(year, month, prevPassed + 1);
      let prevLast = new Date(year, month, 0);

      const newDays = [];
      for (
        let day = prevPassedDate;
        day <= prevLast;
        day.setDate(day.getDate() + 1)
      ) {
        const date = {
          year: day.getFullYear(),
          month: day.getMonth(),
          date: day.getDate(),
          day: day.getDay(),
        };
        newDays.push(date);
      }
      console.log(newDays);
      setPrevDatePassed(newDays);
      frontBlank = 0;
      currentPassed = 35 - (Math.abs(prevPassed) + currentLastDate);
    }
    // setDatePassed();
    // datePassed
    else {
      frontBlank = currentFirstDay;
      setPrevDatePassed([]);
      currentPassed = 35 - (frontBlank + currentLastDate);
    }

    setFrontBlankSize(frontBlank);

    let currentFirst = new Date(year, month);
    let currentLast = new Date(year, month + 1, 0);

    //만약에 빈칸 + 이번달 마지막 일자가 35를 넘는다면 ?

    if (currentPassed < 0) {
      currentLast = new Date(year, month + 1, currentPassed);
      setRearBlankSize(0);
    } else {
      setRearBlankSize(currentPassed);
    }

    //1부터 35가 될때 까지만 조회해야해 예를들어 6이야 그리고 29일 까지임 그럼
    const newDays = [];
    for (
      let day = currentFirst;
      day <= currentLast;
      day.setDate(day.getDate() + 1)
    ) {
      const date = {
        year: day.getFullYear(),
        month: day.getMonth(),
        date: day.getDate(),
        day: day.getDay(),
      };
      newDays.push(date);
    }

    setDays(newDays);
  }

  useEffect(() => {
    getDaysInMonth(year, month);
  }, [year, month]);

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          borderCollapse: "collapse",
        }}
      >
        {/* 일자 정보 */}
        <DayBox />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          borderCollapse: "collapse",
        }}
      >
        {/* 앞쪽 빈 칸 */}
        <FrontBlankBox
          frontBlankSize={frontBlankSize}
          prevDatePassed={prevDatePassed}
          choiceCurrentDate={choiceCurrentDate}
        />
        {/* 날짜 정보 */}
        <DateBox days={days} choiceCurrentDate={choiceCurrentDate} />
        {/* 뒤쪽 빈 칸 */}
        <RearBlankBox rearBlankSize={rearBlankSize} />
      </div>
    </div>
  );
};

export default DateComponent;
