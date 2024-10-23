import { Island } from '@hubspot/cms-components';
import LeftTabsContentGallery from '../../islands/LeftTabsContentGallery.jsx?island';
import Layout from '../../Layout.jsx';

export const Component = ({ fieldValues }) => {
  const { module_items, general_title: title, general_subtitle: subtitle } = fieldValues;

  return (
    <Layout>
      <h2 className='title'>{ title }</h2>
      <p className='subtitle'>{ subtitle }</p>

      <Island
        module={LeftTabsContentGallery}
        hydrateOn="load"
        module_items={module_items}
      />
    </Layout>
  );
};

export { fields } from './fields.jsx';

export const meta = {
  label: `A nice Left tabs content gallery`,
};
