import styled from '@emotion/styled';

export const Container = styled.div`
  margin: 0 auto;
  border: 1px solid grey;
  width: 300px;
`;

export const Img = styled.img`
  width: 200px;
  padding-top: 30px;
  padding-bottom: 15px;
  border-radius: 50%;
  display: block;
  margin: 0 auto;
`;

export const Paragraph = styled.p`
  text-align: center;
  font-size: 16px;
  margin: 0px;
  padding-bottom: 10px;
  color: grey;
`;

export const ParagraphTitle = styled.p`
  font-weight: bold;
  text-align: center;
  font-size: 18px;
  margin: 0px;
  padding-bottom: 10px;
`;

export const Description = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  width: 300px;
  border-bottom: 1px solid grey;
`;

export const Stats = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 0px;
  margin: 0px;
  background-color: rgba(128, 128, 128, 0.1);
`;

export const List = styled.li`
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  :not(:last-child) {
    border-right: 1px solid grey;
  }
  padding: 20px;
  line-height: 1.5;
`;
