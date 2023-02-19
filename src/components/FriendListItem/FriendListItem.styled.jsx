import styled from '@emotion/styled';

export const Status = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => {
    return props.isOnline ? 'green' : 'red';
  }};
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
`;

export const Name = styled.p`
  font-size: 28px;
  font-weight: 500;
`;
