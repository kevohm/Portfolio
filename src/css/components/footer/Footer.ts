import styled from "styled-components"
import tw from "twin.macro"

export const Main = styled.footer`
  ${tw`w-full flex flex-col py-10 items-center text-[#656D72] bg-white dark:text-white dark:bg-darkGrey`}
  .icons {
    ${tw`p-6 flex space-x-4 text-[14px] text-[#656D72] dark:text-white`}
    a {
      ${tw`no-underline text-[#656D72] dark:text-white`}
    }
  }
  p {
    ${tw`p-0 m-0 text-[14px] dark:text-white`}
    font-family:Inter;
  }
`;