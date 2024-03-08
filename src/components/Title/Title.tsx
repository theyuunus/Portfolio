import React from 'react';
import Text from '../Text/Text';
import './Title.scss';
import { TitleProps } from '../../interfase/Title';

const TitleHr: React.FC<TitleProps> = ({ title }) => {
    return (
        <div className="title">
            <Text className="title-text">
                <span className="title-text-span">#</span>{title}
            </Text>
            <hr className="title-hr" />
        </div>
    );
};

const Title: React.FC<TitleProps> = ({ title }) => {
    return (
        <div className="title">
            <Text className="title-text">
                <span className="title-text-span">#</span>{title}
            </Text>
        </div>
    );
};

const Heading: React.FC<TitleProps> = ({ title }) => {
    return (
        <div className="title">
            <Text className="title-text">
                <span className="title-text-span">/</span>{title}
            </Text>
        </div>
    )
}

export { TitleHr, Title, Heading };
