import {
  Menu
} from '@phosphor/widgets';

import {
  IMainMenu
} from 'jupyterlab/lib/mainmenu';

import {
  JupyterLab, JupyterLabPlugin
} from 'jupyterlab/lib/application';


function activate(app: JupyterLab, mainMenu: IMainMenu): void {

  const category = 'Hub';
  const { commands } = app;
  let command = 'test';
  commands.addCommand(command, {
    label: 'test',
	caption: 'test',
    execute: () => {
      console.log('test');
    }
  });

  let menu = new Menu({ commands });
  // ^ compilations fails here
}
