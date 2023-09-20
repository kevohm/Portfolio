import styled from "styled-components"
import tw from "twin.macro"

export const Main = styled.section`
  ${tw`w-full bg-white dark:bg-darkGrey`}
  .details {
    ${tw`overflow-y-scroll bg-white flex flex-col items-start sm:flex-row dark:bg-transparent`}
  }
`;