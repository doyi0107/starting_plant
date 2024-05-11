import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


async function enableMocking() {
// 배포할때는 === 로 바꾸기 
  if (process.env.NODE_ENV === "development") {
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


