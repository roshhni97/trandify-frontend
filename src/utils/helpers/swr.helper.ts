import axios from "axios";

export const genericAPIFetcher = async ([url, type, ...rest]: [
  string,
  "get" | "post" | "put" | "delete",
  any[]?
]) => {
  return await axios[type](url, ...rest);
};

export const genericMutationFetcher = async (
  url: string,
  {
    arg,
  }: {
    arg: {
      type: "get" | "post" | "put" | "delete";
      rest?: any[];
    };
  }
) => {
  return await axios[arg.type](url, ...(arg.rest || []));
};

// 237191861962-576musp72v169vjbe0jum2dpusd233p0.apps.googleusercontent.com
// GOCSPX - hEE8Z7KL3G8e4 - gDoKAgs08hxAan;
