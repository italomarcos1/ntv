import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
  background-color: #333;
`;

export const Form = styled.View`
  flex-direction: row;
  padding: 0 15px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: '#444',
})`
  flex: 1;
  height: 35px;
  background-color: #999;
  font-family: monospace;
`;

export const SubmitButton = styled(RectButton)`
  background-color: #222;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  padding: 0 12px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const User = styled.View`
  align-items: center;
  margin: 0 20px 30px;
`;

export const Avatar = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 32px; /* não temos porcentagem, então isso equivale ao border-radius 50% */
  background: #eee; /* cor de fundo enquanto a imagem não carrega */
`;

export const Name = styled.Text`
  font-size: 14px;
  color: #999;
  font-weight: bold;
  margin-top: 4px;
  text-align: center; /* caso o texto tenha mais de 1 linha, align-items não funfa */
`;

export const Bio = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 13px;
  line-height: 18px;
  color: #999;
  margin-top: 5px;
  text-align: center;
`;

export const ProfileButton = styled(RectButton)`
  margin-top: 10px;
  align-self: stretch; /* alinha pra ocupar a largura total do componente. */
  border-radius: 4px;
  background: #e6b32a;
  justify-content: center;
  align-items: center;
  height: 36px;
`;

export const ProfileButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-transform: uppercase;
`;
