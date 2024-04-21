import { setupWorker } from "msw/browser";
import { handlers } from "./handler";

// 이 worker는 브라우저 환경에서 사용됩니다.
export const worker = setupWorker(...handlers);

