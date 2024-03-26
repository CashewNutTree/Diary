import api from "../utils/api";
const Diary = () => {
  const apiTest = () => {
    alert("api 통신");
    return api({
      // baseURL설정되어 있기 때문에 그 뒤의 URL만 작성합니다.
      url: "/api/test",
      method: "get",
    });
  };
  return (
    <div>
      <div>ㅇㅇ</div>
      <button
        onClick={() => {
          apiTest();
        }}
      >
        API 통신
      </button>
    </div>
  );
};

export default Diary;
