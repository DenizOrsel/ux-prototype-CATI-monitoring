import { createTheme } from "@material-ui/core/styles";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "@material-ui/core/styles";
import SurveysTable from "./components/SurveysTable";
import Card from "./components/Card";
import Card2 from "./components/Card2";
import Connections from "./components/Connections";

const theme = createTheme({
  palette: {
    primary: {
      main: "#02a79c", // This is the teal color
    },
  },
});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <div className="card-containerX">
        <Card>
          <SurveysTable />
        </Card>
        <Card2>
          <Connections />
        </Card2>
      </div>
    </ThemeProvider>
  );
}

export default App;
