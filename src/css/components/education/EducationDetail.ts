import styled from "styled-components"
import tw from "twin.macro"

export const Main = styled.div`
  ${tw`flex flex-col items-start w-full sm:w-[50vw] p-10 px-2 pr-0 pl-8 sm:p-10 sm:pl-16`}
  .achievement {
    ${tw`w-full sm:w-[280px] md:w-[360px] pl-0 sm:pl-2 relative  flex flex-col items-start pb-10`}
    font-family:Inter;
    p {
      ${tw`p-0 m-0`}
    }
    div {
      ${tw`w-full mb-3 text-[14px]`}
      p {
        ${tw`my-4 text-[#656D72] dark:text-white`}
      }
      p:first-child {
        ${tw`text-[16px] text-[#232E35] dark:text-[#fff]`}
        font-family: NormalFont;
      }
    }
    p {
      ${tw`text-[14px] text-[#232E35] dark:text-[#fff]`}
    }
    ::before {
      content: "";
      ${tw`absolute top-0 left-[-20px] w-[2px] h-full bg-[#74CBF1]`}
    }
    ::after {
      content: "";
      ${tw`absolute top-[30%] left-[-26px] w-[14px] h-[14px] rounded-[100%] bg-[#74CBF1]`}
    }
  }
  .achievement:first-child {
    ::before {
      ${tw`rounded-t-xl`}
    }
  }
  .achievement:last-child {
    ::before {
      ${tw`rounded-b-xl`}
    }
  }
`;