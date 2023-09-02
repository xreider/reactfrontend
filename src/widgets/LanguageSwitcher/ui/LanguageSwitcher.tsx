import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import Languages from 'shared/assets/icons/languages.svg';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './LanguageSwitcher.module.scss';

interface LanguageSwitcherProps {
  className?: string
}

export const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
  const { t, i18n } = useTranslation();

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(cls.LanguageSwitcher, {}, [className])}
      onClick={() => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
      }}
    >
      <Languages fill="var(--bg-color)" />
      {' '}
      <span style={{ color: 'var(--secondary-color)' }}>
        {t('Текущий язык')}
      </span>
    </Button>
  );
};
