import styled from '@emotion/styled';

export const Paragraph = styled.p`
  font-size: 16px;
`;

export const StatusDot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-top: 20px;
  margin-left: 5px;
  margin-right: 5px;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};
`;

export const FriendList = styled.ul`
  list-style: none;
  padding-left: 0px;
`;

export const List = styled.li`
  display: flex;
  justify-content: flex-start;
  border: 1px solid grey;
  box-shadow: 3px 3px 5px 0 rgba(0, 0, 0, 0.2);
  margin: 10px;
`;

export const Description = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  width: 330px;
`;
