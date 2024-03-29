import { Box, styled } from "@mui/material";
import React from "react";

const Title = [
  {
    title1: "변화를 열망하는 사람들이 모여,",
    title2: "역사에 남을만한 변화를 만듭니다.",
  },
];

const SubContents = [
  {
    id: 1,
    text: "월간 활성사용자",
    numberText: "150만 +",
  },
  {
    id: 2,
    text: "누적 투자금액",
    numberText: "2,780원 +",
  },
  {
    id: 3,
    text: "기업 가치",
    numberText: "500원 +",
  },
  {
    id: 4,
    text: "서비스 수",
    numberText: "단 1개 +",
  },
];

interface IProps {
  sectionTwoRef: any;
}

export default function SectionTwo(props: IProps) {
  const { sectionTwoRef } = props;
  return (
    <Wrapper ref={sectionTwoRef}>
      <TextWrapper>
        <HeaderText>
          <span>변화를 열망하는 사람들이 모여,</span>
          <span>역사에 남을만한 변화를 만듭니다.</span>
        </HeaderText>
        <SubTextWrapper>
          {SubContents.slice(0, 2).map((item, idx) => {
            return (
              <SubTextInner key={idx}>
                <SubText>{item.text}</SubText>
                <SubTextNumber>{item.numberText}</SubTextNumber>
              </SubTextInner>
            );
          })}
        </SubTextWrapper>
        <SubTextWrapper>
          {SubContents.slice(2, 4).map((item, idx) => {
            return (
              <SubTextInner key={idx}>
                <SubText>{item.text}</SubText>
                <SubTextNumber>{item.numberText}</SubTextNumber>
              </SubTextInner>
            );
          })}
        </SubTextWrapper>
      </TextWrapper>

      <Image
        src="/chart.png"
        alt="chart"
        data-aos="fade-up"
        data-aos-duration="3000"
      />
    </Wrapper>
  );
}

const Wrapper = styled("div")(() => {
  return {
    width: "100%",
    display: "flex",
    minHeight: "100vh",
    overflowY: "hidden",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#131417",
  };
});

const TextWrapper = styled("div")(() => {
  return {
    zIndex: 2,
    gap: "40px",
    width: "100%",
    display: "flex",
    maxWidth: "960px",
    textAlign: "start",
    alignItems: "center",
    position: "absolute",
    wordBreak: "keep-all",
    flexDirection: "column",
    justifyContent: "center",
    padding: "0px 40px",
  };
});

const HeaderText = styled("div")(() => {
  return {
    width: "100%",
    display: "flex",
    color: "white",
    fontSize: "50px",
    fontWeight: "bold",
    alignItems: "start",
    flexDirection: "column",
    justifyContent: "start",
    "@media (max-width: 900px)": {
      fontSize: "30px",
    },
    "@media (max-width: 600px)": {
      fontSize: "18px",
    },
  };
});

const SubTextWrapper = styled("div")(() => {
  return {
    gap: "40px",
    width: "100%",
    display: "flex",
    textAlign: "start",
    alignItems: "start",
    justifyContent: "start",
  };
});

const SubTextInner = styled("div")(() => {
  return {
    width: "100%",
    display: "flex",
    maxWidth: "240px",
    flexDirection: "column",
  };
});

const SubText = styled("span")(() => {
  return {
    fontSize: "32px",
    textAlign: "start",
    fontWeight: "bold",
    color: "#9e9e9e",
    "@media (max-width: 900px)": {
      fontSize: "22px",
    },
    "@media (max-width: 400px)": {
      fontSize: "13px",
    },
  };
});

const SubTextNumber = styled("span")(() => {
  return {
    color: "white",
    fontSize: "42px",
    textAlign: "start",
    fontWeight: "bold",
    "@media (max-width: 900px)": {
      fontSize: "32px",
    },
    "@media (max-width: 400px)": {
      fontSize: "20px",
    },
  };
});

const Image = styled("img")(() => {
  return {
    width: "100%",
    height: "100vh",
    background: "rgba(0, 0, 0, 1)",
    backgroundColor: "#2a2f37",
  };
});
