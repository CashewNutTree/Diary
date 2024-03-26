import {Link} from "react-router-dom";
import styled from "styled-components";

const Header = () => {
    const MenuDiv = styled.div`
    display: flex;
    width: 30%;
    margin: 1em;
  `;

    const HeaderBox = styled.div`
    display: flex;
    width: 100%;
  `;

    const Menu = styled.button`
    height: 50px;
    margin: 0.5em;
    border: none;
    background-color: white;

    &:hover {
      color: #52c9f8; /* hover 상태에서의 글씨색 */
    }
  `;
    const MenuHr = styled.hr`
    border-top: 0.1px solid #d0d0d0; /* 실선 스타일을 설정합니다 */
    margin: 20px 0; /* 위아래 여백을 조정합니다 */
  `;

    const HeaderHr = styled.hr`
    border: 0.1px solid #d0d0d0;
  `;

    return (
        <>
            <HeaderBox>
                {/* menu */}
                {/* <MenuDiv> */}
                <Link to="/callendar">
                    <Menu>내 일정</Menu>
                </Link>
                <MenuHr></MenuHr>
                <Link to="/toDoList">
                    <Menu>오늘의 할 일</Menu>
                </Link>
                <MenuHr></MenuHr>
                <Link to="/diary">
                    <Menu>일기</Menu>
                </Link>
                <MenuHr></MenuHr>
                <Link to="/mypage">
                    <Menu>마이페이지</Menu>
                </Link>
                {/* </MenuDiv> */}
            </HeaderBox>
            <HeaderHr></HeaderHr>
        </>
    );
};

export default Header;
