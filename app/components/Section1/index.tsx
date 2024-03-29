import { Box, styled } from "@mui/material";

interface IProps {
  onClick: () => void;
}

export default function SectionOne(props: IProps) {
  const { onClick } = props;

  return (
    <SectionOneWrapper>
      <Wrapper>
        <TextContainer
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="1500"
        >
          <Text>대한민국 미래를 이끄는</Text>
          <Text>교육자와 학생을 위해</Text>
          <Text>일합니다.</Text>
        </TextContainer>
        <Image
          src="https://static.toss.im/web-general/homepage/static/images/down-arrow.png"
          alt="s1-arrow-down"
          className="animate-pulse"
          onClick={onClick}
        />
      </Wrapper>
    </SectionOneWrapper>
  );
}

const SectionOneWrapper = styled(Box)(() => {
  return {
    width: "100%",
    display: "flex",
    minHeight: "100vh",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    background: `url('https://static.toss.im/assets/homepage/team/kv-1.jpg') no-repeat`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
});

const Wrapper = styled("div")(() => {
  return {
    bottom: 232,
    gap: "128px",
    display: "flex",
    overflowY: "hidden",
    alignItems: "center",
    position: "absolute",
    wordBreak: "keep-all",
    flexDirection: "column",
    justifyContent: "center",
    "@media (max-width: 1920px)": {
      gap: "100px",
      bottom: 132,
    },
    "@media (max-width: 1440px)": {
      gap: "80px",
      bottom: 82,
    },
    "@media (max-width: 900px)": {
      gap: "40px",
      bottom: 52,
    },
  };
});

const TextContainer = styled("div")(() => {
  return {
    width: "100%",
    color: "white",
    display: "flex",
    fontSize: "62px",
    maxWidth: "752px",
    fontWeight: "bold",
    textAlign: "center",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    "@media (max-width: 1440px)": {
      fontSize: "42px",
    },
    "@media (max-width: 900px)": {
      fontSize: "32px",
    },
    "@media (max-width: 600px)": {
      fontSize: "26px",
    },
  };
});

const Image = styled("img")(() => {
  return {
    width: "40px",
    height: "16px",
  };
});

const Text = styled(Box)(() => {
  return {};
});
