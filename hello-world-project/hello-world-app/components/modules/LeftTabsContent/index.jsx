import { Island } from '@hubspot/cms-components';
import LeftTabsContentGallery from '../../islands/LeftTabsContentGallery.jsx?island';
import Layout from '../../Layout.jsx';

export const Component = ({ fieldValues, hublParameters = {} }) => {
  const {
    default_todo: defaultTodos,
  } = fieldValues;

  const { title } = hublParameters;

  return (
    <Layout>
      <h2 className='title'>{title || 'This is an optional heading block!'}</h2>
      <p className='subtitle'>Check this series of video tutorials to help you configure the most basic aspects of the tool.</p>

      <Island
        module={LeftTabsContentGallery}
        hydrateOn="load"
        initialTodos={defaultTodos}
      />
    </Layout>
  );
};

export { fields } from './fields.jsx';

export const meta = {
  label: `A nice Left tabs content gallery`,
};
