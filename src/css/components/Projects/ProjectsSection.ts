import styled from "styled-components"
import tw from "twin.macro"

export const Main = styled.section`
  ${tw`min-h-screen pb-6 bg-white dark:bg-[#404040]`}
  .projects {
    ${tw`flex flex-col items-center px-2 sm:p-0 sm:items-start sm:flex-row `}

    .projects-details {
      ${tw`w-full sm:w-[calc(100vw - 350px)] grid grid-cols-[repeat(auto-fit, minmax(200px,1fr))] sm:grid-cols-[repeat(auto-fit, minmax(300px,1fr))] gap-10 h-fit`}
    }
  }
`;