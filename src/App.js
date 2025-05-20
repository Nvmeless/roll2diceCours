import logo from "./logo.svg";
import "./App.css";
import {
  NightModeContext,
  NightModeProvider,
} from "./context/NigthModeContext";
import { Button, Menu } from "./components/molecules";
import { ThemeProvider } from "styled-components";
import { useState, useContext } from "react";
import { Accueil, Clock, Test } from "./components/pages";
import { Typography } from "./components/atoms";

function App() {
  const nightTheme = {
    default: {
      color: "white",
    },
    typography: {
      subTitle: "white",
      link: "green",
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
  const [slug, setSlug] = useState("home");
  const [logged, setLogged] = useState(false);
  const context = useContext(NightModeContext);
  const getPageContent = () => {
    switch (slug) {
      case "test":
        return <Test></Test>;
        break;
      case "clock":
        return <Clock></Clock>;
        break;
      case "home":
      default:
        return <Accueil></Accueil>;
        break;
    }
  };
  const menu = [
    {
      slug: "home",
      text: "Accueil",
    },
    {
      slug: "test",
      text: "Test",
    },
    {
      slug: "clock",
      text: "Pendule",
    },
    {
      slug: "clock",
      text: "ReAccueil",
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
                callBack={() => {
                  setSlug(x.slug);
                }}
              >
                {x.text}
              </Menu.Tab>
            );
          })}
          <Button.ToggleNight></Button.ToggleNight>
          {logged ? (
            <>
              <Typography.Paragraph>Bonjour Michel, </Typography.Paragraph>
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
          )}
        </Menu.Bar>
        {slug}
        {context}
        {getPageContent()}
      </NightModeProvider>
    </ThemeProvider>
  );
}

export default App;
