import React from 'react';
import {
  FieldGroup,
  ModuleFields,
  TextField,
  ImageField,
  RepeatedFieldGroup,
} from '@hubspot/cms-components/fields';

import image1 from '../../assets/image_1.png';

/**
 * Here we are defining module fields that will show up for marketers in the page editor so they can customize the module
 * We also define default field values
 */
export const fields = (
  <ModuleFields>
    <RepeatedFieldGroup
        name="default_todos"
        label="Default Todos"
        occurrence={{
          min: 1,
          max: 9,
          default: 1,
        }}
        default={[
          {
            tabText: 'Todo Test 1a',
            labelText: 'Todo Test 1a', 
            contentTitle: 'Todo Test 1a',
            paragraphText: 'Todo Test 1a',
            image: { src: image1, alt: '' },
          },
        ]}
      >
      <TextField
        label="Tab's text"
        name="tabText"
        default="ExampleTabText"
        required
      />

      <FieldGroup name="default_todo" label="Default Todo" expanded={false}>
        <TextField
          label="Todo title"
          name="text"
          default="Todo Test 1"
          required
        />

        <TextField
          label="Todo title"
          name="text2"
          default="Todo Test 1"
          required
        />

        <ImageField
          name="logo"
          label="Logo"
          default={{ src: "", alt: "" }}
          resizable={true}
        />
      </FieldGroup>
    </RepeatedFieldGroup>
  </ModuleFields>
);
