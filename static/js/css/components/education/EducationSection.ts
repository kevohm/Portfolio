import styled from "styled-components"
import tw from "twin.macro"

export const Main = styled.section`
  ${tw`min-h-screen dark:bg-[#404040]`}
  .details {
    ${tw`min-h-[calc(100vh - 100px)] overflow-y-scroll bg-white flex flex-col items-start sm:flex-row dark:bg-[#404040]`}
  }
`;