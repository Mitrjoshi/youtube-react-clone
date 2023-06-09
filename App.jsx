import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Error, Video, Channel, SearchResults, Home } from "./pages";
import { SidemenuDrawer } from "./layouts";
import { Loading } from "./components";
import { ToastContainer } from "react-toastify";

const LazyOriginals = React.lazy(() => import("./pages/Originals"));
const LazySubscriptions = React.lazy(() => import("./pages/Subscriptions"));
const LazyShorts = React.lazy(() => import("./pages/Shorts"));
const LazyLibrary = React.lazy(() => import("./pages/Library"));
const LazyDownloads = React.lazy(() => import("./pages/Downloads"));
const LazyWatchLater = React.lazy(() => import("./pages/WatchLater"));

const App = () => {
  const location = useLocation();
  const isVideoPage = location.pathname.startsWith("/watch/");
  const renderSidemenuDrawer = !isVideoPage ? <SidemenuDrawer /> : null;

  return (
    <>
      <ToastContainer />
      {renderSidemenuDrawer}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/subscriptions"
          element={
            <React.Suspense fallback={<Loading />}>
              <LazySubscriptions />
            </React.Suspense>
          }
        />
        <Route
          path="/originals"
          element={
            <React.Suspense fallback={<Loading />}>
              <LazyOriginals />
            </React.Suspense>
          }
        />
        <Route
          path="/shorts/:id"
          element={
            <React.Suspense fallback={<Loading />}>
              <LazyShorts />
            </React.Suspense>
          }
        />
        <Route
          path="/library"
          element={
            <React.Suspense fallback={<Loading />}>
              <LazyLibrary />
            </React.Suspense>
          }
        />
        <Route
          path="/downloads"
          element={
            <React.Suspense fallback={<Loading />}>
              <LazyDownloads />
            </React.Suspense>
          }
        />
        <Route
          path="/watchlater"
          element={
            <React.Suspense fallback={<Loading />}>
              <LazyWatchLater />
            </React.Suspense>
          }
        />
        <Route path="/watch/:id" element={<Video />} />
        <Route path="/search/:id" element={<SearchResults />} />
        <Route path="/channel/:id" element={<Channel />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
