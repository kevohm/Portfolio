import styled from "styled-components";
import tw from "twin.macro";

export const Body = styled.section`
  ${tw`h-[510px] sm:h-[535px] flex items-center justify-center dark:bg-[#404040]`}
  .body-div {
    ${tw`w-full mx-[40px] flex flex-col-reverse items-center space-x-20 justify-between max-w-[1270px] sm:flex-row`}
    .image{
        ${tw`hidden sm:block`}
        >img{
            ${tw`w-full sm:w-[240px] md:w-[340px] lg:w-[450px]`}
        }
    }
    .info{
        ${tw`max-w-[410px] lg:w-auto lg:max-w-[520px] flex flex-col items-start space-y-[32px]`}
        p{
            ${tw`p-0 m-0 dark:text-white`}
        }.details{
            font-family:Inter;
        }.info-title{
            font-weight:600;
            ${tw`text-[30px] dark:text-white`}
            span{
                ${tw`text-[#74CBF1] ml-2`}
            }
        }button{
            font-weight:600;
            ${tw`p-2 bg-white rounded cursor-pointer border border-solid border-[#D3D3D3] hover:border-[rgba(40,40,40,.8)] dark:text-white dark:bg-[#404040] dark:hover:border-[rgba(255,255,255,.8)]`}
        }      
  }
`;
