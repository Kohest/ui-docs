import React, { Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import MainLayout from "./layouts/MainLayout/MainLayout";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import DocsPage from "./pages/DocsPage/DocsPage";
import DocumentsLayout from "./layouts/DocumentsLayout/DocumentsLayout";
import InstallationPage from "./pages/InstallationPage/InstallationPage";
const CalendarPage = React.lazy(
  () => import("./pages/CalendarPage/CalendarPage")
);
const CalculatorPage = React.lazy(
  () => import("./pages/CalculatorPage/CalculatorPage")
);
const SecondCalculatorPage = React.lazy(
  () => import("./pages/SecondCalculatorPage/SecondCalculatorPage")
);
const QrGeneratorPage = React.lazy(
  () => import("./pages/QrGeneratorPage/QrGeneratorPage")
);
const StopwatchPage = React.lazy(
  () => import("./pages/StopwatchPage/StopwatchPage")
);
const SliderPage = React.lazy(() => import("./pages/SliderPage/SliderPage"));
const NotesPage = React.lazy(() => import("./pages/NotesPage/NotesPage"));
const ClockPage = React.lazy(() => import("./pages/ClockPage/ClockPage"));
const MusicPlayerPage = React.lazy(
  () => import("./pages/MusicPlayerPage/MusicPlayerPage")
);
const WeatherCardPage = React.lazy(
  () => import("./pages/WeatherCardPage/WeatherCardPage")
);
function App() {
  return (
    <Suspense fallback={<MainLayout />}>
      <Routes>
        <Route path="/" element={<Navigate to="/docs" />} />
        <Route path="/" element={<MainLayout />}>
          <Route path="docs" element={<DocumentsLayout />}>
            <Route path="" element={<DocsPage />} />
            <Route path="installation" element={<InstallationPage />} />
            <Route path="components">
              <Route index element={<Navigate to="calendar" />} />
              <Route path="calendar" element={<CalendarPage />} />
              <Route path="calc" element={<CalculatorPage />} />
              <Route path="secondCalc" element={<SecondCalculatorPage />} />
              <Route path="clock" element={<ClockPage />} />
              <Route path="musicPlayer" element={<MusicPlayerPage />} />
              <Route path="notes" element={<NotesPage />} />
              <Route path="qrGenerator" element={<QrGeneratorPage />} />
              <Route path="stopwatch" element={<StopwatchPage />} />
              <Route path="slider" element={<SliderPage />} />
              <Route path="weatherCard" element={<WeatherCardPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
