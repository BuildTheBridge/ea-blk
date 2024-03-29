import useSize from "@/lib/hooks/useSize";
import { Box, styled } from "@mui/material";

export default function Footer() {
  const size = useSize();
  return (
    <Wrapper>
      <BoxSTcontent>
        <Title>에듀케이션 얼라이언스</Title>
        <BoxSTsubContent>
          <SubText>
            사업자 등록번호 : 740-07-02600 {size.width < 360 ? <br /> : " |"}{" "}
            대표 : 김세훈
          </SubText>
          <SubText>
            주소 : 서울특별시 강남구 논현로 75길 15 501호 (역삼동, 수양빌딩)
          </SubText>
          <SubText>
            전화 : 010-4639-9987 {size.width < 360 ? <br /> : " |"} 이메일 :
            ksh@buildthebr.com
          </SubText>
          <SubText>Copyright © BUILD THE BRIDGE. All Rights Reserved.</SubText>
        </BoxSTsubContent>
      </BoxSTcontent>
    </Wrapper>
  );
}

const Wrapper = styled("div")(() => {
  return {
    width: "100%",
    display: "flex",
    minHeight: "200px",
    padding: "40px 0px",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fafafa",
    borderTop: "0.5px solid #e8e5e5",
  };
});

const BoxSTcontent = styled(Box)(() => {
  return {
    gap: "12px",
    width: "100%",
    display: "flex",
    textAlign: "start",
    margin: "20px 20px",
    alignItems: "start",
    flexDirection: "column",
    maxWidth: "fit-content",
    justifyContent: "center",
  };
});

const SubText = styled(Box)(() => {
  return {
    fontWeight: 400,
    fontSize: "16px",
    color: "#9e9e9e",
    wordBreak: "keep-all",
  };
});

const Title = styled(Box)(() => {
  return {
    fontWeight: 400,
    fontSize: "24px",
    color: "#424242",
    wordBreak: "keep-all",
  };
});

const BoxSTsubContent = styled(Box)(() => {
  return {
    gap: "4px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
  };
});
