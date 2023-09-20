import styled from "styled-components"
import tw from "twin.macro"

export const Main = styled.div`
  ${tw`w-full sm:w-[50vw] lg:w-[45vw] flex flex-col p-10 space-y-3`}
  .detail {
    ${tw`p-2 flex items-center space-x-4`}
    .icon-holder {
      ${tw`bg-[#F5F3FE] text-[20px] text-[#74CBF1] p-2 rounded-xl flex items-center justify-center w-[50px] h-[50px]`}
    }
    .text {
      ${tw`h-[50px] space-y-1`}
      h1,p {
        ${tw`p-0 m-0 text-[16px]`}
      }
      p {
        ${tw`text-[14px] dark:text-white`}
      }
      h1{
        ${tw`dark:text-white`}
      }
    }
  }
`;