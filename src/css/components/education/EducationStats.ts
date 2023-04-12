import styled from "styled-components"
import tw from "twin.macro"

export const Main = styled.div`
  ${tw`h-full pl-6 `}
  p {
    ${tw`pt-10 pb-6 dark:text-white`}
  }
  div {
    ${tw`p-3 px-1`}
    label {
      ${tw`block mb-3 dark:text-white`}
    }
    progress {
      -webkit-appearance: none;
      appearance: none;
      ${tw`w-[calc(100% - 30px)] sm:w-[calc(100% - 50px)] `}
      ::-webkit-progress-bar {
        ${tw`rounded`}
        background: rgba(40,40,40,.1);
        height: 6px;
      }
      ::-webkit-progress-value {
        ${tw`rounded`}
        background: #74cbf1;
      }
    }
  }
`;