import React, { useEffect } from 'react';
import { StencilWrapper } from '@layout-renderer/core';
import { DataStoreTypes } from '@layout-renderer/datastores';
import { defineCustomElements } from '@layout-renderer/layout-renderer';
import allWidgets from './Widgets';
import { APPLICATION_CSS_LINKS } from '../config/styles';

const widgetsCss = APPLICATION_CSS_LINKS.map((style) => ({
  href: style,
  rel: 'preload stylesheet',
  as: 'style'
}));

const LayoutRenderer = ({ layout, data = {} }) => {
  useEffect(() => {
    defineCustomElements();
  }, []);

  return (
    <StencilWrapper
      layout={layout}
      datastores={DataStoreTypes}
      stylesheetUrls={widgetsCss}
      widgets={allWidgets}
      data={data}
    >
      <astad-layout-renderer />
    </StencilWrapper>
  );
};

export default LayoutRenderer;
