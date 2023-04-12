import styled from "styled-components";
import tw from "twin.macro";

export const Main = styled.section`
  ${tw`min-h-[calc(100vh - 100px)] dark:bg-[#404040]`}
  .details {
    ${tw`min-h-full flex flex-col items-center sm:flex-row sm:items-start pt-10`}
  }
`;
