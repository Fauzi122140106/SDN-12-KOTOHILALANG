import { ApiResponse } from "@/types/interface";
import { DataObject } from "@/types/types";
import { useMutation } from "@tanstack/react-query";
import { sendData } from "../api/fetcher";

import { LoginResponse } from "@/types/login";
import { LoginPayload } from "@/pages/validations/login";

export const useLogin = () => {
  return useMutation<
    ApiResponse<DataObject<LoginResponse>>,
    Error,
    LoginPayload
  >({
    mutationFn: async (data: LoginPayload) => {
      return await sendData("auth/login", data, "POST");
    },
  });
};
