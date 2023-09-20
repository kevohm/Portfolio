import styled from "styled-components"
import tw from "twin.macro"

export const Main = styled.section`
  ${tw`py-24 bg-white dark:bg-darkGrey`}
  .projects {
    ${tw`flex flex-col items-center px-2 sm:p-0 sm:items-start sm:flex-row `}

    .projects-details {
      ${tw`w-full grid grid-cols-[repeat(auto-fit, minmax(200px,1fr))] sm:grid-cols-[repeat(auto-fit, minmax(300px,1fr))] gap-10 h-fit`}
    }
  }
`;