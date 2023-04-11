import styled from "styled-components";
import tw from "twin.macro";

export const Main = styled.div`
  ${tw`border bg-white border-solid border-[#F1F1F1] rounded-lg h-fit`}
  img {
    ${tw`w-full rounded-t-lg`}
  }
  p {
    ${tw`m-0 p-0 p-3 text-[#232E35]`}
    font-weight:600;
  }
  .title {
    ${tw`flex justify-start items-center p-3 pt-0 pb-4`}
    button {
      ${tw`p-1 px-2 rounded-lg text-[#656D72] bg-white border border-solid border-[#F1F1F1]`}
      font-weight:500;
      font-family: Inter;
    }
    .icon {
      ${tw`w-[20px] text-[#656D72] ml-[16px] cursor-pointer`}
    }
  }
`;
