'use client';

import { FC } from 'react';
import Image from 'next/image';
import { SearchForm } from '../components/SearchForm/SearchForm';
import { StaticImageData } from 'next/image';
import UserMinature from '../../public/assets/UserMinature.png';
import style from './UserBar.module.scss';

export const UserBar:FC = () => {
  const userMinature: StaticImageData = UserMinature;

  return (
    <div className={style.userBar}>
      <SearchForm />
      <div className={style.userPanelContainer}>
        <div className={style.userPanel}>
          <div className={style.iconContainer}>
            <i className={`${style.userPanelIcon} bi bi-chat-square-text`}></i>
            <i className={`${style.userPanelIcon} bi bi-bell`}></i>
          </div>
          <Image
            src={userMinature}
            alt="User Minature"
            className={style.userMinature}
          />
          <div className={style.userData}>
            <span className={style.userName}>Sławomir Kowalski</span>
            <span className={style.userRole}>Administrator</span>
          </div>
        </div>
      </div>
    </div>
  );
};
