
/**
* Copyright (c) 2023 - present TinyEngine Authors.
* Copyright (c) 2023 - present Huawei Cloud Computing Technologies Co., Ltd.
*
* Use of this source code is governed by an MIT-style license.
*
* THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
* BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
* A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
*
*/
import { Service } from 'egg';

export default class CnpmService extends Service {
  authToken = this.config.authToken;
  registry = this.config.registry;
  async loginInNpm(packagePath) {
    const commands = [
      'npm config set strict-ssl false',
      `npm config set registry http://192.168.0.113:4873`   
    ];
    //const commands = ['npm publish']; 
    return this.ctx.helper.execCommandWithCatch(commands, { cwd: packagePath }, 'login npm');
  }

  async publishCnpm(packagePath) {
    const commands = [
      'npm publish --registry http://192.168.0.113:4873'];
    return this.ctx.helper.execCommandWithCatch(commands, { cwd: packagePath }, 'publish npm');
  }

}
