import CleanUpThemeProvider from "./context/themeContext";
import TestContext from "./context/TestContext";

function App() {
  return <div className="App">
    <CleanUpThemeProvider>
      <TestContext />  {/* 컨텍스트 테스트용 */}
    </CleanUpThemeProvider>
  </div>;
}

export default App;
