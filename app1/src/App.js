import React, { Suspense } from "react";
const RemoteApp = React.lazy(() => import("app2/App"));

const App = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <h1>안녕하세요. 저는 App1 입니다!</h1>
      <Suspense fallback={"loading..."}>
        <RemoteApp />
      </Suspense>
    </div>
  );
};

export default App;
