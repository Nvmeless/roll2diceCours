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
          <Menu.Tab
            callBack={() => {
              setSlug("home");
            }}
          >
            Accueil
          </Menu.Tab>
          <Menu.Tab
            callBack={() => {
              setSlug("clock");
            }}
          >
            Clock
          </Menu.Tab>
          <Menu.Tab
            callBack={() => {
              setSlug("test");
            }}
          >
            Test
          </Menu.Tab>
          <Button.ToggleNight></Button.ToggleNight>
        </Menu.Bar>
        {slug}
        {context}
        {getPageContent()}
      </NightModeProvider>
    </ThemeProvider>
  );
}

export default App;
