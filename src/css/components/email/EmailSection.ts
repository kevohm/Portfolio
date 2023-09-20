import styled from "styled-components";
import tw from "twin.macro";

export const Main = styled.section`
  ${tw`w-full bg-white dark:bg-darkGrey`}
  .details {
    ${tw`flex flex-col items-center sm:flex-row sm:items-start pt-10`}
  }
`;
