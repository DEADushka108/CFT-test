import React from 'react';
import {AppRoute} from '../../utils/const';
import {userDetails} from '../../types/user';
import {Article, ImageWrapper, InfoWrapper, UserImage, UserName, InfoList, InfoItem, InfoText, InfoLink, RouteLink} from '../../styles/user-card-small/user-card-small';

const UserCardSmall = (props) => {
  const {userInfo} = props;
  const {id, name, username, email, phone, website} = userInfo;

  return <Article>
    <ImageWrapper>
      <UserImage src="./img/content/no-user.png" alt={username}/>
      <div>
        <UserName>{name}</UserName>
      </div>
    </ImageWrapper>
    <InfoWrapper>
      <InfoList>
        <InfoItem>
          <InfoText>Username:</InfoText>
          <RouteLink to={`${AppRoute.USER}/${id}`} >{username}</RouteLink>
        </InfoItem>
        <InfoItem>
          <InfoText>Email:</InfoText>
          <InfoLink href={`mailto:${email}`}>{email}</InfoLink>
        </InfoItem>
        <InfoItem>
          <InfoText>Phone:</InfoText>
          <InfoLink href={`tel:${phone}`}>{phone}</InfoLink>
        </InfoItem>
        <InfoItem>
          <InfoText>Website:</InfoText>
          <InfoLink href={website}>{website}</InfoLink>
        </InfoItem>
      </InfoList>
    </InfoWrapper>
  </Article>;
};

UserCardSmall.propTypes = {
  userInfo: userDetails,
};

export default UserCardSmall;

