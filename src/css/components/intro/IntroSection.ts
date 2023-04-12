import styled  from "styled-components"
import tw from "twin.macro"

const Main = styled.section`
  ${tw`w-full `}
  .pdf-viewer {
    ${tw`absolute w-full h-full bg-[#fff] dark:bg-[#404040] z-20`}
    .icon{
      ${tw`px-6 h-[50px] text-xl flex items-center justify-items-center text-[#404040] dark:text-white`}
    }iframe{
      ${tw`h-[calc(100% - 50px)] border-none `}
    }
  }
`;
export default Main