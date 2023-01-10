import { createTheme } from "@material-ui/core/styles";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "@material-ui/core/styles";
import SurveysTable from "./components/SurveysTable";
import Card from "./components/Card";
import Connections from "./components/Connections";

const theme = createTheme({
  palette: {
    primary: {
      main: "#02a79c", // This is the teal color tone
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
        <Card title="Surveys">
          <SurveysTable />
        </Card>
        <Card title="Connections">
          <Connections />
        </Card>
    </ThemeProvider>
  );
}

export default App;
