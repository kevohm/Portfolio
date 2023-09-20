import styled from "styled-components"
import tw from "twin.macro"

export const Main = styled.div`
  ${tw`flex flex-row sm:flex-col items-center sm:items-start justify-start sm:justify-center space-x-4 space-y-0 sm:space-x-0 pl-4 sm:pl-12 py-6 sm:space-y-3 w-full max-w-none sm:max-w-[300px] mb-6 sm:mb-0 overflow-x-scroll sm:overflow-x-hidden`}
  button {
    font-weight: 600;
    ${tw`p-2 text-[15px] rounded-lg bg-white border border-solid border-[#D3D3D3]  text-darkGrey`}
  }
  .active-btn {
    ${tw`bg-darkGrey text-white dark:bg-[#000] dark:text-white dark:border-[#000]`}
  }
`;