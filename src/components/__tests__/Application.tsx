import { shallow } from 'enzyme';
import * as React from 'react';

import { mockRouterProps } from '../../mocks/components';
import { FrontendVariant } from '../../reducers/states';
import Application, { IApplicationProps } from '../Application';
import { ExternalLibraryName, ExternalLibraryNames } from '../assessment/assessmentShape';

test('Application renders correctly', () => {
  const props: IApplicationProps = {
    ...mockRouterProps('/academy', {}),
    title: 'Cadet',
    currentPlaygroundChapter: 2,
    currentPlaygroundVariant: 'default',
    handleLogOut: () => {},
    currentExternalLibrary: ExternalLibraryNames.NONE,
    handleClearContext: (
      chapter: number,
      variant: FrontendVariant,
      externalLibraryName: ExternalLibraryName
    ) => {},
    handleEditorValueChange: (val: string) => {},
    handleEditorUpdateBreakpoints: (breakpoints: string[]) => {},
    handleEnsureLibrariesLoaded: () => {},
    handleExternalLibrarySelect: (externalLibraryName: ExternalLibraryName) => {},
    handleSetExecTime: (execTime: string) => {}
  };
  const app = <Application {...props} />;
  const tree = shallow(app);
  expect(tree.debug()).toMatchSnapshot();
});
