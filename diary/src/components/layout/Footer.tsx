import styled from "styled-components";

const Footer = () => {
    const FooterContainer = styled.div`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
  `;

    const FooterBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    // width: 80%;
    margin-top: 1%;
    height: 50%;
  `;

    const CopyRightBox = styled.div`
    height: 30px;
  `;
    const FooterHr = styled.hr`
    border: 0.1px solid #d0d0d0;
  `;
    return (
        <>
            <FooterHr></FooterHr>
            <FooterContainer>
                <FooterBox>
                    <CopyRightBox>© 2024 by jingyeong</CopyRightBox>
                </FooterBox>
            </FooterContainer>
        </>
    );
};

export default Footer;
