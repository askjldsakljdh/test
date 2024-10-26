"use client";

import ReactDOM from 'react-dom';
import styles from './styles.module.scss';
import Button from '../Button';
import { useEffect, useState } from 'react';
import { CloseIcon } from '@/components/icons';

export type PopupProps = {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
}

export const Popup = ({ title, children, onClose, isOpen }: PopupProps) => {
  const [visible, setVisible] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
    } else {
      // Задержка для плавного скрытия перед удалением
      setTimeout(() => setVisible(false), 300);
    }
  }, [isOpen]);

  if (!visible && !isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div
      className={`${styles.popupOuter} ${(visible && isOpen) ? styles.open : styles.close}`}
      onClick={() => onClose()}
    >
      <div className={`${styles.popup} ${(visible && isOpen) ? styles.open : styles.close}`} onClick={(e) => e.stopPropagation()}>
        <div className={styles.popupHeader}>
          <h2>{title}</h2>
          <Button className={styles.closeBtn} onClick={onClose}>
            <CloseIcon />
          </Button>
        </div>
        <div className={styles.popupContent}>
          {children}
        </div>
      </div>
    </div>,
    document.getElementById('portal') as HTMLElement
  );
}