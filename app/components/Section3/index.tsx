import useScroll from "@/lib/hooks/useScroll";
import { styled } from "@mui/material";
import { useEffect, useState } from "react";

export default function SectionThree() {
  const { scroll } = useScroll();
  const [opacityValue, setOpacityValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sectionTop = 400; // 섹션의 상단 위치
      const sectionHeight = 800; // 섹션의 높이
      const minOpacity = 1; // 최소 투명도
      const maxOpacity = 0; // 최대 투명도

      // 섹션 진입 시 서서히 투명도 증가
      if (scroll > sectionTop) {
        const normalizedScroll = Math.min(
          Math.max(scroll - sectionTop, 0),
          sectionHeight
        );
        const opacity =
          (normalizedScroll / sectionHeight) * (maxOpacity - minOpacity) +
          minOpacity;
        setOpacityValue(opacity);
      } else {
        setOpacityValue(minOpacity);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  return (
    <div
      className={`relative opacity-[${opacityValue}] w-lvw h-lvh  top-0 left-0 flex bg-[url('https://static.toss.im/assets/homepage/team/kv-2.jpg')] bg-no-repeat bg-cover bg-center justify-center items-center`}
    >
      <div
        className={`absolute top-0 left-0 w-lvw h-lvh bg-[#181d27]`}
        style={{ opacity: opacityValue }}
      />

      <Text
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="1500"
      >
        <span>그때 우리는..</span>
        <span>코딩에 미쳐있었죠...</span>
        <span>저는 지금도 그래요..</span>
      </Text>
    </div>
  );
}

const Text = styled("div")(() => {
  return {
    width: "100%",
    color: "white",
    display: "flex",
    fontSize: "62px",
    maxWidth: "652px",
    height: "100%",
    maxHeight: "420px",
    fontWeight: "bold",
    textAlign: "center",
    alignItems: "center",
    borderRadius: "16px",
    flexDirection: "column",
    justifyContent: "center",
    backdropFilter: "blur(30px)",
    WebkitBackdropFilter: "blur(30px)",
    backgroundColor: "rgba(26, 30, 36, 0.65)",
    "@media (max-width: 1440px)": {
      fontSize: "42px",
    },
    "@media (max-width: 900px)": {
      fontSize: "32px",
      maxWidth: "452px",
      maxHeight: "320px",
    },
    "@media (max-width: 600px)": {
      fontSize: "24px",
      maxWidth: "352px",
      maxHeight: "220px",
    },
  };
});
