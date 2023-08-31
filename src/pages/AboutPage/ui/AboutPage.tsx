import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation('about');

  return <div>!!! {t('О сайте')}</div>;
  return <div>!!! {t('О сайте123')}</div>;
};

export default AboutPage;
