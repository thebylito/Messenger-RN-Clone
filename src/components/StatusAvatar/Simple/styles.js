import styled from 'styled-components/native';

export const Avatar = styled.Image`
    min-width: 54px;
    min-height: 54px;

    position: absolute;
    margin-left: 8px;

    box-shadow: 2px 2px 2px ${props => props.theme.colors.text};

    border-color: ${props => props.theme.colors.primary};
    border-width: 2px;
    border-radius: 27px;
`;

export const Button = styled.TouchableOpacity`
`;

export const Circle = styled.View`
    position: absolute;
    left: 60%;
    top: 60%;

    height: 24px;
    width: 24px;

    background: ${ props => props.theme.colors.Green };
    border-color: ${ props => props.theme.colors.secundary };
    border-width: 5px;
    border-radius: 50px;
`;