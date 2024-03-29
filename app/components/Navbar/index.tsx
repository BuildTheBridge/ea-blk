"use client";
import useScroll from "@/lib/hooks/useScroll";
import useSize from "@/lib/hooks/useSize";
import { Box, styled } from "@mui/material";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const navMenus = [
  { text: "회사소개" },
  { text: "사업소개" },
  { text: "파트너" },
  { text: "문의" },
];

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const { scroll } = useScroll();
  const { width } = useSize();

  useEffect(() => {
    if (width > 550) setOpenMenu(false);
  }, [width]);

  const rederNavmenu = () => {
    if (width < 550) {
      return (
        <Inner>
          <Image
            src="/white_horizontal.png"
            alt="logo"
            width={180}
            height={48}
          />
          <Image
            src="/menu.png"
            alt="menu"
            color="#fff"
            onClick={() => setOpenMenu(!openMenu)}
            width={20}
            height={20}
            style={{ cursor: "pointer" }}
          />
        </Inner>
      );
    }
    return (
      <Inner>
        <Image
          src="/white_horizontal.png"
          alt="logo"
          width={180}
          height={48}
          style={{ cursor: "pointer" }}
        />
        <TextWrapper sx={{ cursor: "pointer" }}>
          {navMenus.map((menu, idx) => {
            return <Text key={idx}>{menu.text}</Text>;
          })}
        </TextWrapper>
      </Inner>
    );
  };

  return (
    <>
      {/* 기존 */}
      <Wrapper sx={{ zIndex: 3 }}>{rederNavmenu()}</Wrapper>

      {/* 애니메이션을 위한 */}
      <Wrapper
        style={{
          height: openMenu ? "206px" : "60px",
          backgroundColor: scroll > 0 || openMenu ? "rgba(0, 0, 0, 0.2)" : "",
          backdropFilter: scroll > 0 || openMenu ? "blur(24px)" : "",
        }}
      >
        <BoxSTsmallMenu
          sx={{
            height: openMenu ? "auto" : "0px",
            display: openMenu ? "flex" : "none",
          }}
        >
          {navMenus.map((menu, idx) => {
            return (
              <TextSmall key={idx} sx={{ cursor: "pointer" }}>
                {menu.text}
              </TextSmall>
            );
          })}
        </BoxSTsmallMenu>
      </Wrapper>
    </>
  );
};

export default Navbar;

const Wrapper = styled(Box)(() => {
  return {
    top: 0,
    zIndex: 2,
    width: "100%",
    height: "60px",
    display: "flex",
    position: "fixed",
    padding: "0px 20px",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.25s ease-in",
  };
});

const Inner = styled(Box)(() => {
  return {
    width: "100%",
    display: "flex",
    maxWidth: "1140px",
    alignItems: "center",
    justifyContent: "space-between",
  };
});

const TextWrapper = styled(Box)(() => {
  return {
    gap: "32px",
    display: "flex",
    alignItems: "center",
    transform: "duration 1.7s ease",
  };
});

const Text = styled(Box)(() => {
  return {
    color: "white",
    fontWeight: 200,
  };
});

const TextSmall = styled(Box)(() => {
  return {
    width: "100%",
    color: "white",
    fontWeight: 200,
    display: "flex",
    textAlign: "start",
    alignItems: "start",
    justifyContent: "start",
  };
});

const BoxSTsmallMenu = styled(Box)(() => {
  return {
    zIndex: 2,
    gap: "12px",
    width: "100%",
    marginTop: "40px",
    padding: "0px 8px",
    flexDirection: "column",
    transition: "all 2.7s ease-in-out",
  };
});
