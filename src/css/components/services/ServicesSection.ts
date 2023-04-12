import styled from "styled-components"
import tw from "twin.macro"

export const Main = styled.main`
  ${tw`bg-[#FBFBFB] dark:bg-[#404040] min-h-screen pb-8`}
  border:1px solid transparent;
  border-top: 1px solid #d3d3d3;
  border-bottom: 1px solid #d3d3d3;
  .services {
    ${tw`min-h-[calc(100vh - 100px)] flex flex-col items-center justify-start md:justify-evenly space-x-0 space-y-4 md:space-y-0 md:space-x-4 px-6 md:flex-row`}
  }
`;