import api from "../utils/api";

/** 일자에 따른 스케쥴 목록 조회 */
export const selectScheduleList = async (param: any): Promise<any> => {
  try {
    console.log(param);
    const response = await api.get("/api/calendar/selectScheduleList", {
      params: param,
    });
    return response;
  } catch (error) {
    throw error;
  }
};
