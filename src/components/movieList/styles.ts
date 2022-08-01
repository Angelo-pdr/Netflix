import styled from "styled-components";

export const Container = styled.div`
   display:block;
   width: 100%;
   padding: 30px 0px 0px 60px;
   position: relative;
   overflow: hidden;
   h1{
      font-size: 1rem;
      line-height: 1.25w;
      margin-bottom: 10px;
      font-weight: 700;
   }

   section{
      display: flex;
      width: 100%;
      transition: all ease  0.5s;
   }

   .rightArrow, .leftArrow{
      position: absolute;
      width: 40px;
      height: 150px;
      background-color: rgba( 0, 0, 0, 0.6);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 99;
      cursor: pointer;
      overflow: hidden;
      opacity: 0;
      transition: all ease  0.6s;
   }

   &:hover .rightArrow,
   &:hover .leftArrow{
      opacity: 1;
   }

   .leftArrow{
      left: 0;
   }

   .rightArrow{
      right: 0;
   }

   .movies{
      display: block;
      height: 150px;
      margin-right: 5px;
      cursor: pointer;
      border-radius: 2px;
      transition: all ease 0.2s;
   }
`
