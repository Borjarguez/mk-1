import React from 'react';
import {
  FieldGroup,
  ModuleFields,
  TextField,
  ImageField,
  RepeatedFieldGroup,
} from '@hubspot/cms-components/fields';

import image1 from '../../assets/image_1.png';
import image2 from '../../assets/image_2.png';

/**
 * Here we are defining module fields that will show up for marketers in the page editor so they can customize the module
 * We also define default field values
 */
export const fields = (
  <ModuleFields>
    <RepeatedFieldGroup
        name="module_items"
        label="Default Todos"
        occurrence={{
          min: 1,
          max: 9,
          default: 1,
        }}
        default={[
          {
            tabTitle: '1. Creating and managing appointments',
            field_group: {
              labelText: '01 - FIRST STEPS', 
              contentTitle: 'Creating and managing appointments',
              paragraphText: 'Learn how to create, cancel and modify appointments, and how to set automatic notifications for patients to receive appointment confirmation and visit reminder notifications.',
              image: { src: image1, alt: '' },
            },
          },
          {
            tabTitle: '2. Adding blocks',
            field_group: {
              labelText: '02 - SETTINGS', 
              contentTitle: 'Adding blocks',
              paragraphText: 'Will a specialist be absent for a few hours on a certain day, or maybe is going on holiday? We show you how to add blocks to the calendar so that patients cannot book appointments for those dates.',
              image: { src: image2, alt: '' },
            },
          },
        ]}
      >
      <TextField
        label="Tab's text"
        name="tabTitle"
        default="ExampleTabText"
        required
      />

      <FieldGroup name="field_group" label="Default Todo" expanded={false}>
        <TextField
          label="Todo title"
          name="labelText"
          default="Todo Test 1"
          required
        />

        <TextField
          label="Todo title"
          name="paragraphText"
          default="Todo Test 1"
          required
        />
        
        <TextField
          label="Todo title"
          name="contentTitle"
          default="Todo Test 1"
          required
        />

        <ImageField
          name="image"
          label="Image"
          default={{ src: "", alt: "" }}
          resizable={true}
        />
      </FieldGroup>
    </RepeatedFieldGroup>
  </ModuleFields>
);
