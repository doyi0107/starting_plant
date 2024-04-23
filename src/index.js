import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


async function enableMocking() {
  // 로컬 개발 환경에서는 기본적으로 활성화하고, 배포 환경에서는 `REACT_APP_ENABLE_MOCK` 환경 변수를 체크
  const isDevelopment = process.env.NODE_ENV === "development";
  const shouldEnableMock = process.env.REACT_APP_ENABLE_MOCK === "true";

  if (!isDevelopment && !shouldEnableMock) {
    return;
  }

  const { worker } = await import("./mocks/browser");
  return worker.start();
}

enableMocking().then(() => {
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});


