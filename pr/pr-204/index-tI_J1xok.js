import { U as export_default } from './DocsRenderer-CFRXHY34-1zYTmd6E.js';
import './index-D8Fay_S-.js';
import 'react-dom';
import './index-Kjm4kNkQ.js';

/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */


/** @type {Readonly<MDXComponents>} */
const emptyComponents = {};

const MDXContext = export_default.createContext(emptyComponents);

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = export_default.useContext(MDXContext);

  // Memoize to avoid unnecessary top-level context changes
  return export_default.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents;

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents;
  } else {
    allComponents = useMDXComponents(properties.components);
  }

  return export_default.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}

export { MDXProvider, useMDXComponents };
