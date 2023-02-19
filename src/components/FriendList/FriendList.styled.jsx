import styled from '@emotion/styled';
export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
  margin-top: 50px;
  margin-bottom: 30px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: 15px;
  gap: 20px;
  width: 300px;
  height: 50px;
  box-shadow: 0px 5px 5px 1px rgba(0, 0, 0, 0.61);
  :not(:last-child) {
    margin-bottom: 20px;
  }
`;
