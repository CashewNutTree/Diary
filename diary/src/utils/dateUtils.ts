/**
 *
 * 날짜, 시간과 관련된 유틸
 */

/**
 *
 * @param date1
 * @param date2
 * @returns 같으면 0, date1이 작으면 -1,date1이 크면 1 반환
 *
 */
export const dateCompare = (date1: Date, date2: Date): number => {
  if (date1.valueOf === date2.valueOf) {
    return 0;
  } else if (date1.valueOf > date2.valueOf) {
    return 1;
  } else {
    return -1;
  }
};
