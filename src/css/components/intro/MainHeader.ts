import styled from "styled-components"
import tw from "twin.macro"

export const Header = styled.header`
  ${tw`relative py-0 px-4 md:px-12 border border-solid border-transparent flex items-center justify-between w-full dark:bg-darkGrey`}
  border-bottom:1px solid #D3D3D3;
  font-weight: 600;
  p {
    ${tw`text-2xl dark:text-white`}
  }

  ul {
    ${tw`p-0 m-0 w-full max-w-[300px] md:max-w-[400px] list-none hidden items-center justify-evenly sm:flex`}
    li {
      ${tw`p-0 m-0 text-lg cursor-pointer hover:text-[rgba(40,40,40,.8)] dark:text-white dark:hover:text-[rgba(255,255,255,.9)]`}
    }
  }
  .menu {
    ${tw`p-2 block sm:hidden`}
    .menu-icon {
      ${tw`text-[30px] text-[#000] dark:text-white`}
    }
  }

  .dark-mode-toggle {
    ${tw`bg-[#555555] w-[35px] h-[15px] hidden rounded-xl relative border border-solid border-[#555555] sm:block`}
    label {
      ${tw`bg-white w-[10px] h-[10px] absolute left-[4px] top-[2px]  rounded-xl flex items-center justify-center`}
    }
    input[type="checkbox"] {
      ${tw`absolute border-none w-[40px] z-20 cursor-pointer opacity-0`}
    }
  }
  .active-dark {
    ${tw`bg-white`}
    label {
      ${tw`left-[21px] bg-[#555555]`}
    }
  }
`;

