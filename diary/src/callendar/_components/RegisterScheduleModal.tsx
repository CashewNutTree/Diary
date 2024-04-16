import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faRectangleXmark } from "@fortawesome/free-solid-svg-icons";
import { ContentSaveBtn } from "../../Style";
import { dateCompare } from "../../utils/dateUtils";

/**
 * 스케쥴 등록 모달
 * @returns
 */
const RegisterScheduleModal = (props: any) => {
  const { closeModal } = props;
  const width = "300px";
  const heigth = "300px";

  /**
   * 스케줄 등록
   */
  const registerSchedule = () => {
    // 검증 g
    // 시작 시간과 종료 시간을 비교함
    const date1 = new Date("");
    const date2 = new Date("");
    dateCompare(date1, date2);
  };

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          padding: "20px",
          border: "1px solid #ccc",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
          zIndex: "9999",
          width: width,
          height: heigth,
        }}
      >
        <div>
          <div>
            <span>스케줄 등록</span>
            <FontAwesomeIcon
              icon={faRectangleXmark}
              style={{
                color: "gray",
                width: "1em",
                marginRight: "0.5em",
              }}
              onClick={closeModal}
            />
          </div>
          <div>
            <div>
              <span>시작시간</span>
              <select>
                {Array.from({ length: 24 }, (_, idx) => idx).map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
              시
              <select>
                {Array.from({ length: 60 }, (_, idx) => idx).map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
              분
            </div>
            <div>
              <span>종료시간</span>
              <select>
                {Array.from({ length: 24 }, (_, idx) => idx).map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
              시
              <select>
                {Array.from({ length: 60 }, (_, idx) => idx).map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
              분
            </div>
            <div>
              <input></input>
            </div>
          </div>
          {/* <ButtonGroupDiv> */}
          <ContentSaveBtn
            onClick={() => {
              registerSchedule();
            }}
          >
            <span>
              등록 &nbsp;
              <FontAwesomeIcon icon={faPen} style={{ color: "white" }} />
            </span>
          </ContentSaveBtn>
        </div>
      </div>
    </>
  );
};
export default RegisterScheduleModal;
