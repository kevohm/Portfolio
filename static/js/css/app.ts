import styled from "styled-components"
import tw from "twin.macro"

const Main = styled.div`
  ${tw`w-full max-w-[1440px] mx-auto bg-white dark:bg-[#555555]`}
  .small-popup {
    ${tw`hidden relative p-0 m-0 absolute left-0 top-0 w-screen h-screen bg-white  items-center justify-center z-40`}
    .iconHolder {
      ${tw`absolute top-0 left-0 py-3 px-4  flex items-center justify-between w-full`}
      .times-icon {
        ${tw`text-[25px] text-[#404040]`}
      }
      .dark-mode-toggle {
        ${tw`bg-[#404040] w-[35px] h-[15px] rounded-xl relative border border-solid border-[#404040]`}

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
          ${tw`left-[21px] bg-[#404040]`}
        }
      }
    }
    ul {
      ${tw`p-0 m-0  w-full list-none items-start justify-evenly space-y-4 flex flex-col`}
      li {
        ${tw`p-0 m-0 w-full p-3 pl-10 pr-0 text-lg cursor-pointer text-[#404040] hover:text-white hover:bg-[#404040]`}
      }
    }
  }
  .small-popup-active {
    ${tw`bg-[#404040]`}
    .iconHolder {
      .times-icon {
        ${tw`text-[#fff]`}
      }
    }
    ul {
      li {
        ${tw`text-[#fff] hover:bg-[#fff] hover:text-[#404040]`}
      }
    }
  }
  .active-popup {
    ${tw`flex`}
  }
`;

export default Main 