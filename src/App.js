import { ColorModeContext, useMode} from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Topbar from './scenes/global/Topbar';
import Sidebar from './scenes/global/Sidebar';
import Dashboard from './scenes/dashboard';
import { Patrons } from './scenes/patrons';
import { Reports } from './scenes/reports';
// import Reports from './scenes/reports';
// import Patrons from './scenes/patrons';

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar/>
            <Routes>
              <Route path="/" element={<Dashboard/>}/>
              <Route path="/patrons" element={<Patrons/>}/>
              <Route path="/reports" element={<Reports/>}/>
              {/* <Route path="/reports" element={<Reports/>}/>
              <Route path="/patrons" element={<Patrons/>}/> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
