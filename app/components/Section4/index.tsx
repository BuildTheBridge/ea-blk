import { styled } from "@mui/material";

const Cards = [
  {
    id: 1,
    title: "빌더브릿지",
    content1: "상식없는 서비스로",
    content2: "세상을 파괴합니다.",
    url: "https://static.toss.im/assets/homepage/team/team-1core.jpg",
  },
  {
    id: 2,
    title: "빌더브릿지",
    content1: "상식없는 서비스로",
    content2: "세상을 파괴합니다.",
    url: "https://static.toss.im/assets/homepage/team/team-2securities.jpg",
  },
  {
    id: 3,
    title: "빌더브릿지",
    content1: "상식없는 서비스로",
    content2: "세상을 파괴합니다.",
    url: "https://static.toss.im/assets/homepage/team/team-4insu.jpg",
  },
  {
    id: 4,
    title: "빌더브릿지",
    content1: "상식없는 서비스로",
    content2: "세상을 파괴합니다.",
    url: "https://static.toss.im/assets/homepage/team/team-3payments.jpg",
  },
];

export default function SectionFour() {
  return (
    <Wrapper>
      <CardWrapper>
        <CardContainer>
          {Cards.slice(0, 2).map((card) => {
            return (
              <Items key={card.id}>
                <Card url={card.url}>
                  <Title className="font-extrabold">{card.title}</Title>
                  <div className="flex flex-col">
                    <ContentText>{card.content1}</ContentText>
                    <ContentText>{card.content2}</ContentText>
                  </div>
                  <PlusIcon src="/plus.png" alt="plus" />
                </Card>
              </Items>
            );
          })}
        </CardContainer>
        <CardContainer>
          {Cards.slice(2, 4).map((card) => {
            return (
              <Items key={card.id}>
                <Card url={card.url}>
                  <Title>{card.title}</Title>
                  <div className="flex flex-col">
                    <ContentText>{card.content1}</ContentText>
                    <ContentText>{card.content2}</ContentText>
                  </div>
                  <PlusIcon src="/plus.png" alt="plus" />
                </Card>
              </Items>
            );
          })}
        </CardContainer>
      </CardWrapper>
    </Wrapper>
  );
}

const Wrapper = styled("div")(() => {
  return {
    width: "100%",
    display: "flex",
    minHeight: "100vh",
    padding: "80px 0px",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  };
});

const Card = styled("div")((props: { url: string }) => {
  const { url } = props;
  // filter: blur(30px);
  // transform: scale(1.2);
  return {
    gap: "24px",
    width: "100%",
    display: "flex",
    padding: "40px",
    maxWidth: "420px",
    minHeight: "520px",
    borderRadius: "32px",
    aspectRatio: "1/1.2",
    flexDirection: "column",
    // transform: "scale(1.2)",
    background: `url(${url}) no-repeat`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    "@media (max-width:600px)": {
      minHeight: "420px",
    },
  };
});

const Items = styled("div")(() => {
  return {
    width: "100%",
    display: "flex",
    maxWidth: "420px",
    alignItems: "center",
    justifyContent: "center",
    "@media (max-width:600px)": {
      fontSize: "24px",
      maxWidth: "100%",
    },
  };
});

const PlusIcon = styled("img")(() => {
  return {
    width: "32px",
    height: "32px",
  };
});

const Title = styled("span")(() => {
  return {
    fontSize: "30px",
    color: "#424242",
    "@media (max-width:500px)": {
      fontSize: "24px",
    },
  };
});

const ContentText = styled("span")(() => {
  return {
    fontWeight: 600,
    fontSize: "24px",
    color: "#424242",
    wordBreak: "keep-all",
    "@media (max-width:500px)": {
      fontSize: "18px",
    },
  };
});

const CardContainer = styled("div")(() => {
  return {
    gap: "80px",
    width: "100%",
    display: "flex",
    maxWidth: "960px",
    padding: "0px 24px",
    alignItems: "center",
    justifyContent: "center",
    "@media (max-width:960px)": {
      gap: "40px",
      maxWidth: "100%",
      flexDirection: "column",
    },
  };
});

const CardWrapper = styled("div")(() => {
  return {
    gap: "80px",
    width: "100%",
    display: "flex",
    maxWidth: "960px",
    flexDirection: "column",
    "@media (max-width:960px)": {
      gap: "40px",
      maxWidth: "100%",
    },
  };
});
