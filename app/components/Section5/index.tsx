import { Box, Grid, styled } from "@mui/material";

const Images = [
  {
    id: 1,
    url: "https://static.toss.im/assets/homepage/team/logo-altos.jpg",
  },
  {
    id: 2,
    url: "https://static.toss.im/assets/homepage/team/logo-goodwater.jpg",
  },
  {
    id: 3,
    url: "https://static.toss.im/assets/homepage/team/logo-kdb-bank.png",
  },
  {
    id: 4,
    url: "https://static.toss.im/assets/homepage/team/logo-kp.jpg",
  },
  {
    id: 5,
    url: "https://static.toss.im/assets/homepage/team/logo-paypal.jpg",
  },
  {
    id: 6,
    url: "https://static.toss.im/assets/homepage/team/logo-ribbit.jpg",
  },
  {
    id: 7,
    url: "https://static.toss.im/assets/homepage/team/logo-gic.jpg",
  },
  {
    id: 8,
    url: "https://static.toss.im/assets/homepage/team/logo-bessemer.jpg",
  },
];

export default function SectionFive() {
  return (
    <Wrapper>
      <Box>
        <Title className="font-extrabold">국내외 주요 투자자들이</Title>
        <Title className="font-extrabold">EA팀과 함께합니다.</Title>
      </Box>
      <ImageWrapper>
        <Container container>
          {Images.slice(0, 4).map((img, index) => {
            return (
              <Grid item key={index}>
                <ImageST src={img.url} alt={img.url} key={img.id} />
              </Grid>
            );
          })}
        </Container>
        <Container container>
          {Images.slice(4, 8).map((img, index) => {
            return (
              <Grid item key={index}>
                <ImageST src={img.url} alt={img.url} key={img.id} />
              </Grid>
            );
          })}
        </Container>
      </ImageWrapper>
    </Wrapper>
  );
}

const Wrapper = styled("div")(() => {
  return {
    gap: "40px",
    width: "100%",
    display: "flex",
    maxWidth: "960px",
    padding: "80px 0px",
    flexDirection: "column",
  };
});

const Title = styled("div")(() => {
  return {
    width: "100%",
    padding: "10px",
    fontSize: "40px",
    textAlign: "center",
    wordBreak: "keep-all",
    "@media (max-width:600px)": {
      fontSize: "30px",
      fontWeight: 800,
    },
  };
});

const ImageWrapper = styled(Box)(() => {
  return {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  };
});

const ImageST = styled("img")(() => {
  return {
    width: "180px",
    height: "100px",
    backgroundColor: "#f9fafb",
  };
});

const Container = styled(Grid)(() => {
  return {
    width: "100%",
    display: "flex",
    maxWidth: "960px",
    alignItems: "center",
    justifyContent: "center",
  };
});
