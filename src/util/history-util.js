import {createBrowserHistory} from "history";
import { toQueryParams } from "./http-util";

const history = createBrowserHistory();
const shove = history.push;

history.push = (params) => {
  if (typeof params === "string") {
    shove(params);
  } else {
    const { query } = params;
    shove({
      ...params,
      search: toQueryParams(query || {}),
    });
  }
};

export default history;
