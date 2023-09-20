import styled from "styled-components"
import tw from "twin.macro"

export const Main = styled.div`
  ${tw`bg-white rounded py-8 pt-14 flex flex-col items-center space-y-6 w-full max-w-[300px] border border-solid border-[rgba(40,40,40,.05)] cursor-pointer dark:bg-transparent dark:border-[rgba(255,255,255,.3)]`}
  .icon {
    ${tw`bg-[#F5F3FE] w-min rounded-lg p-3 text-[25px] text-[#74CBF1]`}
  }
  .details {
    ${tw`flex flex-col items-center w-full px-3 dark:text-[#fff]`}
    p {
      ${tw`p-0 m-0 my-2 text-sm`}
    }
    h1 {
      ${tw`p-0 m-0 my-2 text-sm`}
    }
  }
`;