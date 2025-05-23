import "./App.css";
import {
  NightModeContext,
  NightModeProvider,
} from "./context/NigthModeContext";
import { Button, Menu } from "./components/molecules";
import { ThemeProvider } from "styled-components";
import { useState, useContext, useEffect } from "react";
import { Accueil, Clock, Test } from "./components/pages";
import { Container, Icons, Typography } from "./components/atoms";
import About from "./components/pages/About";
import Classique from "./components/pages/Classique";

function App() {
  const nightTheme = {
    default: {
      color: "white",
    },
    typography: {
      subTitle: "white",
      link: "cyan",
    },
    container: {
      primary: "black",
    },
    color: "white",
    bgColor: "black",
  };
  const dayTheme = {
    default: {
      color: "black",
    },
    typography: {
      subTitle: "black",
    },
    container: {
      primary: "white",
    },
    color: "black",
    bgColor: "white",
  };

  const [nightMode, setNightMode] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
  let context = useContext(NightModeContext);
  const [slug, setSlug] = useState("home");
  const [logged, setLogged] = useState(false);
  const [isDeployed, setIsDeployed] = useState(true);

  const getPageContent = () => {
    switch (slug) {
      case "home":
        return <Accueil></Accueil>;
      case "classique":
        return <Classique></Classique>;
      case "image":
        return <img src="https://picsum.photos/200/300" alt="random" />;
      case "about":
        return <About></About>;
    }
  };
  const menu = [
    {
      slug: "classique",
      text: "Classique",
    },
    {
      slug: "image",
      text: "Image",
    },
    {
      slug: "test",
      text: "Test",
    },
  ];
  const sousMenu = [
    {
      slug: "about",
      text: "About",
    },
    {
      slug: "contact",
      text: "Contact",
    },
    {
      slug: "help",
      text: "Help",
    },
  ];

  return (
    <ThemeProvider theme={nightMode ? nightTheme : dayTheme}>
      <NightModeProvider
        value={{
          nightMode: nightMode,
          switchNightMode: () => {
            return setNightMode(!nightMode);
          },
        }}
      >
        <Menu.Bar>
          {menu.map((x, i) => {
            return (
              <Menu.Tab
                key={i}
                callBack={() => {
                  setSlug(x.slug);
                }}
              >
                {x.text}
              </Menu.Tab>
            );
          })}
          <Icons.Setting
            onClick={() => {
              setIsDeployed(!isDeployed);
              console.log(isDeployed);
            }}
          ></Icons.Setting>
          {isDeployed ? (
            <>
              <Button.ToggleNight></Button.ToggleNight>
              {logged ? (
                <>
                  <Typography.Paragraph>Bonjour Michel</Typography.Paragraph>
                  <Button.Default
                    callBack={() => {
                      setLogged(false);
                    }}
                  >
                    Disconnect
                  </Button.Default>
                </>
              ) : (
                <Button.Default
                  callBack={() => {
                    setLogged(true);
                  }}
                >
                  Login
                </Button.Default>
              )}{" "}
            </>
          ) : null}
        </Menu.Bar>
        <Menu.SousMenu>
          {sousMenu.map((x, i) => {
            return (
              <Menu.Tab
                key={i}
                callBack={() => {
                  setSlug(x.slug);
                }}
              >
                {x.text}
              </Menu.Tab>
            );
          })}
        </Menu.SousMenu>
        {getPageContent()}
      </NightModeProvider>
    </ThemeProvider>
  );
}

export default App;
