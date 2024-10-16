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
{/* TODO: Mejorar esto antes de enseñarselo a nadie: labels y demas */}
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
              paragraphText: 'Learn how to create, cancel and modify appointments, and how to set automatic notifications for patients to receive appointment confirmations and reminders.',
              image: { src: image1, alt: '' },
            },
          },
          {
            tabTitle: '2. Adding blocks',
            field_group: {
              labelText: '02 - SETTINGS', 
              contentTitle: 'Adding blocks',
              paragraphText: 'Will a specialist be absent for a few hours? Learn how to block their schedule and prevent patients from scheduling appointments during that time.',
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
