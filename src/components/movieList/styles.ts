import styled from "styled-components";

export const Container = styled.div`
   display:block;
   width: 100%;
   padding: 30px 0px 0px 60px;

   position: relative;
   h1{
      font-size: 1rem;
      line-height: 1.25w;
      margin-bottom: 10px;
      font-weight: 700;
   }

   section{
      display: flex;
      overflow-x: hidden;
    
   }
   
   .movies{
      display: block;
      width: 200px;
      cursor: pointer;
      margin-right: 5px;
      border-radius: 2px;
   }

   .movies:hover{
      transform: scale(1)
   }
`
