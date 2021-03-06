import styled from 'styled-components/native';
import * as React from 'react-native';
import M from '$root/components/StatusAvatar/Messenger';

export const Container = styled.View`
  flex: 1;

  background-color: ${ props => props.theme.colors.secundary };
`;

export const FlatList = styled(React.FlatList)`
  min-width: 100%;
  height: 70px;

  padding: 10px;
  padding-bottom: 0px;
  margin-bottom: 10px;
  /* justify-content: center; */

  /* background-color: #f00; */
`;

export const Messenger = styled(M)`
  margin-left: 10px;
  margin-right: 10px;
`;