import React, { Fragment } from 'react';
import './Card.scss';
import { CardProps } from '../../interfase/card';
import Text from '../Text/Text';
import { ButtonDemo, ButtonLive } from '../Button/Button';

export const Card: React.FC<CardProps> = ({ image, languages, title, text, link, demo }) => {
  return (
    <Fragment>
      <div className="card">
        <img
          src={image}
          alt="error"
          className="card-img"
        />
        <Text className="card-languages">{languages}</Text>
        <div className="card-wrap">
          <Text as='h1' className="card-wrap-title">{title}</Text>
          <Text className="card-wrap-text">{text}</Text>
          <div className="card-wrap-buttons">
            <ButtonLive title='Live <~>' link={link} />
            <ButtonDemo title='Cached >=' link={demo} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export const SmallCard: React.FC<CardProps> = ({ languages, title, text, demo }) => {
  return (
    <Fragment>
      <div className='small__card'>
        <Text className='card-languages'>{languages}</Text>
        <div className="card-wrap">
          <Text as='h1' className="card-wrap-title">{title}</Text>
          <Text className="card-wrap-text">{text}</Text>
          <ButtonLive title='Github <~>' link={demo} />
        </div>
      </div>
    </Fragment>
  )
};
