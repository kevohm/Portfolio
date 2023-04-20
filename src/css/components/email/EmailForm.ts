import styled from "styled-components";
import tw from "twin.macro";

export const Main = styled.form`
  ${tw`w-full sm:w-[50vw] lg:w-[55vw] flex flex-col space-y-4 p-10`}
  font-family:Inter;
  input {
    ::placeholder {
      ${tw`text-[#656D72]`}
      font-family:Inter;
    }
    ${tw`w-full p-2 rounded border border-solid border-[#D3D3D3] dark:bg-[#404040] dark:text-white`}
  }
  textarea {
    ::placeholder {
      ${tw`text-[#656D72]`}
      font-family:Inter;
    }
    ${tw`p-2 w-full h-[150px] rounded border border-solid border-[#D3D3D3] dark:bg-[#404040] dark:text-white`}
    resize:none;
  }
  input[type="submit"] {
    ${tw`cursor-pointer bg-[#74CBF1] dark:bg-[#74CBF1] mt-6 text-white hover:bg-[#6ABADD]`}
  }
`;
